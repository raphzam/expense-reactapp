package com.example.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "category")
public class Category {
    @Id
    private Long id;
    private String name;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;
}
