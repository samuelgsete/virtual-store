package br.com.samuel.app.usercases.brands;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.repository.BrandRepository;
import br.com.samuel.app.usercases.models.Paginate;

@Service
public class ListBrandsPaginate extends Paginate<Brand, BrandRepository> {

    public Page<Brand> run(String search, String ordination, Pageable pageable) {
        return getRepository().listPaginate(search, pageable);
    }
}