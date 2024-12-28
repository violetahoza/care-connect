package com.ex.careconnect.controller;

import com.ex.careconnect.model.UserData;
import com.ex.careconnect.service.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserDataController {
    @Autowired
    private UserDataService userDataService;

    @GetMapping("/userData")
    public List<UserData> getUserData() {
        return userDataService.getUserData();
    }

    @GetMapping("/findUserData/{id}")
    public UserData getUserDataById(@PathVariable Integer id) {
        return userDataService.findUserDataById(id);
    }

    @PostMapping("/addUserData")
    public UserData addUserData(@RequestBody UserData userData) {
        return userDataService.saveUserData(userData);
    }

    @PutMapping("/updateUserData")
    public UserData updateUserData(@RequestBody UserData userData) {
        return userDataService.updateUserData(userData);
    }

    @DeleteMapping("/deleteUserData/{id}")
    public String deleteUserData(@PathVariable Integer id) {
        return userDataService.deleteUserDataById(id);
    }

}
