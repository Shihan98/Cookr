package com.recipe.Cookrbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "recipe_table")
@AllArgsConstructor
@NoArgsConstructor
public class Recipe {
    @Id
    @Column(name = "recipe_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "recipe_name")
    private String recipeName;

    @Column(name = "recipe_ingredients")
    private  String ingredients;

    @Column(name = "recipe_description")
    private String description;

    @CreationTimestamp
    @Column(name = "recipe_createDate")
    private LocalDateTime createDate;

    @UpdateTimestamp
    @Column(name = "recipe_update")
    private LocalDateTime update;
}
