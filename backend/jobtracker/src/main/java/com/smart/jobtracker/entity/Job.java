package com.smart.jobtracker.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private String status;  //APPLIED, INTERVIEW, REJECTED, OFFER

    private LocalDate applicedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
