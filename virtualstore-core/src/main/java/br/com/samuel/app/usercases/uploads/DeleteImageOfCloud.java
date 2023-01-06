package br.com.samuel.app.usercases.uploads;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import com.cloudinary.utils.ObjectUtils;

import br.com.samuel.app.config.UploadCloudConfig;
import br.com.samuel.app.repository.ImageRepository;

@Service
public class DeleteImageOfCloud {
    
    @Autowired
    private ApplicationContext context;
    @Autowired
    private ImageRepository repository;

    public void run(String nameImg) throws IOException {
        repository.findImageByUniqueName(nameImg)
            .map(deletedImage -> {
                repository.delete(deletedImage);
                return deletedImage;
            });
        var cloudinary = context.getBean(UploadCloudConfig.class).config();
        cloudinary.uploader().destroy(nameImg, ObjectUtils.emptyMap());
    }
}