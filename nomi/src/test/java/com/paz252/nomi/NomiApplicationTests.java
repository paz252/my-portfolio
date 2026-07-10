package com.paz252.nomi;

import org.junit.jupiter.api.Test;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

import com.paz252.nomi.config.TestVectorStoreConfig;
import com.paz252.nomi.service.ChatService;

@SpringBootTest
@ActiveProfiles("test")
@Import(TestVectorStoreConfig.class)
class NomiApplicationTests {

	 @MockBean
    ChatService chatService;

    @MockBean
    VectorStore vectorStore;

}
