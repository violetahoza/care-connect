package com.ex.careconnect.service;

import com.ex.careconnect.model.ShopOrder;
import com.ex.careconnect.repository.ShopOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopOrderService {
    @Autowired
    private ShopOrderRepository shopOrderRepository;

    public List<ShopOrder> getShopOrders() {
        return shopOrderRepository.findAll();
    }

    public ShopOrder findShopOrderById(Integer id) {
        return shopOrderRepository.findById(id).orElse(null);
    }

    public ShopOrder saveShopOrder(ShopOrder shopOrder) {
        return shopOrderRepository.save(shopOrder);
    }

    public ShopOrder updateShopOrder(ShopOrder shopOrder) {
        ShopOrder existingShopOrder = shopOrderRepository.findById(shopOrder.getId()).orElse(null);
        if(shopOrder.getUserId() != null) existingShopOrder.setUserId(shopOrder.getUserId());
        if(shopOrder.getTotalPrice() != null) existingShopOrder.setTotalPrice(shopOrder.getTotalPrice());
        if(shopOrder.getDeliveryCompanyId() != null) existingShopOrder.setDeliveryCompanyId(shopOrder.getDeliveryCompanyId());
        if(shopOrder.getIsPayedOnline() != null) existingShopOrder.setIsPayedOnline(shopOrder.getIsPayedOnline());
        if(shopOrder.getIsPayedCash() != null) existingShopOrder.setIsPayedCash(shopOrder.getIsPayedCash());
        if(shopOrder.getIsDelivered() != null) existingShopOrder.setIsDelivered(shopOrder.getIsDelivered());
        return shopOrderRepository.save(existingShopOrder);
    }

    public String deleteShopOrderById(Integer id) {
        shopOrderRepository.deleteById(id);
        return "Shop order removed !! " + id;
    }
}
