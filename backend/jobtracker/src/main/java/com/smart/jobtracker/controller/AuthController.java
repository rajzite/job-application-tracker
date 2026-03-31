package com.smart.jobtracker.controller;

import com.smart.jobtracker.entity.User;
import com.smart.jobtracker.repository.UserRepository;
import com.smart.jobtracker.security.JwtUnit;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUnit jwtUnit;

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existingUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow();

        if(!passwordEncoder.matches(user.getPassword(),existingUser.getPassword())){
            throw new RuntimeException("Invalid credentials");
        }

        return jwtUnit.generateToken(existingUser.getEmail());
    }
}
