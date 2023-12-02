package com.recipe.Cookrbackend.controller;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.service.RecipeService;
import com.recipe.Cookrbackend.util.StandardResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/recipe")
@CrossOrigin
@AllArgsConstructor
public class RecipeController {

    private RecipeService recipeService;
    @PostMapping("save")
    public ResponseEntity<StandardResponse> saveRecipe(@RequestBody RecipeDto recipeDto){
        String message = recipeService.saveRecipe(recipeDto);
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(201,message,null), HttpStatus.CREATED
        );
    }

    @GetMapping(path = "all-recipe")
    public ResponseEntity<StandardResponse> getAllRecipe(){
        List<RecipeDto> recipeDtoList = recipeService.getAllRecipe();
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"Success",recipeDtoList), HttpStatus.CREATED
        );
    }
}
