package com.ex.careconnect.service;

import com.ex.careconnect.model.UserLabel;
import com.ex.careconnect.repository.UserLabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserLabelService {
    @Autowired
    private UserLabelRepository userLabelRepository;

    public List<UserLabel> getUserLabels() {
        return userLabelRepository.findAll();
    }

    public UserLabel findUserLabelById(Integer id) {
        return userLabelRepository.findById(id).orElse(null);
    }

    public UserLabel saveUserLabel(UserLabel userLabel) {
        return userLabelRepository.save(userLabel);
    }

    public UserLabel updateUserLabel(UserLabel userLabel) {
        UserLabel existingUserLabel = userLabelRepository.findById(userLabel.getId()).orElse(null);
        if(userLabel.getUserId() != null) existingUserLabel.setUserId(userLabel.getUserId());
        if (userLabel.getLabelId() != null) existingUserLabel.setLabelId(userLabel.getLabelId());
        return userLabelRepository.save(existingUserLabel);
    }

    public String deleteUserLabelById(Integer id) {
        userLabelRepository.deleteById(id);
        return "User label removed !! " + id;
    }
}
