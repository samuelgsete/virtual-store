package br.com.samuel.app.usercases.shoppingCarts;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.ShoppingCart;
import br.com.samuel.app.repository.ShoppingCartRepository;
import br.com.samuel.app.usercases.models.Create;

@Service
public class CreateShoppingCart extends Create<ShoppingCart, ShoppingCartRepository> {

    public URI run(ShoppingCart newShoppingCart) {
        var allItems = newShoppingCart.getItems();
        newShoppingCart.setItems(allItems);
        for(var item: newShoppingCart.getItems()) {
            item.setShoppingCart(newShoppingCart);
        }
        newShoppingCart.getResumeCart().updateResume(allItems);
        ShoppingCart createdShoppingCart = getRepository().save(newShoppingCart);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdShoppingCart.getId()).toUri();
    }
}