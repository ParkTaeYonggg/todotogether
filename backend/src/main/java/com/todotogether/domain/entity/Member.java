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
public class Member{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uId;

    @Column(nullable = false, length = 40)
    private String email;

    @Column(nullable = false, length = 70)
    private String password;

    @ManyToMany
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name="role_id")
    )
    private List<Role> roles = new ArrayList<>();

    @OneToMany(mappedBy = "nMember", cascade = CascadeType.REMOVE)
    private List<Notification> notifications;
}
