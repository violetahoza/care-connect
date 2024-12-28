package com.ex.careconnect.controller;

import com.ex.careconnect.model.DeliveryCompany;
import com.ex.careconnect.repository.DeliveryCompanyRepository;
import com.ex.careconnect.service.DeliveryCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DeliveryCompanyController {
    @Autowired
    private DeliveryCompanyService deliveryCompanyService;

    @GetMapping("/deliveryCompanies")
    public List<DeliveryCompany> getAddresses() {
        return deliveryCompanyService.getAddresses();
    }

    @GetMapping("/findDeliveryCompany/{id}")
    public DeliveryCompany getDeliveryCompanyById(@PathVariable Integer id) {
        return deliveryCompanyService.findDeliveryCompanyById(id);
    }

    @PostMapping("/addDeliveryCompany")
    public DeliveryCompany addDeliveryCompany(@RequestBody DeliveryCompany deliveryCompany) {
        return deliveryCompanyService.saveDeliveryCompany(deliveryCompany);
    }

    @PutMapping("/updateDeliveryCompany")
    public DeliveryCompany updateDeliveryCompany(@RequestBody DeliveryCompany deliveryCompany) {
        return deliveryCompanyService.updateDeliveryCompany(deliveryCompany);
    }

    @DeleteMapping("/deleteDeliveryCompany/{id}")
    public String deleteDeliveryCompany(@PathVariable Integer id) {
        return deliveryCompanyService.deleteDeliveryCompanyById(id);
    }

}
