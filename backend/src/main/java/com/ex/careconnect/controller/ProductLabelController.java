package com.ex.careconnect.controller;

import com.ex.careconnect.model.ProductLabel;
import com.ex.careconnect.service.ProductLabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProductLabelController {
    @Autowired
    private ProductLabelService productLabelService;

    @GetMapping("/productLabels")
    public List<ProductLabel> getProductLabels() {
        return productLabelService.getProductLabels();
    }

    @GetMapping("/findProductLabel/{id}")
    public ProductLabel getProductLabelById(@PathVariable Integer id) {
        return productLabelService.findProductLabelById(id);
    }

    @PostMapping("/addProductLabel")
    public ProductLabel addProductLabel(@RequestBody ProductLabel productLabel) {
        return productLabelService.saveProductLabel(productLabel);
    }

    @PutMapping("/updateProductLabel")
    public ProductLabel updateProductLabel(@RequestBody ProductLabel productLabel) {
        return productLabelService.updateProductLabel(productLabel);
    }

    @DeleteMapping("/deleteProductLabel/{id}")
    public String deleteProductLabel(@PathVariable Integer id) {
        return productLabelService.deleteProductLabelById(id);
    }
}
