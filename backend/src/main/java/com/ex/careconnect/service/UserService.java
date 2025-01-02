package com.ex.careconnect.service;

import com.ex.careconnect.model.PasswordResetToken;
import com.ex.careconnect.model.User;
import com.ex.careconnect.model.UserData;
import com.ex.careconnect.repository.UserDataRepository;
import com.ex.careconnect.repository.UserRepository;
import com.ex.careconnect.repository.PasswordResetTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Autowired
    private JavaMailSender mailSender;

    public void createPasswordResetTokenForUser(User user, String token) {
        PasswordResetToken myToken = new PasswordResetToken();
        myToken.setToken(token);
        myToken.setUser(user);
        myToken.setExpiryDate(new Date(System.currentTimeMillis() + 3600000)); // 1 hour expiry
        passwordResetTokenRepository.save(myToken);
    }

    public PasswordResetToken getPasswordResetToken(String token) {
        return passwordResetTokenRepository.findByToken(token);
    }

    public void changeUserPassword(User user, String password) {
        user.setUserPassword(password);
        userRepository.save(user);
    }

    public void sendPasswordResetEmail(String email, String token) {
        String subject = "Password Reset Request";
        String resetUrl = "http://localhost:3000/resetPassword?token=" + token;
        String message = "To reset your password, click the link below:\n" + resetUrl;

        SimpleMailMessage emailMessage = new SimpleMailMessage();
        emailMessage.setTo(email);
        emailMessage.setSubject(subject);
        emailMessage.setText(message);

        mailSender.send(emailMessage);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        User existingUser = userRepository.findById(user.getId()).orElse(null);
        if(user.getUserName() != null) existingUser.setUserName(user.getUserName());
        if(user.getUserPassword() != null) existingUser.setUserPassword(user.getUserPassword());
        if(user.getUserDataId() != null) existingUser.setUserDataId(user.getUserDataId());
        if(user.getIsAdmin() != null) existingUser.setIsAdmin(user.getIsAdmin());
        if(user.getIsEmployee() != null) existingUser.setIsEmployee(user.getIsEmployee());
        if(user.getIsCustomer() != null) existingUser.setIsCustomer(user.getIsCustomer());
        if(user.getIsProvider() != null) existingUser.setIsProvider(user.getIsProvider());
        if(user.getIsDelivery() != null) existingUser.setIsDelivery(user.getIsDelivery());
        return userRepository.save(existingUser);
    }

    public String deleteUserById(Integer id) {
        userRepository.deleteById(id);
        return "User removed !! " + id;
    }
}
