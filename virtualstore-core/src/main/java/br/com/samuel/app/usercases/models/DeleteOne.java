package br.com.samuel.app.usercases.models;

import org.springframework.beans.factory.annotation.Autowired;

public abstract class DeleteOne<T, R> {

    @Autowired
    private R repository;

    protected R getRepository() { return repository; }

    public abstract T run(Integer id, T object);
}