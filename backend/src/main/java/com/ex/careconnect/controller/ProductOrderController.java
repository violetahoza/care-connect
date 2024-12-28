package com.ex.careconnect.controller;

import com.ex.careconnect.model.ProductOrder;
import com.ex.careconnect.service.ProductOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProductOrderController {
    @Autowired
    private ProductOrderService productOrderService;

    @GetMapping("/productOrders")
    public List<ProductOrder> getProductOrders() {
        return productOrderService.getProductOrders();
    }

    @GetMapping("/findProductOrder/{id}")
    public ProductOrder getProductOrderById(@PathVariable Integer id) {
        return productOrderService.findProductOrderById(id);
    }

    @PostMapping("/addProductOrder")
    public ProductOrder addProductOrder(@RequestBody ProductOrder productOrder) {
        return productOrderService.saveProductOrder(productOrder);
    }

    @PutMapping("/updateProductOrder")
    public ProductOrder updateProductOrder(@RequestBody ProductOrder productOrder) {
        return productOrderService.updateProductOrder(productOrder);
    }

    @DeleteMapping("/deleteProductOrder/{id}")
    public String deleteProductOrder(@PathVariable Integer id) {
        return productOrderService.deleteProductOrderById(id);
    }

}
