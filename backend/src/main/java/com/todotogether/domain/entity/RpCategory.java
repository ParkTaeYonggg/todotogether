package com.todotogether.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class RpCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rpcId;

    @Column(nullable = false, length = 10)
    private String rpcType;
}
