package com.ex.careconnect.repository;

import com.ex.careconnect.model.ProductLabel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLabelRepository extends JpaRepository<ProductLabel, Integer> {


}
