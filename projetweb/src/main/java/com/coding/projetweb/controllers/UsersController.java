package com.coding.projetweb.controllers;

import java.sql.SQLException;
import java.util.List;

import com.coding.models.User;
import com.coding.services.UserDAO;

import org.springframework.validation.annotation.Validated;
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
@RequestMapping("/users")
public class UsersController {
    private UserDAO dao = new UserDAO();


    @GetMapping("")
    public List<User> getUsers() throws SQLException{
        return dao.getUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable(value="id") int userId) throws SQLException{
        return dao.getUserById(userId);
    }

    @GetMapping("/?{username}&{password}")
    public User getUserByInfo(@PathVariable (value="username") String username, @PathVariable(value="password") String password)throws SQLException{
        return dao.getUserByInfo(username, password);
    }

    @PostMapping("")
    public void createUser(@RequestBody User user) throws SQLException{
        dao.add(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@PathVariable(value="id") int userId, @RequestBody User user) throws SQLException{
        dao.update(userId, user);
    }

    @DeleteMapping("/{id}")
    public void updateUser(@PathVariable(value="id") int userId) throws SQLException{
        dao.delete(userId);
    }

}
