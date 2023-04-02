package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Color;

@Repository
public interface ColorRepository extends JpaRepository<Color, Integer> {
    
    // Listar paginado
    @Query("SELECT c FROM Color c WHERE LOWER(c.name) LIKE %:search% ORDER BY c.id ASC")
    Page<Color> listPaginate(@Param("search") String search, Pageable pageable);  
}