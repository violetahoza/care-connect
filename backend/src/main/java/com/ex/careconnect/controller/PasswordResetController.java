package com.ex.careconnect.controller;

import com.ex.careconnect.model.PasswordResetToken;
import com.ex.careconnect.model.User;
import com.ex.careconnect.model.UserData;
import com.ex.careconnect.service.UserDataService;
import com.ex.careconnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.UUID;

@RestController
@CrossOrigin
public class PasswordResetController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserDataService userDataService;

    @PostMapping("/requestPasswordReset")
    public String requestPasswordReset(@RequestParam String email) {
        UserData userData = userDataService.findUserByEmail(email);
        if (userData == null) {
            return "User not found";
        }
        User user = userService.findUserById(userData.getId());
        String token = UUID.randomUUID().toString();
        userService.createPasswordResetTokenForUser(user, token);
        userService.sendPasswordResetEmail(email, token);
        return "Password reset email sent";
    }

    @PostMapping("/resetPassword")
    public String resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        PasswordResetToken resetToken = userService.getPasswordResetToken(token);
        if (resetToken == null || resetToken.getExpiryDate().before(new Date())) {
            return "Invalid or expired token";
        }
        User user = resetToken.getUser();
        userService.changeUserPassword(user, newPassword);
        return "Password reset successful";
    }
}