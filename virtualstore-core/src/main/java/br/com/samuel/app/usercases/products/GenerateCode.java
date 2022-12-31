package br.com.samuel.app.usercases.products;

import java.util.Random;
import org.springframework.stereotype.Service;

@Service
public class GenerateCode {

    private final Integer min = 10000;
    private final Integer max = 99999;
    
    public String run() {
        Random random = new Random();
        String randomCharacter = (char) ('A' + random.nextInt(26)) + "";
        Integer randomCode = (int) Math.floor(Math.random() * (max - min + 1) + min);
        return randomCharacter + "0" + randomCode;
    }
}