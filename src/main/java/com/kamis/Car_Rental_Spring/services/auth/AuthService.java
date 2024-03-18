package com.kamis.Car_Rental_Spring.services.auth;

import com.kamis.Car_Rental_Spring.dto.SignupRequest;
import com.kamis.Car_Rental_Spring.dto.UserDto;
import lombok.Data;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
