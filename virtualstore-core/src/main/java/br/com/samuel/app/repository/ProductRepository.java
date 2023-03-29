package br.com.samuel.app.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p WHERE p.code = :code")
    Optional<Product> findByUniqueCode(@Param("code") String code);

    // Listar paginado
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.name ASC")
    Page<Product> listPaginate(@Param("search") String search, @Param("category") String category, Pageable pageable); 
    
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:search% ORDER BY p.name ASC")
    Page<Product> listProductsByCategory(@Param("search") String search, Pageable pageable);  

    // Listar produtos mais vendidos
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.soldUnits DESC")
    Page<Product> listProductsBestSellers(
        @Param("search") String search, 
        @Param("category") String category,
        Pageable pageable
    );                                      

    // Listar produtos mais caros
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.pricing.incashPrice DESC")
    Page<Product> listProductsMostExpensive(@Param("search") String search, @Param("category") String category, Pageable pageable);

    // Listar produtos mais baratos
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.pricing.incashPrice ASC")
    Page<Product> listProductsCheaper(@Param("search") String search, @Param("category") String category, Pageable pageable);

    // Listar produtos com maior desconto
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.pricing.incashDiscount DESC")
    Page<Product> listProductsBiggestDiscount(@Param("search") String search, @Param("category") String category, Pageable pageable);

    // Listar produtos mais recentes
    @Query("SELECT p FROM Product p WHERE p.category.name LIKE %:category% AND LOWER(p.name) LIKE %:search% ORDER BY p.createdAt DESC")
    Page<Product> listProductsLatest(@Param("search") String search, @Param("category") String category, Pageable pageable);
}