package com.recipe.Cookrbackend.service;

import com.recipe.Cookrbackend.dto.RecipeDto;

import java.util.List;

public interface RecipeService {
    String saveRecipe(RecipeDto recipeDto);

    List<RecipeDto> getAllRecipe();
}
