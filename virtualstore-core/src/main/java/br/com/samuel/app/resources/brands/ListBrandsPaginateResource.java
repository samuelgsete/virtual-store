package br.com.samuel.app.resources.brands;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.resources.models.ResourcePaginate;
import br.com.samuel.app.usercases.brands.ListBrandsPaginate;

@RestController
@RequestMapping("brands")
public class ListBrandsPaginateResource extends ResourcePaginate<Brand, ListBrandsPaginate> {

    @GetMapping
    public ResponseEntity<Page<Brand>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginate().run(search, ordination, pageable));
    }
}