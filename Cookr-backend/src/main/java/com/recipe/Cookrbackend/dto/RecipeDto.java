package com.recipe.Cookrbackend.dto;


import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecipeDto {
    private String name;
    private String ingredients;
    private String description;
    private LocalDateTime createDate;
    private LocalDateTime update;
}
