package com.kamis.Car_Rental_Spring.services.auth.Impl;

import com.kamis.Car_Rental_Spring.dto.SignupRequest;
import com.kamis.Car_Rental_Spring.dto.UserDto;
import com.kamis.Car_Rental_Spring.entity.User;
import com.kamis.Car_Rental_Spring.enums.UserRole;
import com.kamis.Car_Rental_Spring.repository.UserRepository;
import com.kamis.Car_Rental_Spring.services.auth.AuthService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository repository;
    @PostConstruct
    public void createAdminAccount() {
        User adminAccount = repository.findByUserRole(UserRole.ADMIN);
        if (adminAccount == null) {
            User newAdminAccount = new User();
            newAdminAccount.setName("Admin");
            newAdminAccount.setEmail("admin@test.com");
            newAdminAccount.setPassword(new BCryptPasswordEncoder().encode("admin"));
            newAdminAccount.setUserRole(UserRole.ADMIN);
            repository.save(newAdminAccount);
            System.out.println("Admin account created successfully");
        }
    }

    @Override
    public UserDto createCustomer(SignupRequest signupRequest) {

        User user = new User();
        user.setName(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
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
