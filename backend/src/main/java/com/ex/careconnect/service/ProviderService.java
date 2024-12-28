package com.ex.careconnect.service;

import com.ex.careconnect.model.Provider;
import com.ex.careconnect.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    public List<Provider> getProviders() {
        return providerRepository.findAll();
    }

    public Provider findProviderById(Integer id) {
        return providerRepository.findById(id).orElse(null);
    }

    public Provider saveProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    public Provider updateProvider(Provider provider) {
        Provider existingProvider = providerRepository.findById(provider.getId()).orElse(null);
        if(provider.getProviderName() != null) existingProvider.setProviderName(provider.getProviderName());
        return providerRepository.save(existingProvider);
    }

    public String deleteProviderById(Integer id) {
        providerRepository.deleteById(id);
        return "Provider removed !! " + id;
    }



}
