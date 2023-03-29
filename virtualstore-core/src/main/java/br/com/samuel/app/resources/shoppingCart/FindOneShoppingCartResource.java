package br.com.samuel.app.resources.shoppingCart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ShoppingCart;
import br.com.samuel.app.resources.models.ResourceFindOne;
import br.com.samuel.app.usercases.shoppingCarts.FindOneShoppingCart;

@RestController
@RequestMapping("shopping-carts")
public class FindOneShoppingCartResource extends ResourceFindOne<ShoppingCart, FindOneShoppingCart> {

    @GetMapping("{id}")
    public ResponseEntity<ShoppingCart> run(@PathVariable Integer id) {
        return findOne()
            .run(id)
            .map(foundShoppingCart -> ResponseEntity.ok(foundShoppingCart))
            .orElse(ResponseEntity.notFound().build());
    }  
}