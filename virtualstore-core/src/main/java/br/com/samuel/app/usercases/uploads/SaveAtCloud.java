package br.com.samuel.app.usercases.uploads;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import com.cloudinary.utils.ObjectUtils;

import br.com.samuel.app.config.UploadCloudConfig;

@Service
public class SaveAtCloud {

    @Autowired
    private ApplicationContext context;
    
    public String run(String randomName) throws IOException {
        var cloudinary = context.getBean(UploadCloudConfig.class).config();
        var path = Paths.get("img/uploads/".concat(randomName)).toString();
        cloudinary.uploader().upload(path, ObjectUtils.asMap("public_id", randomName));
        var url = cloudinary.url().generate(randomName);
        new File(path.toString()).delete();
        return url;
    }
}