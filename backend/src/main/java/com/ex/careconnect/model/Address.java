package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "address")
public class Address {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "address_country", nullable = true, length = 100)
    private String addressCountry;
    @Basic
    @Column(name = "address_city", nullable = true, length = 100)
    private String addressCity;
    @Basic
    @Column(name = "address_street", nullable = true, length = 100)
    private String addressStreet;
    @Basic
    @Column(name = "address_number", nullable = true)
    private Integer addressNumber;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddressCountry() {
        return addressCountry;
    }

    public void setAddressCountry(String addressCountry) {
        this.addressCountry = addressCountry;
    }

    public String getAddressCity() {
        return addressCity;
    }

    public void setAddressCity(String addressCity) {
        this.addressCity = addressCity;
    }

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Address address = (Address) o;
        return id == address.id && Objects.equals(addressCountry, address.addressCountry) && Objects.equals(addressCity, address.addressCity) && Objects.equals(addressStreet, address.addressStreet) && Objects.equals(addressNumber, address.addressNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, addressCountry, addressCity, addressStreet, addressNumber);
    }
}
