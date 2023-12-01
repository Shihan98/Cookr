package com.recipe.Cookrbackend.service.impl;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.entity.Recipe;
import com.recipe.Cookrbackend.repository.RecipeRepo;
import com.recipe.Cookrbackend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private RecipeRepo recipeRepo;

    @Override
    public String saveRecipe(RecipeDto recipeDto) {
        Recipe recipe = new Recipe(
                recipeDto.getId(),
                recipeDto.getRecipeName(),
                recipeDto.getIngredients(),
                recipeDto.getDescription(),
                recipeDto.getCreateDate(),
                recipeDto.getUpdate()
        );

        recipeRepo.save(recipe);
        return "saved";
    }
}
