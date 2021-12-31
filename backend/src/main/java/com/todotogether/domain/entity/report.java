package com.todotogether.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class report extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rpId;
    private long rpUid;
    private long rpCid;
    private boolean rpStatus;
    private long rpTarget;
}
