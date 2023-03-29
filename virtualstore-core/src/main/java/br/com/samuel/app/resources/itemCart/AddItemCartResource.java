package br.com.samuel.app.resources.itemCart;

import java.util.Set;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.resources.models.ResourceAddChild;
import br.com.samuel.app.usercases.itemCart.AddItemCart;

@RestController
@RequestMapping("shopping-carts")
public class AddItemCartResource extends ResourceAddChild<ItemCart, AddItemCart> {

    @PutMapping("{id}/add-item")
    public ResponseEntity<Set<ItemCart>> run(@PathVariable("id") Integer shoppingCartId, @RequestBody ItemCart itemCart) {
        return add()
            .run(shoppingCartId, itemCart)
            .map(updatedsItems -> ResponseEntity.ok(updatedsItems))
            .orElse(ResponseEntity.notFound().build());
    } 
}