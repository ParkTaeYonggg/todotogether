package com.todotogether.domain.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long aInfoId;

    @ManyToOne
    @JoinColumn(name = "aUid", nullable = false)
    private Member member;

    @Column(nullable = false, length = 70)
    private String aEmail;
}
