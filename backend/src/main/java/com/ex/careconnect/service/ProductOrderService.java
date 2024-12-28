package com.ex.careconnect.service;

import com.ex.careconnect.model.ProductOrder;
import com.ex.careconnect.repository.ProductOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductOrderService {
    @Autowired
    private ProductOrderRepository productOrderRepository;

    public List<ProductOrder> getProductOrders() {
        return productOrderRepository.findAll();
    }

    public ProductOrder findProductOrderById(Integer id) {
        return productOrderRepository.findById(id).orElse(null);
    }

    public ProductOrder saveProductOrder(ProductOrder productOrder) {
        return productOrderRepository.save(productOrder);
    }

    public ProductOrder updateProductOrder(ProductOrder productOrder) {
        ProductOrder existingProductOrder = productOrderRepository.findById(productOrder.getId()).orElse(null);
        if(productOrder.getProductId() != null) existingProductOrder.setProductId(productOrder.getProductId());
        if(productOrder.getOrderId() != null) existingProductOrder.setOrderId(productOrder.getOrderId());
        return productOrderRepository.save(existingProductOrder);
    }

    public String deleteProductOrderById(Integer id) {
        productOrderRepository.deleteById(id);
        return "Product order removed !! " + id;
    }
}
