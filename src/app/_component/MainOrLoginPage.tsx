import React from 'react';
import MainPage from '../(afterAuth)/_component/MainPage';
import LoginPage from '../(beforeAuth)/_components/LoginPage';

type Props = {
  isLogin: boolean;
};

export default function MainOrLoginPage({ isLogin }: Props) {
  return (
    <div>
      {isLogin && <MainPage />}
      {!isLogin && <LoginPage />}
    </div>
  );
}
