package com.paz252.nomi.config;

import static org.mockito.Mockito.mock;

import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;

import com.paz252.nomi.service.ChatService;

@TestConfiguration
public class TestVectorStoreConfig {

    @Bean
    VectorStore vectorStore() {
        return mock(VectorStore.class);
    }

    @Bean
    ChatService chatService() {
        return mock(ChatService.class);
    }
}
