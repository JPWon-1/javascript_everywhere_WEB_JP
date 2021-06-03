import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import Button from '../components/Button';

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!){
        signUp(email: $email, username: $username, password: $password)
    }
`;

const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
`;

const Form = styled.form`
    label,
    input {
        display: block;
        line-height: 2em;
    }
    input {
        width: 100%;
        margin-bottom: 1em;
    }
`;

const SignUp = props => {
    //기본 양식 상태 설정
    const [values, setValues] = useState();
    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // JWT를 localStorage에 저장
            localStorage.setItem('token',data.signUp);
            // 로그인이 완료되면 홈페이지로 리디렉션
            props.history.push('/');
        }
    });

    useEffect(() => {
        // 문서 제목 업데이트
        document.title = `Sign Up - Notedly`;
    });

    return (
        <Wrapper>
            <h2>Sign Up</h2>
            <Form
                onSubmit={event => {
                    event.preventDefault();
                    signUp({
                        variables: {
                            ...values
                        }
                    });
                }}
            >
                <label htmlFor="username">Username:</label>
                <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={onChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Wrapper>
    );
};

export default SignUp;