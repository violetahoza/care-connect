package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "shoporder")
public class ShopOrder {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "user_id", nullable = true)
    private Integer userId;
    @Basic
    @Column(name = "total_price", nullable = true, precision = 0)
    private Double totalPrice;
    @Basic
    @Column(name = "delivery_company_id", nullable = true)
    private Integer deliveryCompanyId;
    @Basic
    @Column(name = "is_payed_online", nullable = true)
    private Byte isPayedOnline;
    @Basic
    @Column(name = "is_payed_cash", nullable = true)
    private Byte isPayedCash;
    @Basic
    @Column(name = "is_delivered", nullable = true)
    private Byte isDelivered;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getDeliveryCompanyId() {
        return deliveryCompanyId;
    }

    public void setDeliveryCompanyId(Integer deliveryCompanyId) {
        this.deliveryCompanyId = deliveryCompanyId;
    }

    public Byte getIsPayedOnline() {
        return isPayedOnline;
    }

    public void setIsPayedOnline(Byte isPayedOnline) {
        this.isPayedOnline = isPayedOnline;
    }

    public Byte getIsPayedCash() {
        return isPayedCash;
    }

    public void setIsPayedCash(Byte isPayedCash) {
        this.isPayedCash = isPayedCash;
    }

    public Byte getIsDelivered() {
        return isDelivered;
    }

    public void setIsDelivered(Byte isDelivered) {
        this.isDelivered = isDelivered;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ShopOrder)) return false;
        ShopOrder shopOrder = (ShopOrder) o;
        return getId() == shopOrder.getId() && Objects.equals(getUserId(), shopOrder.getUserId()) && Objects.equals(getTotalPrice(), shopOrder.getTotalPrice()) && Objects.equals(getDeliveryCompanyId(), shopOrder.getDeliveryCompanyId()) && Objects.equals(getIsPayedOnline(), shopOrder.getIsPayedOnline()) && Objects.equals(getIsPayedCash(), shopOrder.getIsPayedCash()) && Objects.equals(getIsDelivered(), shopOrder.getIsDelivered());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserId(), getTotalPrice(), getDeliveryCompanyId(), getIsPayedOnline(), getIsPayedCash(), getIsDelivered());
    }
}
