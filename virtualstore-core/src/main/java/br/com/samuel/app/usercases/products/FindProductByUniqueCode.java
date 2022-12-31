package br.com.samuel.app.usercases.products;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.repository.ProductRepository;
import br.com.samuel.app.usercases.models.FindByUniqueCode;

@Service
public class FindProductByUniqueCode extends FindByUniqueCode<Product, ProductRepository> {
   
    public Optional<Product> run(String code) {
        return getRepository().findByUniqueCode(code);
    }
}