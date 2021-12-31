package com.todotogether.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Member extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uId;
    private String password;
    private String name;
    private String nickname;
    private boolean enabled;
    private int phone;
    private String backupEmail;
    private int rpCount;
    private String profile;

}
