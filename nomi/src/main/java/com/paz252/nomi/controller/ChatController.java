package com.paz252.nomi.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.paz252.nomi.model.ChatRequest;
import com.paz252.nomi.service.ChatService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/*
This controller exposes the endpoints consumed directly by your React frontend. 
It includes explicit cross-origin configurations (@CrossOrigin) to facilitate 
effortless development when connecting portfolio UI locally or via GitHub Pages.
*/

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow your hosted frontend to securely query the Render backend environment
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/chat")
    public ResponseEntity<Map<String, String>> askNomi(@Valid @RequestBody ChatRequest request) {
        String aiResponse = chatService.generateAnswer(request.getMessage());
        return ResponseEntity.ok(Map.of("response", aiResponse));
    }
    
}
