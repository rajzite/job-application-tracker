package com.smart.jobtracker.repository;

import com.smart.jobtracker.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Long>{
    
}
