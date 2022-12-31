package br.com.samuel.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

    @Query("SELECT d FROM Department d WHERE LOWER(d.name) LIKE %:search% ORDER BY d.name ASC")
    Page<Department> listPaginate(@Param("search") String search, Pageable pageable); 
}