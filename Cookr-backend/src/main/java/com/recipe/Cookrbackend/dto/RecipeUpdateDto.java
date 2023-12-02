package com.recipe.Cookrbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RecipeUpdateDto {
    private Long id;
    private String name;
    private String ingredients;
    private String description;
}
