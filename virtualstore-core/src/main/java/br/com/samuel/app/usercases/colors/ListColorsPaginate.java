package br.com.samuel.app.usercases.colors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.repository.ColorRepository;
import br.com.samuel.app.usercases.models.Paginate;

@Service
public class ListColorsPaginate extends Paginate<Color, ColorRepository> {

    public Page<Color> run(String search, String ordination, Pageable pageable) {
        return getRepository().listPaginate(search, pageable);
    }
}