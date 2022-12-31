package br.com.samuel.app.usercases.departments;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.repository.DepartmentRepository;
import br.com.samuel.app.usercases.models.Paginate;

@Service
public class ListDepartmentsPaginate extends Paginate<Department, DepartmentRepository> {

    public Page<Department> run(String search, String ordination, Pageable pageable) {
        return getRepository().listPaginate(search, pageable);
    }
}