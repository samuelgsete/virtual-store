package br.com.samuel.app.usercases.models;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class FindByUniqueCode<T, R> {
    
    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract Optional<T> run(String code);
}