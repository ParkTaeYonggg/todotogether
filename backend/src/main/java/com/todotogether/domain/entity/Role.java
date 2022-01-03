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
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rId;

    @Column(nullable = false, length = 20)
    private String rName;

    @ManyToMany(mappedBy = "roles")
    private List<Member> members;
}
