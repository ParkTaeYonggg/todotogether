package com.todotogether.domain.entity;

import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
public class Comment extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cId;
    private long cUid;
    private long cTgid;
    private String cContent;
    private long cLev;
    private long cSeq;
    private boolean cStatus;
}
