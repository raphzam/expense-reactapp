package com.example.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    private Long id;
    private String name;
    private String email;

    @OneToMany
    private Set<Category> categories;
}
