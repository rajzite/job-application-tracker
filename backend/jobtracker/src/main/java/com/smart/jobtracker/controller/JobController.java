package com.smart.jobtracker.controller;

import com.smart.jobtracker.entity.Job;
import com.smart.jobtracker.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@RequiredArgsConstructor

public class JobController {

    private final JobService jobService;

    @PostMapping
    public Job addJob(@RequestBody Job job){
        return jobService.addJob(job);
    }

    @GetMapping("/{userId}")
    public List<Job> getJobs(@PathVariable Long userId){
        return jobService.getJobs(userId);
    }

    @DeleteMapping("/{userId}")
    public void deleteJob(@PathVariable Long userId){
        jobService.deleteJob(userId);
    }

    @PutMapping
    public Job updateJob(@RequestBody Job job){
        return jobService.updateJob(job);
    }
}
