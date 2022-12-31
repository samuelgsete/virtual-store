package br.com.samuel.app.resources.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceFindByUniqueCode<T, R> {

    @Autowired
    private R find;

    protected R find() { return find; }

    public abstract ResponseEntity<T> run(String code);
}