package com.smart.jobtracker.repository;

import com.smart.jobtracker.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobRepository extends JpaRepository<Job,Long> {
    List<Job> findByUserId(Long userId);
}
