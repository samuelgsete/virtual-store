package br.com.samuel.app.usercases.products;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.repository.ProductRepository;
import br.com.samuel.app.usercases.models.Create;

@Service
public class CreateProduct extends Create<Product, ProductRepository> {

    @Autowired
    public GenerateCode uniqueCode;
    
    public URI run(Product newProduct) {
        var allImages = newProduct.getImages();
        var allSpecifications = newProduct.getSpecifications();
        var allVersions = newProduct.getProductVersions();
        var category = newProduct.getCategory();
        var brand = newProduct.getBrand(); 

        newProduct.setCode(uniqueCode.run());      
        newProduct.addAllImages(allImages);  
        newProduct.addAllSpecifications(allSpecifications);
        newProduct.addAllProductVersions(allVersions);

        category.addProduct(newProduct);
        brand.addProduct(newProduct);
        newProduct.setCategory(category);
        newProduct.setBrand(brand);
        newProduct.getPricing().generatePrice();
        newProduct.getPricing().generateInstallments();

        Product createdProduct = getRepository().save(newProduct);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{code}")
            .buildAndExpand(createdProduct.getCode()).toUri();
    }
}