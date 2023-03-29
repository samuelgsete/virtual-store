package br.com.samuel.app.usercases.shoppingCarts;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.ShoppingCart;
import br.com.samuel.app.repository.ShoppingCartRepository;
import br.com.samuel.app.usercases.models.FindOne;

@Service
public class FindOneShoppingCart extends FindOne<ShoppingCart, ShoppingCartRepository> {

    public Optional<ShoppingCart> run(Integer id) {
        return getRepository().findById(id);
    }
}