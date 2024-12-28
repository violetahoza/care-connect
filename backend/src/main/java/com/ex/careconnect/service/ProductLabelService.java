package com.ex.careconnect.service;

import com.ex.careconnect.model.ProductLabel;
import com.ex.careconnect.repository.ProductLabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductLabelService {
    @Autowired
    private ProductLabelRepository productLabelRepository;

    public List<ProductLabel> getProductLabels() {
        return productLabelRepository.findAll();
    }

    public ProductLabel findProductLabelById(Integer id) {
        return productLabelRepository.findById(id).orElse(null);
    }

    public ProductLabel saveProductLabel(ProductLabel productLabel) {
        return productLabelRepository.save(productLabel);
    }

    public ProductLabel updateProductLabel(ProductLabel productLabel) {
        ProductLabel existingProductLabel = productLabelRepository.findById(productLabel.getId()).orElse(null);
        if(productLabel.getProductId() != null) existingProductLabel.setProductId(productLabel.getProductId());
        if(productLabel.getLabelId() != null) existingProductLabel.setLabelId(productLabel.getLabelId());
        return productLabelRepository.save(existingProductLabel);
    }

    public String deleteProductLabelById(Integer id) {
        productLabelRepository.deleteById(id);
        return "Product label removed !! " + id;
    }

}
