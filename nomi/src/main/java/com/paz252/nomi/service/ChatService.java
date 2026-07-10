package com.paz252.nomi.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.ai.chat.client.advisor.vectorstore.QuestionAnswerAdvisor;
import org.springframework.stereotype.Service;

/*
To stop Gemini from veering off-topic (e.g., generating recipes or inventing work history), 
we pass a highly restricted System Prompt inside Spring AI's native orchestration framework.
*/

@Service
public class ChatService {

    private final ChatClient chatClient;

    public ChatService(ChatClient.Builder chatClientBuilder, VectorStore vectorStore){
        // Backend guardrail protecting Gemini's conversational boundary
        String systemGuardrailPrompt = """
            You are NOMI, an elite and professional AI portfolio gatekeeper representing the software engineer 'Aman Saxena'.
            Your primary task is to answer questions asked by recruiters and hiring managers based strictly on the verified context provided below.
            
            CRITICAL CONSTRAINTS:
            1. Only answer questions using the facts provided in the context snippet. 
            2. If the answer cannot be found in the provided context, or if the user asks an off-topic question (such as cooking recipes, general programming help, political debates, or writing code unrelated to the resume), you must decline politely and professionally.
            3. Never hallucinate or invent any professional experience, metrics, or technologies that are not stated in the source documents.
            4. Keep responses concise, clear, and highly focused on highlighting paz252's technical expertise.
            
            ---------------------
            CONTEXT:
            {question_context}
            ---------------------
            """;

        this.chatClient = chatClientBuilder
                            .defaultSystem(systemGuardrailPrompt)
                            .defaultAdvisors(QuestionAnswerAdvisor.builder(vectorStore).build())
                            .build();
    }

    public String generateAnswer(String message){

        return this.chatClient.prompt()
                .user(message)
                .call()
                .content();
    }
}
