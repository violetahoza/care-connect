package com.ex.careconnect.service;

import com.ex.careconnect.model.User;
import com.ex.careconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

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
