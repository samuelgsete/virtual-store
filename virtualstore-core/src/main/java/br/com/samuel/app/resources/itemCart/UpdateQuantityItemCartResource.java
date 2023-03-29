package br.com.samuel.app.resources.itemCart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usercases.itemCart.UpdateQuantityItemCart;

@RestController
@RequestMapping("item-cart")
public class UpdateQuantityItemCartResource extends ResourceUpdate<ItemCart, UpdateQuantityItemCart> {

    @PutMapping("{id}/quantity")
    public ResponseEntity<ItemCart> run(@PathVariable Integer id, @RequestBody ItemCart itemCart) {
        return update()
            .run(id, itemCart)
            .map(itemCartUpdated -> ResponseEntity.ok(itemCartUpdated))
            .orElse(ResponseEntity.notFound().build());
    }
}