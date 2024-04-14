package com.kamis.Car_Rental_Spring.services.customer;

import com.kamis.Car_Rental_Spring.dto.BookACarDto;
import com.kamis.Car_Rental_Spring.dto.CarDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookACar(BookACarDto bookACarDto);

    CarDto getCarById(long carId);
}
