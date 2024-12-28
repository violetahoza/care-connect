package com.ex.careconnect.service;

import com.ex.careconnect.model.DeliveryCompany;
import com.ex.careconnect.repository.DeliveryCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryCompanyService {
    @Autowired
    private DeliveryCompanyRepository deliveryCompanyRepository;

    public List<DeliveryCompany> getAddresses() {
        return deliveryCompanyRepository.findAll();
    }

    public DeliveryCompany findDeliveryCompanyById(Integer id) {
        return deliveryCompanyRepository.findById(id).orElse(null);
    }

    public DeliveryCompany saveDeliveryCompany(DeliveryCompany deliveryCompany) {
        return deliveryCompanyRepository.save(deliveryCompany);
    }

    public DeliveryCompany updateDeliveryCompany(DeliveryCompany deliveryCompany) {
        DeliveryCompany existingDeliveryCompany = deliveryCompanyRepository.findById(deliveryCompany.getId()).orElse(null);
        if(deliveryCompany.getDeliveryCompanyName() != null) existingDeliveryCompany.setDeliveryCompanyName(deliveryCompany.getDeliveryCompanyName());
        return deliveryCompanyRepository.save(existingDeliveryCompany);
    }

    public String deleteDeliveryCompanyById(Integer id) {
        deliveryCompanyRepository.deleteById(id);
        return "Delivery company removed !! " + id;
    }

}
