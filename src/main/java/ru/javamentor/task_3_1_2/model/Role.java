package ru.javamentor.task_3_1_2.model;

import org.springframework.security.core.GrantedAuthority;


public enum Role implements GrantedAuthority {

    ADMIN,
    USER;

    @Override
    public String getAuthority() {
        return name();
    }
}
