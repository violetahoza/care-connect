package com.ex.careconnect.controller;

import com.ex.careconnect.model.Address;
import com.ex.careconnect.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AddressController {
    @Autowired
    private AddressService addressService;

    @GetMapping("/addresses")
    public List<Address> getAddresses() {
        return addressService.getAddresses();
    }

    @GetMapping("/findAddress/{id}")
    public Address getAddressById(@PathVariable Integer id) {
        return addressService.findAddressById(id);
    }

    @PostMapping("/addAddress")
    public Address addAddress(@RequestBody Address address) {
        return addressService.saveAddress(address);
    }

    @PutMapping("/updateAddress")
    public Address updateAddress(@RequestBody Address address) {
        return addressService.updateAddress(address);
    }

    @DeleteMapping("/deleteAddress/{id}")
    public String deleteAddress(@PathVariable Integer id) {
        return addressService.deleteAddressById(id);
    }

}
