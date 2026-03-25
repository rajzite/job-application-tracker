package com.smart.jobtracker.service;

import com.smart.jobtracker.entity.User;
import com.smart.jobtracker.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User register(User user){
        return userRepository.save(user);
    }
}
