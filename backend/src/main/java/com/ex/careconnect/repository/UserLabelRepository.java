package com.ex.careconnect.repository;

import com.ex.careconnect.model.UserLabel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLabelRepository extends JpaRepository<UserLabel, Integer> {

}
