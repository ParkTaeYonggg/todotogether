package com.todotogether.service;

import com.todotogether.domain.entity.Member;
import com.todotogether.domain.entity.Role;
import com.todotogether.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.*;

@Transactional
@Slf4j
public class MemberService implements UserDetailsService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    //유효성 검사
    public void validateMember(Member member){
        Boolean findEmail = memberRepository.existsByEmail(member.getEmail());
        Boolean findNickname = memberRepository.existsByNickname(member.getNickname());
        if(findEmail){
            throw new IllegalStateException("이미 등록된 이메일 입니다.");
        }else if(findNickname){
            throw new IllegalStateException("이미 등록된 닉네임 입니다.");
        }
    }

    public long signUp(Member member, PasswordEncoder passwordEncoder){
        String encodePassword = passwordEncoder.encode(member.getPassword()); //암호화
        member.setPassword(encodePassword);

        member.setEnabled(true);
        Role role = new Role();
        role.setRId(1l);
        member.getRoles().add(role);

        Member save = memberRepository.save(member);

        return save.getUId();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Member member = memberRepository.findByEmail(email);

        if(member == null) {
            log.error("email이 일치하는 member가 DB에 존재하지 않습니다.");
            throw new UsernameNotFoundException("email이 일치하는 member가 DB에 존재하지 않습니다.");
        } else {
            log.info("DB에서 조회된 member email : {}", email);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        member.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getRName()));
        });

        return new org.springframework.security.core.userdetails.User(member.getEmail(), member.getPassword(), authorities);
    }

    //추가 내용 -----
    public Map<String, String> validateHandling(Errors errors) {
        Map<String, String> validatorResult = new HashMap<>();

        for (FieldError error : errors.getFieldErrors()) {
            String validKeyName = String.format("valid_%s", error.getField());
            validatorResult.put(validKeyName, error.getDefaultMessage());
        }
        return validatorResult;
    }

    // -----------

    public Member getMember(String email) {
        log.info("Fetching User : {}", email);
        return memberRepository.findByEmail(email);
    }
}
