package br.com.samuel.app.usercases.itemCart;

import java.util.Optional;
import java.util.Set;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.repository.ShoppingCartRepository;
import br.com.samuel.app.usercases.models.AddChild;

@Service
public class AddItemCart extends AddChild<ItemCart, ShoppingCartRepository> {

    public Optional<Set<ItemCart>> run(Integer shoppingCartId, ItemCart itemCart) {
        return getRepository()
            .findById(shoppingCartId)
            .map(shoppingCart -> {
                itemCart.updateSubtotal();
                shoppingCart.getItems().add(itemCart);
                itemCart.setShoppingCart(shoppingCart);
                var allItems = shoppingCart.getItems();
                shoppingCart.getResumeCart().updateResume(allItems);
                var updateShoppingCart = getRepository().save(shoppingCart);
                return updateShoppingCart.getItems();
            });
    }       
}