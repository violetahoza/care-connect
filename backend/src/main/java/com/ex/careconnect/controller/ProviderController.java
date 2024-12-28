package com.ex.careconnect.controller;

import com.ex.careconnect.model.Provider;
import com.ex.careconnect.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    @GetMapping("/providers")
    public List<Provider> getProviders() {
        return providerService.getProviders();
    }

    @GetMapping("/findProvider/{id}")
    public Provider getProviderById(@PathVariable Integer id) {
        return providerService.findProviderById(id);
    }

    @PostMapping("/addProvider")
    public Provider addProvider(@RequestBody Provider provider) {
        return providerService.saveProvider(provider);
    }

    @PutMapping("/updateProvider")
    public Provider updateProvider(@RequestBody Provider provider) {
        return providerService.updateProvider(provider);
    }

    @DeleteMapping("/deleteProvider/{id}")
    public String deleteProvider(@PathVariable Integer id) {
        return providerService.deleteProviderById(id);
    }

}
