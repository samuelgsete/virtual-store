package br.com.samuel.app.resources.models;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public abstract class ResourceAddChild<T, U> {
    
    @Autowired
    private U add;

    protected U add() { return add; }

    public abstract ResponseEntity<Set<T>> run(Integer parentId, T newChild);
}