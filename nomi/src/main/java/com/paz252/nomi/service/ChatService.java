package com.paz252.nomi.service;

import java.util.List;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.ai.chat.client.advisor.vectorstore.QuestionAnswerAdvisor;
import org.springframework.ai.mcp.SyncMcpToolCallbackProvider;
import org.springframework.stereotype.Service;

import io.modelcontextprotocol.client.McpSyncClient;

/*
To stop Gemini from veering off-topic (e.g., generating recipes or inventing work history), 
we pass a highly restricted System Prompt inside Spring AI's native orchestration framework.
*/

@Service
public class ChatService {

        private final ChatClient chatClient;

        public ChatService(ChatClient.Builder chatClientBuilder, VectorStore vectorStore,
                        List<McpSyncClient> mcpClients) {

                // Construct the composite tool engine from all active connection clients
                var mcpToolCallbackProvider = SyncMcpToolCallbackProvider.builder()
                                .mcpClients(mcpClients)
                                .build();

                var callbacks = mcpToolCallbackProvider.getToolCallbacks();
                System.out.println("Discovered MCP tools: " + callbacks.length);
                for (var cb : callbacks) {
                        System.out.println(" - " + cb.getToolDefinition().name());
                }

                // Backend guardrail protecting Gemini's conversational boundary
                String systemGuardrailPrompt = """
                                You are Aman Saxena, an autonomous and elite AI Agent portfolio gatekeeper representing developer 'Aman Saxena'.

                                PUBLIC RESUME LINK:
                                https://paz252.github.io/my-portfolio/assets/amansaxena_resume-B5AaPiSo.pdf

                                Your core capability is dual-layered:
                                1. Perceptual Grounding: Answer background questions using the provided context blocks.
                                2. Proactive Actions: You are securely equipped with active MCP tools to book calendar loops, and email messages including resume copies.

                                CRITICAL CONSTRAINTS:
                                - When a recruiter indicates an intent to schedule a meeting, dynamically call the explicit calendar tool.
                                - When a recruiter asks for a resume copy, prompt the execution engine to drop the file directly into their inbox using the email tool.
                                Inside the email body parameter, you MUST explicitly include the functional PUBLIC RESUME LINK above so they can view and download it instantly.
                                - Ground text generations strictly using context text snippets. Reject off-topic query patterns gracefully.
                                - Keep responses short and concised until asked to elaborate in detail.

                                ---------------------
                                CONTEXT DATA SNAPSHOT:
                                {question_context}
                                ---------------------
                                """;

                this.chatClient = chatClientBuilder
                                .defaultSystem(systemGuardrailPrompt)
                                // Layer 1: Inject the passive vector store lookup coordinates via the Advisor
                                // Pattern
                                .defaultAdvisors(QuestionAnswerAdvisor.builder(vectorStore).build())
                                // Layer 2: Register tool execution interfaces natively
                                .defaultToolCallbacks(mcpToolCallbackProvider)
                                .build();
        }

        public String generateAnswer(String message) {

                var response = this.chatClient.prompt()
                                .user(message)
                                .call()
                                .chatResponse();

                var toolCalls = response.getResult().getOutput().getToolCalls();
                if (toolCalls.isEmpty()) {
                        System.out.println("No tool call triggered for message: " + message);
                } else {
                        toolCalls.forEach(tc -> System.out
                                        .println("Tool invoked: " + tc.name() + " | args: " + tc.arguments()));
                }

                return response.getResult().getOutput().getText();
        }
}
