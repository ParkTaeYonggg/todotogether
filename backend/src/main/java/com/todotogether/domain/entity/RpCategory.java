package com.todotogether.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RpCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rpcId;
    private String rpcType;
}
