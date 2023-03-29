package br.com.samuel.app.resources.shoppingCart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ShoppingCart;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usercases.shoppingCarts.CreateShoppingCart;

@RestController
@RequestMapping("shopping-carts")
public class CreateShoppingCartResource extends ResourceCreate<ShoppingCart, CreateShoppingCart> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody ShoppingCart newShoppingCart) {
        return ResponseEntity.created(create().run(newShoppingCart)).build();
    } 
}