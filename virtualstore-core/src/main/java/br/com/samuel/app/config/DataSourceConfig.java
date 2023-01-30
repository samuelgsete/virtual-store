package br.com.samuel.app.config;

import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class DataSourceConfig {
    
    @Bean
    public DataSource memoryh2() {
        return DataSourceBuilder
            .create()
            .username("sa")
            .password("")
            .url("jdbc:h2:mem:testdb")
            .driverClassName("org.h2.Driver")
            .build();
    }

    @Bean
    @Primary
    public DataSource localPostgres() {
        return DataSourceBuilder
            .create()
            .username("postgres")
            .password("postgres")
            .url("jdbc:postgresql://localhost:5432/virtualstoredb")
            .driverClassName("org.postgresql.Driver")
            .build();
    }

    @Bean
    public DataSource cloudPostgres() {
        return DataSourceBuilder
            .create()
            .username("vrmkqrhm")
            .password(System.getenv("PASSWORD_POSTGRES"))
            .url("jdbc:postgresql://motty.db.elephantsql.com:5432/vrmkqrhm")
            .driverClassName("org.postgresql.Driver")
            .build();
    }
}
