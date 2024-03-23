package com.kamis.Car_Rental_Spring.services.auth;

import com.kamis.Car_Rental_Spring.dto.auth.SignupRequest;
import com.kamis.Car_Rental_Spring.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);
}
