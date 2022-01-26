package com.todotogether.domain.entity;


import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class MemberInfo extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mInfoId;

    @ManyToOne
    @JoinColumn(name = "mInfoUid", nullable = false)
    private Member member;

    @Column(nullable = false, length = 30)
    private String nickname;

    @Column(nullable = false, length = 20)
    private String name;

    @Column(nullable = false)
    @ColumnDefault("true")
    private boolean enabled;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, length = 40)
    private String backupEmail;

    @Column(nullable = false)
    @ColumnDefault("0")
    private int rpCount;

    @Column(length = 30)
    private String profile;

    //google,kakao,facebook 이 들어감
    private String provider;
    //sub의 정보
    private String providerId;

    @Builder
    public MemberInfo(String email, String password, String name, String provider, String providerId) {
        this.member.setEmail(email);
        this.member.setPassword(password);
        this.name = name;
        this.provider = provider;
        this.providerId = providerId;
    }
}
