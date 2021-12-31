package com.todotogether.domain.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ntId;
    private long ntUid;
    private String ntContent;
    private boolean ntStatus;
    private byte ntType;
}
