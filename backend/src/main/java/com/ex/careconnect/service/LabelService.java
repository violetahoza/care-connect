package com.ex.careconnect.service;

import com.ex.careconnect.model.Label;
import com.ex.careconnect.repository.LabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabelService {
    @Autowired
    private LabelRepository labelRepository;

    public List<Label> getLabels() {
        return labelRepository.findAll();
    }

    public Label findLabelById(Integer id) {
        return labelRepository.findById(id).orElse(null);
    }

    public Label saveLabel(Label label) {
        return labelRepository.save(label);
    }

    public Label updateLabel(Label label) {
        Label existingLabel = labelRepository.findById(label.getId()).orElse(null);
        if(label.getLabelName() != null) existingLabel.setLabelName(label.getLabelName());
        return labelRepository.save(existingLabel);
    }

    public String deleteLabelById(Integer id) {
        labelRepository.deleteById(id);
        return "Label removed !! " + id;
    }

}
