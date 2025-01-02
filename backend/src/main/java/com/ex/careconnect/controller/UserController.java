package com.ex.careconnect.controller;

import com.ex.careconnect.model.User;
import com.ex.careconnect.service.UserDataService;
import com.ex.careconnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;
    //@Autowired
    private UserDataService userDataService;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/findUser/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.findUserById(id);
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable Integer id) {
        return userService.deleteUserById(id);
    }

    @GetMapping("/users/findByEmail")
    public Optional<User> getUserByEmail(@RequestParam String email) {
        return Optional.ofNullable(userService.findUserById(userDataService.findUserByEmail(email).getId()));
    }
}
