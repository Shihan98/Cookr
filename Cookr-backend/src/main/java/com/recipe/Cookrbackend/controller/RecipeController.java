package com.recipe.Cookrbackend.controller;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.dto.RecipeResponseDto;
import com.recipe.Cookrbackend.dto.RecipeUpdateDto;
import com.recipe.Cookrbackend.entity.Recipe;
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

    @GetMapping(path = "getAll")
    public ResponseEntity<StandardResponse> getAllRecipe(){
        List<RecipeResponseDto> recipeDtoList = recipeService.getAllRecipe();
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"Success",recipeDtoList), HttpStatus.OK
        );
    }
    @GetMapping(path ="{id}")
    public ResponseEntity<StandardResponse> recipeGetByID(@PathVariable(value = "id") long id){
        RecipeDto recipe = recipeService.recipeGetById(id);
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"Success",recipe),HttpStatus.OK
        );
    }

    @DeleteMapping(path = "delete/{id}")
    public ResponseEntity<StandardResponse> recipeDeleteById(@PathVariable(value = "id") long id){
        RecipeDto recipe = recipeService.recipeDeleteById(id);
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"success",recipe), HttpStatus.OK
        );
    }

    @PutMapping (path = "update")
    public ResponseEntity<StandardResponse> recipeUpdate(@RequestBody RecipeUpdateDto recipeUpdateDto){
        RecipeDto upadteRecipe =  recipeService.recipeUpdate(recipeUpdateDto);
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(201,"Updated",upadteRecipe),HttpStatus.OK
        );
    }
    @GetMapping(path = "getlast")
    public ResponseEntity<StandardResponse> getLastRecipes(){
        List<RecipeResponseDto> responseDtoList = recipeService.getLastRecipes();
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(200,"success",responseDtoList),HttpStatus.OK
        );
    }
}
