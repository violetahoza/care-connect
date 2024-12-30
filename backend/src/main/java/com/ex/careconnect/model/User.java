package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "user", schema = "shop")
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "user_name", nullable = true, length = 100)
    private String userName;
    @Basic
    @Column(name = "user_password", nullable = true, length = 100)
    private String userPassword;
    @Basic
    @Column(name = "email", nullable = true, length = 100)
    private String email;
    @Basic
    @Column(name = "user_data_id", nullable = true)
    private Integer userDataId;
    @Basic
    @Column(name = "is_admin", nullable = true)
    private Byte isAdmin;
    @Basic
    @Column(name = "is_employee", nullable = true)
    private Byte isEmployee;
    @Basic
    @Column(name = "is_customer", nullable = true)
    private Byte isCustomer;
    @Basic
    @Column(name = "is_provider", nullable = true)
    private Integer isProvider;
    @Basic
    @Column(name = "is_delivery", nullable = true)
    private Integer isDelivery;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public Integer getUserDataId() {
        return userDataId;
    }

    public void setUserDataId(Integer userDataId) {
        this.userDataId = userDataId;
    }

    public Byte getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(Byte isAdmin) {
        this.isAdmin = isAdmin;
    }

    public Byte getIsEmployee() {
        return isEmployee;
    }

    public void setIsEmployee(Byte isEmployee) {
        this.isEmployee = isEmployee;
    }

    public Byte getIsCustomer() {
        return isCustomer;
    }

    public void setIsCustomer(Byte isCustomer) {
        this.isCustomer = isCustomer;
    }

    public Integer getIsProvider() {
        return isProvider;
    }

    public void setIsProvider(Integer isProvider) {
        this.isProvider = isProvider;
    }

    public Integer getIsDelivery() {
        return isDelivery;
    }

    public void setIsDelivery(Integer isDelivery) {
        this.isDelivery = isDelivery;
    }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(userName, user.userName) && Objects.equals(userPassword, user.userPassword) && Objects.equals(userDataId, user.userDataId) && Objects.equals(isAdmin, user.isAdmin) && Objects.equals(isEmployee, user.isEmployee) && Objects.equals(isCustomer, user.isCustomer) && Objects.equals(isProvider, user.isProvider) && Objects.equals(isDelivery, user.isDelivery);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, userPassword, userDataId, isAdmin, isEmployee, isCustomer, isProvider, isDelivery);
    }
}
