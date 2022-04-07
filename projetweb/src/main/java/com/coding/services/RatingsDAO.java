package com.coding.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.coding.models.Ratings;

public class RatingsDAO {
    
    // private int idUser;
    // private int idRecipe;
    // private int rating;
    // private String comment;
    // private int favorite;
    //Marche peut etre pas tout à fait celui là parce que c'est jnouné dans la bdd à voir

    public List<Ratings> getRatings() throws SQLException {        
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM ratings;";
            try (Statement st = co.createStatement()) {
                try (ResultSet rs = st.executeQuery(sql)) {
                    List<Ratings> list = new ArrayList<>();
                    while (rs.next()) {
                        Ratings rat = new Ratings();
                        rat.setIdUser(rs.getInt("idUser"));
                        rat.setIdRecipe(rs.getInt("idRecipe"));
                        rat.setRating(rs.getInt("rating"));
                        rat.setComment(rs.getString("comment"));
                        rat.setFavorite(rs.getInt("favorite"));
                        list.add(rat);
                    }
                    return list;
                }
            }
        }
    }

    public Ratings getRatingById(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "SELECT * FROM ratings where id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                try (ResultSet rs = st.executeQuery()) {
                    if (rs.next()) {
                        Ratings rat = new Ratings();
                        rat.setIdUser(rs.getInt("idUser"));
                        rat.setIdRecipe(rs.getInt("idRecipe"));
                        rat.setRating(rs.getInt("rating"));
                        rat.setComment(rs.getString("comment"));
                        rat.setFavorite(rs.getInt("favorite"));
                        return rat;
                    }
                    return null;
                }
            }
        }
    }

    public void addRating(Ratings rat) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "INSERT INTO ratings (idUser, idRecipe, rating, comment, favorite) VALUES(?, ?, ?, ?, ?);";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, rat.getIdUser());
                st.setInt(2, rat.getIdRecipe());
                st.setInt(3, rat.getRating());
                st.setString(4, rat.getComment());
                st.setInt(5, rat.getFavorite());
                st.execute();
            }
        }
    }

    public void update(int id, Ratings rat) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "UPDATE users SET idUser=? , idRecipe=? , rating=?, comment=?, favorite=? , WHERE id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, rat.getIdUser());
                st.setInt(2, rat.getIdRecipe());
                st.setInt(3, rat.getRating());
                st.setString(4, rat.getComment());
                st.setInt(5, rat.getFavorite());
                st.setInt(6, id);
                st.execute();
            }
        }
    }
    public void delete(int id) throws SQLException {
        try (Connection co = DriverManager.getConnection("jdbc:mysql://localhost:3306/projet-web", "root", "toor")) {
            String sql = "DELETE FROM ratings WHERE id=?;";
            try (PreparedStatement st = co.prepareStatement(sql)) {
                st.setInt(1, id);
                st.execute();
            }
        }
    }
}
