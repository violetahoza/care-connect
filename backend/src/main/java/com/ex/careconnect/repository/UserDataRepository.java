package com.ex.careconnect.repository;

import com.ex.careconnect.model.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Integer> {
    Optional<UserData> findByEmail(String email);
}
