package com.ex.careconnect.controller;

import com.ex.careconnect.model.ShopOrder;
import com.ex.careconnect.service.ShopOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ShopOrderController {
    @Autowired
    private ShopOrderService shopOrderService;

    @GetMapping("/shopOrders")
    public List<ShopOrder> getShopOrders() {
        return shopOrderService.getShopOrders();
    }

    @GetMapping("/findShopOrder/{id}")
    public ShopOrder getShopOrderById(@PathVariable Integer id) {
        return shopOrderService.findShopOrderById(id);
    }

    @PostMapping("/addShopOrder")
    public ShopOrder addShopOrder(@RequestBody ShopOrder shopOrder) {
        return shopOrderService.saveShopOrder(shopOrder);
    }

    @PutMapping("/updateShopOrder")
    public ShopOrder updateShopOrder(@RequestBody ShopOrder shopOrder) {
        return shopOrderService.updateShopOrder(shopOrder);
    }

    @DeleteMapping("/deleteShopOrder/{id}")
    public String deleteShopOrder(@PathVariable Integer id) {
        return shopOrderService.deleteShopOrderById(id);
    }

}
