package br.com.samuel.app.usercases.uploads;

import java.io.IOException;
import java.util.UUID;
import javax.imageio.ImageIO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.com.samuel.app.models.ProductImage;

@Service
public class UploadImage {
    
    @Autowired
    private SaveAtCloud saveCloud;
    @Autowired
    private SaveImageLocally saveLocally;
      
    public ProductImage run(MultipartFile file) throws IOException {
        Integer width = ImageIO.read(file.getInputStream()).getWidth();
        Integer height = ImageIO.read(file.getInputStream()).getHeight();
        Long size = file.getSize();
        String originalName = file.getOriginalFilename();
        String randomName = UUID.randomUUID().toString();

        saveLocally.run(file, randomName);
        String url = saveCloud.run(randomName);
        
        ProductImage image = new ProductImage();
        image.setRandomName(randomName);
        image.setOriginalName(originalName);
        image.setUrl(url);
        image.setWidth(width);
        image.setHeight(height);
        image.setSize(size);
                
        return image;
    }
}