package com.example.expense.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "expense")
public class Expense {
    @Id
    private Long id;
    private Instant expenseDate;
    private String description;

    @ManyToOne //SQL Join
    private Category category;

    @ManyToOne //right side goes to variable, left side goes to class name
    private User user;


//    ID(PK) Date       Description User ID, Category ID
//    1000  6/16/2019,  Visting NY,   1,        10

}
