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
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
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
                        r.setLinkImg(rs.getString("linkImg"));
                        list.add(r);
                    }
                    return list;
                }
            }
        }
    }

    public Recipe getRecipeById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
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
    public List<Recipe> getRecipeByUserId(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
            String sql = "SELECT * FROM recipes where idUser=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
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

    public void addRecipe(Recipe recipe) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
            String sql = "INSERT INTO recipes (idUser, date, ingredients, title, content, type, time, servings, tag, linkImg) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, recipe.getIdUser());
                st.setString(2, recipe.getDate());
                st.setString(3, recipe.getIngredients());
                st.setString(4, recipe.getTitle());
                st.setString(5, recipe.getContent());
                st.setString(6, recipe.getType());
                st.setInt(7, recipe.getTime());
                st.setInt(8, recipe.getServings());
                st.setString(9, recipe.getTag());
                st.setString(10, recipe.getLinkImg());
                st.execute();
            }
        }
    }

    public void updateRecipe(int id, Recipe recipe) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
            String sql = "UPDATE recipes SET date=? , ingredients=? , title=? , content=? , type=? , time=? , servings=? , tag=?, linkImg=?, WHERE idRecipe=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setString(1, recipe.getDate());
                st.setString(2, recipe.getIngredients());
                st.setString(3, recipe.getTitle());
                st.setString(4, recipe.getContent());
                st.setString(5, recipe.getType());
                st.setInt(6, recipe.getTime());
                st.setInt(7, recipe.getServings());
                st.setString(8, recipe.getTag());
                st.setString(9, recipe.getLinkImg());
                st.setInt(10, id);
                st.execute();
            }
        }
    }

    public void deleteRecipe(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://51.38.225.66:6033/recettes", "db_user", "402VFZPO1Jw06aaKjxit")) {
            String sql = "DELETE FROM recipes WHERE idRecipe=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                st.execute();
            }
        }
    }

}
