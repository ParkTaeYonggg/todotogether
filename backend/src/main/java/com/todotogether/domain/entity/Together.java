package com.todotogether.domain.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class Together extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tgId;
    private long tgUid;
    private long tgcId;
    private String tgSubject;
    private String tgContent;
    private boolean tgStatus;
}
