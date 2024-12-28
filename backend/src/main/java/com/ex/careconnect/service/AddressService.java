package com.ex.careconnect.service;

import com.ex.careconnect.model.Address;
import com.ex.careconnect.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;

    public List<Address> getAddresses() {
        return addressRepository.findAll();
    }

    public Address findAddressById(Integer id) {
        return addressRepository.findById(id).orElse(null);
    }

    public Address saveAddress(Address address) {
        return addressRepository.save(address);
    }

    public Address updateAddress(Address address) {
        Address existingAddress = addressRepository.findById(address.getId()).orElse(null);
        if(address.getAddressCountry() != null) existingAddress.setAddressCountry(address.getAddressCountry());
        if(address.getAddressCity() != null) existingAddress.setAddressCity(address.getAddressCity());
        if(address.getAddressStreet() != null) existingAddress.setAddressStreet(address.getAddressStreet());
        if(address.getAddressNumber() != null) existingAddress.setAddressNumber(address.getAddressNumber());
        return addressRepository.save(existingAddress);
    }

    public String deleteAddressById(Integer id) {
        addressRepository.deleteById(id);
        return "Address removed !! " + id;
    }
}
