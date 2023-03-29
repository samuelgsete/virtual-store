package br.com.samuel.app.usercases.brands;

import java.util.Optional;

import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.repository.BrandRepository;
import br.com.samuel.app.usercases.models.DeleteOne;

@Service
public class DeleteBrand extends DeleteOne<Brand, BrandRepository> {

    public Optional<Brand> run(Integer id, Brand brand) {
        return getRepository()
            .findById(id)
            .map(deletedBrand -> {
                getRepository().deleteById(id);
                return deletedBrand;
            });
    }
}