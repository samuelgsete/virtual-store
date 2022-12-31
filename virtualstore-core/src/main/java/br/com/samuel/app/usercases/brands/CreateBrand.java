package br.com.samuel.app.usercases.brands;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.repository.BrandRepository;
import br.com.samuel.app.usercases.models.Create;

@Service
public class CreateBrand extends Create<Brand, BrandRepository> {

    public URI run(Brand newbBrand) {
        Brand createdBrand = getRepository().save(newbBrand);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdBrand.getId()).toUri();
    }
}