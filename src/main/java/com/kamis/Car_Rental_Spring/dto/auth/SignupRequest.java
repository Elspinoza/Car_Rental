package com.kamis.Car_Rental_Spring.dto.auth;

import lombok.Data;

@Data
public class SignupRequest {

    private String name;

    private String email;

    private String password;
}
