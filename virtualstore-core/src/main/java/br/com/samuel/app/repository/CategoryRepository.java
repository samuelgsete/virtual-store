package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("SELECT c FROM Category c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.name ASC")
    Page<Category> listPaginate(@Param("search") String search, Pageable pageable); 
}