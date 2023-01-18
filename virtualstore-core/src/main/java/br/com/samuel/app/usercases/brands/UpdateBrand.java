package br.com.samuel.app.usercases.brands;

import java.util.Optional;
import org.springframework.stereotype.Service;
import br.com.samuel.app.models.Brand;
import br.com.samuel.app.repository.BrandRepository;
import br.com.samuel.app.usercases.models.Update;

@Service
public class UpdateBrand extends Update<Brand, BrandRepository> {

    public Optional<Brand> run(Integer id, Brand createdBrand) {
        return getRepository()
            .findById(id)
            .map(unupdatedBrand -> {
                unupdatedBrand.setName(createdBrand.getName());
                unupdatedBrand.setWebsite(createdBrand.getWebsite());
               
                Brand updatedBrand = getRepository().save(unupdatedBrand);
                return updatedBrand;
            });
    }
}