package com.ex.careconnect.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "label")
public class Label {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "label_name", nullable = true, length = 100)
    private String labelName;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabelName() {
        return labelName;
    }

    public void setLabelName(String labelName) {
        this.labelName = labelName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Label label = (Label) o;
        return id == label.id && Objects.equals(labelName, label.labelName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, labelName);
    }
}
