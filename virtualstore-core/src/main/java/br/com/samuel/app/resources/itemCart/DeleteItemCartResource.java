package br.com.samuel.app.resources.itemCart;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ItemCart;
import br.com.samuel.app.resources.models.ResourceDeleteOne;
import br.com.samuel.app.usercases.itemCart.DeleteItemCart;

@RestController
@RequestMapping("item-cart")
public class DeleteItemCartResource extends ResourceDeleteOne<ItemCart, DeleteItemCart> {

    @DeleteMapping("{id}")
    public ResponseEntity<ItemCart> run(@PathVariable Integer id, @RequestBody ItemCart itemCart) {
        return delete()
            .run(id, itemCart)
            .map(itemCartDeleted -> ResponseEntity.ok(itemCartDeleted))
            .orElse(ResponseEntity.notFound().build());
    }
}