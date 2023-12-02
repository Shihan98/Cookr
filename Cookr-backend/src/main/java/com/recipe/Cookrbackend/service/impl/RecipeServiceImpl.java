package com.recipe.Cookrbackend.service.impl;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.entity.Recipe;
import com.recipe.Cookrbackend.repository.RecipeRepo;
import com.recipe.Cookrbackend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private RecipeRepo recipeRepo;

    private ModelMapper modelMapper;

    @Override
    public String saveRecipe(RecipeDto recipeDto) {
        Recipe recipe = modelMapper.map(recipeDto,Recipe.class);
        if(recipe.getId() == null || !recipeRepo.existsById(recipe.getId())){
            recipeRepo.save(recipe);
            return "succefully saved";
        }else {
            throw new DuplicateKeyException("Already Saved");
        }
    }

    @Override
    public List<RecipeDto> getAllRecipe() {
        List<Recipe> allRecipe = recipeRepo.findAll();
        if(!allRecipe.isEmpty()){
            return modelMapper.map(allRecipe,new TypeToken<List<RecipeDto>>(){}.getType());
        }
        else {
            throw new RuntimeException("Not Found");
        }
    }

    @Override
    public RecipeDto recipeGetById(long id) {
        if(recipeRepo.existsById(id)) {
            Recipe recipe = recipeRepo.getReferenceById(id);
            return modelMapper.map(recipe,RecipeDto.class);
        }
        else {
            throw new RuntimeException("Not Found");
        }
    }
}
