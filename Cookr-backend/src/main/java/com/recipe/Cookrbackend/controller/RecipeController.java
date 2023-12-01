package com.recipe.Cookrbackend.controller;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/recipe")
@CrossOrigin
public class RecipeController {

    @Autowired
    private RecipeService recipeService;
    @PostMapping("save")
    public String saveRecipe(@RequestBody RecipeDto recipeDto){
        String message = recipeService.saveRecipe(recipeDto);
        return message;
    }
}
