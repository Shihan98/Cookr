package com.recipe.Cookrbackend.dto;

import lombok.*;

import java.security.Timestamp;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecipeDto {
    private Long id;
    private String recipeName;
    private String ingredients;
    private String description;
    private LocalDateTime createDate;
    private LocalDateTime update;
}
