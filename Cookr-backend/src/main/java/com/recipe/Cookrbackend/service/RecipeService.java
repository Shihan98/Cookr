package com.recipe.Cookrbackend.service;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.dto.RecipeResponseDto;
import com.recipe.Cookrbackend.dto.RecipeUpdateDto;

import java.util.List;

public interface RecipeService {
    String saveRecipe(RecipeDto recipeDto);

    List<RecipeResponseDto> getAllRecipe();

    RecipeDto recipeGetById(long id);

    RecipeDto recipeDeleteById(long id);

    RecipeDto recipeUpdate(RecipeUpdateDto recipeUpdateDto);
}
