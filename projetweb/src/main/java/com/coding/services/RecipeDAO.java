package com.coding.services;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.Recipe;

public class RecipeDAO {
    
    public List<Recipe> getRecipes() throws SQLException {        
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM recipes;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sql)) {
                    List<Recipe> list = new ArrayList<>();
                    while (rs.next()) {
                        Recipe r = new Recipe();
                        r.setIdRecipe(rs.getInt("idRecipe"));
                        r.setIdUser(rs.getInt("idUser"));
                        r.setDate(rs.getString("date"));
                        r.setIngredients(rs.getString("ingredients"));
                        r.setTitle(rs.getString("title"));
                        r.setContent(rs.getString("content"));
                        r.setType(rs.getString("type"));
                        r.setTime(rs.getInt("time"));
                        r.setServings(rs.getInt("servings"));
                        list.add(r);
                    }
                    return list;
                }
            }
        }
    }

    public Recipe getRecipeById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM recipes where idRecipe=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Recipe r = new Recipe();
                        r.setIdRecipe(rs.getInt("idRecipe"));
                        r.setIdUser(rs.getInt("idUser"));
                        r.setDate(rs.getString("date"));
                        r.setIngredients(rs.getString("ingredients"));
                        r.setTitle(rs.getString("title"));
                        r.setContent(rs.getString("content"));
                        r.setType(rs.getString("type"));
                        r.setTime(rs.getInt("time"));
                        r.setServings(rs.getInt("servings"));
                        return r;
                    }
                    return null;
                }
            }
        }
    }

    public void addRecipe(Recipe recipe) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "INSERT INTO recipes (idUser, idRecipe, date, ingredients, title, content, type, time, servings) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, recipe.getIdUser());
                st.setInt(2, recipe.getIdRecipe());
                st.setString(3, recipe.getDate());
                st.setString(4, recipe.getIngredients());
                st.setString(5, recipe.getTitle());
                st.setString(6, recipe.getContent());
                st.setString(7, recipe.getType());
                st.setInt(8, recipe.getTime());
                st.setInt(9, recipe.getServings());
                st.execute();
            }
        }
    }

    public void updateRecipe(int id, Recipe recipe) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "UPDATE recipes SET idUser=? , idRecipe=? , date=? , ingredients=? , title=? , content=? , type=? , time=? , servings=? , WHERE idRecipe=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, recipe.getIdUser());
                st.setInt(2, recipe.getIdRecipe());
                st.setString(3, recipe.getDate());
                st.setString(4, recipe.getIngredients());
                st.setString(5, recipe.getTitle());
                st.setString(6, recipe.getContent());
                st.setString(7, recipe.getType());
                st.setInt(8, recipe.getTime());
                st.setInt(9, recipe.getServings());
                st.setInt(10, id);
                st.execute();
            }
        }
    }

    public void deleteRecipe(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "DELETE FROM recipes WHERE id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                st.execute();
            }
        }
    }

}
