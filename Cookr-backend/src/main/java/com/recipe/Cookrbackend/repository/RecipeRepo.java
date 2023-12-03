package com.recipe.Cookrbackend.repository;

import com.recipe.Cookrbackend.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface RecipeRepo extends JpaRepository<Recipe,Long> {

    List<Recipe> findTop3ByOrderByCreateDateDesc();
}
