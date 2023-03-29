package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Set;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "shopping_carts")
public class ShoppingCart extends EntityBase {
    
    @JoinColumn(name = "resume_cart_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ResumeCart resumeCart;

    @OrderBy("created_At DESC")
    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL)
    private Set<ItemCart> items = new HashSet<ItemCart>();
}