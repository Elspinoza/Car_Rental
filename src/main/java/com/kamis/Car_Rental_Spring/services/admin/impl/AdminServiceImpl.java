package com.kamis.Car_Rental_Spring.services.admin.impl;

import com.kamis.Car_Rental_Spring.dto.CarDto;
import com.kamis.Car_Rental_Spring.entity.Car;
import com.kamis.Car_Rental_Spring.repository.CarRepository;
import com.kamis.Car_Rental_Spring.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final CarRepository carRepository;

    @Override
    public boolean postCar(CarDto carDto) throws IOException {

        try {
            Car car = new Car();
            car.setName(carDto.getName());
            car.setBrand(carDto.getBrand());
            car.setColor(carDto.getColor());
            car.setPrice(carDto.getPrice());
            car.setYear(carDto.getYear());
            car.setType(carDto.getType());
            car.setDescription(carDto.getDescription());
            car.setTransmission(carDto.getTransmission());
            car.setImage(carDto.getImage().getBytes());
            carRepository.save(car);

            return true;
        } catch (Exception e){
            return false;
        }



    }
}
