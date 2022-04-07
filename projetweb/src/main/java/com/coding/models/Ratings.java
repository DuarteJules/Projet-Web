package com.coding.models;

public class Ratings {
    private int idUser;
    private int idRecipe;
    private int rating;
    private String comment;
    private int favorite;
    
    public int getIdUser() {
        return idUser;
    }
    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }
    public int getIdRecipe() {
        return idRecipe;
    }
    public void setIdRecipe(int idRecipe) {
        this.idRecipe = idRecipe;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public int getFavorite() {
        return favorite;
    }
    public void setFavorite(int favorite) {
        this.favorite = favorite;
    }

    
}
