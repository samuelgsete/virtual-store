package br.com.samuel.app.resources.departments;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.resources.models.ResourcePaginate;
import br.com.samuel.app.usercases.departments.ListDepartmentsPaginate;

@RestController
@RequestMapping("departments")
public class ListDepartmentsPaginateResource extends ResourcePaginate<Department, ListDepartmentsPaginate> {

    @GetMapping
    public ResponseEntity<Page<Department>> run(@RequestParam String search, @RequestParam String ordination, Pageable pageable) {
        return ResponseEntity.ok(paginate().run(search, ordination, pageable));
    }
}