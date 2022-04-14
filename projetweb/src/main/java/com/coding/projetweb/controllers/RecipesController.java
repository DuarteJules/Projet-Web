package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Recipe;
import com.coding.services.RecipeDAO;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipes")
public class RecipesController {
    private RecipeDAO dao = new RecipeDAO();

    @GetMapping("")
    public List<Recipe> getRecipes() throws SQLException{
        return dao.getRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable(value="id") int recipeId) throws SQLException{
        return dao.getRecipeById(recipeId);
    }

    @PostMapping("")
    public void createRecipe(@RequestBody Recipe recipe) throws SQLException{
        dao.addRecipe(recipe);
    }

    @PutMapping("/{id}")
    public void updateRecipe(@PathVariable(value="id") int recipeId, @RequestBody Recipe recipe) throws SQLException{
        dao.updateRecipe(recipeId, recipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable(value="id") int recipeId) throws SQLException{
        dao.deleteRecipe(recipeId);
    }
}
