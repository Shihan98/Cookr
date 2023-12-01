package com.recipe.Cookrbackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.security.Timestamp;

@Entity
@Table(name = "recipe_table")
@Getter
@Setter
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
    private Timestamp createDate;

    @UpdateTimestamp
    @Column(name = "recipe_update")
    private Timestamp update;
}
