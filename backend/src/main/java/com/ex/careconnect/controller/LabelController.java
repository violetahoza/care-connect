package com.ex.careconnect.controller;

import com.ex.careconnect.model.Label;
import com.ex.careconnect.service.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class LabelController {
    @Autowired
    private LabelService labelService;

    @GetMapping("/labels")
    public List<Label> getLabels() {
        return labelService.getLabels();
    }

    @GetMapping("/findLabel/{id}")
    public Label getLabelById(@PathVariable Integer id) {
        return labelService.findLabelById(id);
    }

    @PostMapping("/addLabel")
    public Label addLabel(@RequestBody Label label) {
        return labelService.saveLabel(label);
    }

    @PutMapping("/updateLabel")
    public Label updateLabel(@RequestBody Label label) {
        return labelService.updateLabel(label);
    }

    @DeleteMapping("/deleteLabel/{id}")
    public String deleteLabel(@PathVariable Integer id) {
        return labelService.deleteLabelById(id);
    }

}
