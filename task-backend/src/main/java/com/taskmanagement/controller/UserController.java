package com.taskmanagement.controller;

import com.taskmanagement.dto.UserDto;
import com.taskmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public List<UserDto> getAllUsers(Principal principal){
        return userRepository.findAll()
                .stream()
                .filter(user -> !user.getEmail().equals(principal.getName()))
                .map(user -> new UserDto(user.getId(), user.getName()))
                .toList();
    }
}
