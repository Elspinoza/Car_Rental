package com.kamis.Car_Rental_Spring.services.Impl;

import com.kamis.Car_Rental_Spring.dto.SignupRequest;
import com.kamis.Car_Rental_Spring.dto.UserDto;
import com.kamis.Car_Rental_Spring.entity.User;
import com.kamis.Car_Rental_Spring.enums.UserRole;
import com.kamis.Car_Rental_Spring.repository.UserRepository;
import com.kamis.Car_Rental_Spring.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository repository;

    @Override
    public UserDto createCustomer(SignupRequest signupRequest) {
        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());
        user.setUserRole(UserRole.CUSTOMER);
        User createdUser =repository.save(user);
        UserDto userDto = new UserDto();
        userDto.setId(createdUser.getId());
        return userDto;
    }

    @Override
    public boolean hasCustomerWithEmail(String email) {
        return repository.findFirstByEmail(email).isPresent();
    }
}
