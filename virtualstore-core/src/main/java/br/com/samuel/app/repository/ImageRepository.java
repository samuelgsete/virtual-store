package br.com.samuel.app.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.samuel.app.models.ProductImage;

@Repository
public interface ImageRepository extends JpaRepository<ProductImage, Integer> {
    
    @Query("SELECT i FROM ProductImage i WHERE i.randomName = :uniqueName")
    public Optional<ProductImage> findImageByUniqueName(@Param("uniqueName") String uniqueName);
}