package com.todotogether.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class TgCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tgcId;

    @Column(nullable = false, length = 10)
    private String tgcType;

    @OneToMany(mappedBy = "tgCategory")
    private List<Together> togethers;
}
