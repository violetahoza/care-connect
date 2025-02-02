package com.ex.careconnect.repository;
import com.ex.careconnect.model.Label;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabelRepository extends JpaRepository<Label, Integer> {

}

