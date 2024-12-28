package com.ex.careconnect.service;

import com.ex.careconnect.model.Product;
import com.ex.careconnect.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product findProductById(Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        Product existingProduct = productRepository.findById(product.getId()).orElse(null);
        if(product.getProductName() != null) existingProduct.setProductName(product.getProductName());
        if(product.getProductDescription() != null) existingProduct.setProductDescription(product.getProductDescription());
        if(product.getProductCategory() != null) existingProduct.setProductCategory(product.getProductCategory());
        if(product.getProductPrice() != null) existingProduct.setProductPrice(product.getProductPrice());
        if(product.getProductAmount() != null) existingProduct.setProductAmount(product.getProductAmount());
        if(product.getProductStock() != null) existingProduct.setProductStock(product.getProductStock());
        if(product.getProviderId() != null) existingProduct.setProviderId(product.getProviderId());
        if(product.getPicture() != null) existingProduct.setPicture(product.getPicture());
        return productRepository.save(existingProduct);
    }

    public String deleteProductById(Integer id) {
        productRepository.deleteById(id);
        return "Product removed !! " + id;
    }
}
