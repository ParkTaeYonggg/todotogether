package com.todotogether.domain.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class report extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rpId;

    @ManyToOne
    @JoinColumn(name = "rpUid",nullable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "rpUid",nullable = false)
    private long rpCid;

    @Column(nullable = false, length = 10)
    @ColumnDefault("false")
    private boolean rpStatus;

    @Column(nullable = false)
    private long rpTarget;
}
