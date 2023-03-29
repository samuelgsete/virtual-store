package br.com.samuel.app.usercases.itemCart;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.repository.ItemCartRepository;
import br.com.samuel.app.repository.ShoppingCartRepository;
import br.com.samuel.app.usercases.models.Update;

@Service
public class SelectItemCart extends Update<ItemCart, ItemCartRepository> {
  
    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    public Optional<ItemCart> run(Integer id, ItemCart itemCart) {
        return getRepository()
            .findById(id)
            .map(itemCartCreated -> {
                // Seleciona o item
                itemCartCreated.setIsSelected(itemCart.getIsSelected());
                var itemCartUpdated = getRepository().save(itemCartCreated);
                // Atualiza o resumo do carrinho
                var shoppingCartId = itemCartUpdated.getShoppingCart().getId();
                shoppingCartRepository
                    .findById(shoppingCartId)
                    .map(shoppingCart -> {
                        var allItems = shoppingCart.getItems();
                        shoppingCart.getResumeCart().updateResume(allItems);
                        var shoppingCartUpdated = shoppingCartRepository.save(shoppingCart);
                        return shoppingCartUpdated;
                    });
                return itemCartUpdated;
            });
    }
}