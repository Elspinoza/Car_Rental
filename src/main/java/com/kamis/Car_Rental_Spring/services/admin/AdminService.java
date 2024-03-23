package com.kamis.Car_Rental_Spring.services.admin;

import com.kamis.Car_Rental_Spring.dto.CarDto;

import java.io.IOException;

public interface AdminService {

    boolean postCar(CarDto carDto) throws IOException;
}
