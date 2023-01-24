package br.com.samuel.app.usercases.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.repository.ProductRepository;
import br.com.samuel.app.usercases.models.Paginate;

@Service
public class ListProductsPaginate extends Paginate<Product, ProductRepository> {

    public Page<Product> run(String search, String ordination, Pageable pageable) {
        switch(ordination) {
            // mais vendidos
            case "bestsellers":
            return getRepository().listProductsBestSellers(search, pageable);

            // Mais baratos
            case "cheaper":
            return getRepository().listProductsCheaper(search, pageable);

            // Mais caros caros
            case "moreexpensive":     
            return getRepository().listProductsMostExpensive(search, pageable);

            // Maiores descontos
            case "biggestdiscount":
            return getRepository().listProductsBiggestDiscount(search, pageable);

            // Mais recentes
            case "latest":
            return getRepository().listProductsLatest(search, pageable);

            // Por categoria
            case "category":
            return getRepository().listProductsByCategory(search, pageable);

            default: return getRepository().listPaginate(search, pageable);
        }
    }
}