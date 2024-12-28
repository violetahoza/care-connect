package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "product")
public class Product {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "product_name", nullable = true, length = 100)
    private String productName;
    @Basic
    @Column(name = "product_description", nullable = true, length = 400)
    private String productDescription;
    @Basic
    @Column(name = "product_category", nullable = true, length = 100)
    private String productCategory;
    @Basic
    @Column(name = "product_price", nullable = true, precision = 0)
    private Double productPrice;
    @Basic
    @Column(name = "product_amount", nullable = true)
    private Integer productAmount;
    @Basic
    @Column(name = "product_stock", nullable = true)
    private Integer productStock;
    @Basic
    @Column(name = "provider_id", nullable = true)
    private Integer providerId;
    @Basic
    @Column(name = "picture", nullable = true, length = 400)
    private String picture;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductCategory() {
        return productCategory;
    }

    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    public Integer getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(Integer productAmount) {
        this.productAmount = productAmount;
    }

    public Integer getProductStock() {
        return productStock;
    }

    public void setProductStock(Integer productStock) {
        this.productStock = productStock;
    }

    public Integer getProviderId() {
        return providerId;
    }

    public void setProviderId(Integer providerId) {
        this.providerId = providerId;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product)) return false;
        Product product = (Product) o;
        return getId() == product.getId() && Objects.equals(getProductName(), product.getProductName()) && Objects.equals(getProductDescription(), product.getProductDescription()) && Objects.equals(getProductCategory(), product.getProductCategory()) && Objects.equals(getProductPrice(), product.getProductPrice()) && Objects.equals(getProductAmount(), product.getProductAmount()) && Objects.equals(getProductStock(), product.getProductStock()) && Objects.equals(getProviderId(), product.getProviderId()) && Objects.equals(getPicture(), product.getPicture());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getProductName(), getProductDescription(), getProductCategory(), getProductPrice(), getProductAmount(), getProductStock(), getProviderId(), getPicture());
    }
}
