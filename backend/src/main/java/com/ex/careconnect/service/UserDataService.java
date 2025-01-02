package com.ex.careconnect.service;

import com.ex.careconnect.model.UserData;
import com.ex.careconnect.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDataService {
    @Autowired
    private UserDataRepository userDataRepository;

    public List<UserData> getUserData() {
        return userDataRepository.findAll();
    }

    public UserData findUserDataById(Integer id) {
        return userDataRepository.findById(id).orElse(null);
    }

    public UserData saveUserData(UserData userData) {
        return userDataRepository.save(userData);
    }

    public UserData updateUserData(UserData userData) {
        UserData existingUserData = userDataRepository.findById(userData.getId()).orElse(null);
        if(userData.getFirstName() != null) existingUserData.setFirstName(userData.getFirstName());
        if(userData.getLastName() != null) existingUserData.setLastName(userData.getLastName());
        if(userData.getEmail() != null) existingUserData.setEmail(userData.getEmail());
        if(userData.getAddressId() != null) existingUserData.setAddressId(userData.getAddressId());
        return userDataRepository.save(existingUserData);
    }

    public String deleteUserDataById(Integer id) {
        userDataRepository.deleteById(id);
        return "User data removed !! " + id;
    }

    public UserData findUserByEmail(String email) {
        return userDataRepository.findByEmail(email).orElse(null);
    }
}
