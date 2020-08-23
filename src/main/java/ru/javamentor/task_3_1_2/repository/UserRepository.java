package ru.javamentor.task_3_1_2.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import ru.javamentor.task_3_1_2.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
