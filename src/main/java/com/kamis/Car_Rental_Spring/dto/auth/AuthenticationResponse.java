package com.kamis.Car_Rental_Spring.dto.auth;

import com.kamis.Car_Rental_Spring.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;
    private UserRole userRole;
    private Long userId;

}
