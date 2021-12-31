package com.todotogether.domain.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
@Getter
public class Participate extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pId;
    private long pTgid;
    private long pUid;
    private String pStartDate;
    private String pEndDate;
    private boolean pStatus;
}
