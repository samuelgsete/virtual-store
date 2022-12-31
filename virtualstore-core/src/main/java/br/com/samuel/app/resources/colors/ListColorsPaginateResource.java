package br.com.samuel.app.resources.colors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.resources.models.ResourcePaginate;
import br.com.samuel.app.usercases.colors.ListColorsPaginate;

@RestController
@RequestMapping("colors")
public class ListColorsPaginateResource extends ResourcePaginate<Color, ListColorsPaginate> {

    @GetMapping
    public ResponseEntity<Page<Color>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginate().run(search, ordination, pageable));
    }
}