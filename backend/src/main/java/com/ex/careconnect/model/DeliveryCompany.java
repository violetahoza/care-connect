package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "deliverycompany")
public class DeliveryCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "delivery_company_name", nullable = true, length = 100)
    private String deliveryCompanyName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDeliveryCompanyName() {
        return deliveryCompanyName;
    }

    public void setDeliveryCompanyName(String deliveryCompanyName) {
        this.deliveryCompanyName = deliveryCompanyName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DeliveryCompany)) return false;
        DeliveryCompany that = (DeliveryCompany) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getDeliveryCompanyName(), that.getDeliveryCompanyName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDeliveryCompanyName());
    }
}
