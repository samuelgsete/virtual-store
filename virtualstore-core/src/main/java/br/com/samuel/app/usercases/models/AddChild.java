package br.com.samuel.app.usercases.models;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class AddChild<T, R> {
    
    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract Optional<Set<T>> run(Integer parentId, T childObject);
}