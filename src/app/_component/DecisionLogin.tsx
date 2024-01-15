'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import LoginPage from '@/app/(beforeAuth)/_components/LoginPage';
import MainPage from '@/app/(afterAuth)/_component/MainPage';
import style from '@/app/mainpage.module.css';
import Header from '@/app/(afterAuth)/_component/Header';
import { Session } from 'next-auth';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const DecisionLogin = ({ children, session }: Props) => {
  const { data } = useSession();
  // const loginState = !!data?.user?.email;
  const loginState = !!session?.user?.email;

  console.log(loginState);
  // useEffect(() => {}, [loginState]);

  return (
    <>
      <main
        className={`${style.container} ${
          loginState ? style.login : style['non-login']
        } `}
      >
        {loginState && <Header />}
        <div className={style['main-section']}>{children}</div>
      </main>
    </>
  );
};

export default DecisionLogin;
