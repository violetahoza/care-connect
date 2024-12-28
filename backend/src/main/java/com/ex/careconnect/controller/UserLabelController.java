package com.ex.careconnect.controller;

import com.ex.careconnect.model.UserLabel;
import com.ex.careconnect.service.UserLabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserLabelController {
    @Autowired
    private UserLabelService userLabelService;

    @GetMapping("/userLabels")
    public List<UserLabel> getUserLabels() {
        return userLabelService.getUserLabels();
    }

    @GetMapping("/findUserLabel/{id}")
    public UserLabel getUserLabelById(@PathVariable Integer id) {
        return userLabelService.findUserLabelById(id);
    }

    @PostMapping("/addUserLabel")
    public UserLabel addUserLabel(@RequestBody UserLabel userLabel) {
        return userLabelService.saveUserLabel(userLabel);
    }

    @PutMapping("/updateUserLabel")
    public UserLabel updateUserLabel(@RequestBody UserLabel userLabel) {
        return userLabelService.updateUserLabel(userLabel);
    }

    @DeleteMapping("/deleteUserLabel/{id}")
    public String deleteUserLabel(@PathVariable Integer id) {
        return userLabelService.deleteUserLabelById(id);
    }

}
