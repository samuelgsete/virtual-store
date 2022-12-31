package br.com.samuel.app.usercases.uploads;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class SaveImageLocally { // Salva a imagem localmente

    public void run(MultipartFile file, String randomName) throws IOException {
        var path = Paths.get("img/uploads/".concat(randomName));
        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
    }
}