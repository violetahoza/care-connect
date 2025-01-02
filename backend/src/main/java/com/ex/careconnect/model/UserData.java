package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "userdata")
public class UserData {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "first_name", nullable = true, length = 100)
    private String firstName;
    @Basic
    @Column(name = "last_name", nullable = true, length = 100)
    private String lastName;
    @Basic
    @Column(name = "email", nullable = true, length = 100)
    private String email;
    @Basic
    @Column(name = "address_id", nullable = true)
    private Integer addressId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAddressId() {
        return addressId;
    }

    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserData userdata = (UserData) o;
        return id == userdata.id && Objects.equals(firstName, userdata.firstName) && Objects.equals(lastName, userdata.lastName) &&  Objects.equals(addressId, userdata.addressId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, addressId);
    }
}
