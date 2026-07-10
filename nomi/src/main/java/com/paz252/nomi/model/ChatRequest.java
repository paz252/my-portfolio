package com.paz252.nomi.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ChatRequest {
    @NotBlank(message = "Message query cannot be empty or blank.")
    @Size(max = 1000, message = "Maximum 1000 characters allowed in the prompt.")
    private String message;
}
