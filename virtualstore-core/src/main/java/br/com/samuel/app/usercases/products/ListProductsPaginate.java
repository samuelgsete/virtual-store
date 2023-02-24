package br.com.samuel.app.usercases.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.repository.ProductRepository;

@Service
public class ListProductsPaginate {

    @Autowired
    private ProductRepository repository;

    public ProductRepository getRepository() { return repository; }

    public Page<Product> run(String search, String category, String ordination, Pageable pageable) {
        switch(ordination) {
            // mais vendidos
            case "bestsellers":
            return getRepository().listProductsBestSellers(search, category, pageable);

            // Mais baratos
            case "cheaper":
            return getRepository().listProductsCheaper(search, category, pageable);

            // Mais caros caros
            case "moreexpensive":     
            return getRepository().listProductsMostExpensive(search, category, pageable);

            // Maiores descontos
            case "biggestdiscount":
            return getRepository().listProductsBiggestDiscount(search, category, pageable);

            // Mais recentes
            case "latest":
            return getRepository().listProductsLatest(search, category, pageable);

            default: return getRepository().listPaginate(search, category, pageable);
        }
    }
}