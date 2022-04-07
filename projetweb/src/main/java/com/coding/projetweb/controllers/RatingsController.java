package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.Ratings;
import com.coding.services.RatingsDAO;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RatingsController {
    @RequestMapping("/ratings")
public class UsersController {
    private RatingsDAO dao = new RatingsDAO();


    @GetMapping("")
    public List<Ratings> getRatings() throws SQLException{
        return dao.getRatings();
    }

    @GetMapping("/{id}")
    public Ratings getRatingById(@PathVariable(value="id") int ratingId) throws SQLException{
        return dao.getRatingById(ratingId);
    }

    @PostMapping("")
    public void createRating(@RequestBody Ratings rating) throws SQLException{
        dao.addRating(rating);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable(value="id") int ratingId, @RequestBody Ratings rating) throws SQLException{
        dao.update(ratingId, rating);
    }

    @DeleteMapping("/{id}")
    public void updateUser(@PathVariable(value="id") int userId) throws SQLException{
        dao.delete(userId);
    }
}
}
