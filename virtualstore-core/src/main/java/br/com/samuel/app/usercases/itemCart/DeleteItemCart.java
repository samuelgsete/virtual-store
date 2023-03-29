package br.com.samuel.app.usercases.itemCart;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.repository.ItemCartRepository;
import br.com.samuel.app.repository.ShoppingCartRepository;
import br.com.samuel.app.usercases.models.DeleteOne;

@Service
public class DeleteItemCart extends DeleteOne<ItemCart, ItemCartRepository> {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public Optional<ItemCart> run(Integer id, ItemCart itemCart) {
        return getRepository()
            .findById(id)
            .map(itemFound -> {
                // Deleta o item
                getRepository().delete(itemFound);
                // Atualiza o resumo do pedido
                var shoppingCart = itemFound.getShoppingCart();
                var allItems = shoppingCart.getItems();
                shoppingCart.getResumeCart().updateResume(allItems);
                // Persiste os dados
                shoppingCartRepository.save(shoppingCart);
                return itemFound;
            });
    }
}