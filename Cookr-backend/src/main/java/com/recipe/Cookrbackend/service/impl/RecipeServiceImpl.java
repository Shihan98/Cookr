package com.recipe.Cookrbackend.service.impl;

import com.recipe.Cookrbackend.dto.RecipeDto;
import com.recipe.Cookrbackend.entity.Recipe;
import com.recipe.Cookrbackend.repository.RecipeRepo;
import com.recipe.Cookrbackend.service.RecipeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService {
    @Autowired
    private RecipeRepo recipeRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String saveRecipe(RecipeDto recipeDto) {
        Recipe recipe = modelMapper.map(recipeDto,Recipe.class);
        recipeRepo.save(recipe);
        return "succefully saved";
//        if(recipe.getId() == null || !recipeRepo.existsById(recipe.getId())){
//            recipeRepo.save(recipe);
//            return "succefully saved";
//        }else {
//            throw new DuplicateKeyException("Already Saved");
//        }
    }
}
