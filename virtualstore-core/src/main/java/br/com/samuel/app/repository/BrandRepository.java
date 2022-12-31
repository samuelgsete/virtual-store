package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer> {

    // Listar paginado
    @Query("SELECT b FROM Brand b WHERE LOWER(b.name) LIKE %:search% ORDER BY b.name ASC")
    Page<Brand> listPaginate(@Param("search") String search, Pageable pageable);  
}