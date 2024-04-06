package com.kamis.Car_Rental_Spring.repository;

import com.kamis.Car_Rental_Spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

//    Optional<Car> findById(Long id);
}
