package br.com.samuel.app.usercases.models;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class DeleteMany<T, R> {
    
    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract void run(Set<T> listObjects);
}