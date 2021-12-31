package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

@Configuration
@PropertySources({
        @PropertySource("classpath:application-real.properties"),
        @PropertySource("classpath:application-real-db.properties")
})
public class PropertiesWithJavaConfig {

}
