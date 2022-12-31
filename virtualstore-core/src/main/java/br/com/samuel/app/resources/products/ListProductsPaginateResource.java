package br.com.samuel.app.resources.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.resources.models.ResourcePaginate;
import br.com.samuel.app.usercases.products.ListProductsPaginate;

@RestController
@RequestMapping("products")
public class ListProductsPaginateResource extends ResourcePaginate<Product, ListProductsPaginate> {

    @GetMapping
    public ResponseEntity<Page<Product>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginate().run(search, ordination, pageable));
    }
}