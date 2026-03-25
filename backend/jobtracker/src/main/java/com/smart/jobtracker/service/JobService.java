package com.smart.jobtracker.service;

import com.smart.jobtracker.entity.Job;
import com.smart.jobtracker.repository.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {

    private final JobRepository jobRepository;

    public Job addJob(Job job){
        return jobRepository.save(job);
    }

    public List<Job> getJobs(Long userId){
        return jobRepository.findByUserId(userId);
    }

    public void deleteJob(Long id){
        jobRepository.deleteById(id);
    }

    public Job updateJob(Job job){
        return jobRepository.save(job);
    }
}
