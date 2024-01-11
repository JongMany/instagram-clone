'use client'
import React, {useEffect} from 'react';
import {useSession} from "next-auth/react";
import LoginPage from "@/app/(beforeAuth)/_components/LoginPage";
import MainPage from "@/app/(afterAuth)/_component/MainPage";
import style from "@/app/mainpage.module.css";
import Header from "@/app/(afterAuth)/_component/Header";

const DecisionLogin = () => {
  const {data} = useSession();
  const loginState = !!data?.user?.email;

  console.log(data?.user, !!data?.user?.email)

  useEffect(() => {

  }, [loginState])

  return (
      <>
        <main className={`${style.container} ${loginState ? style.login : style['non-login']} `}>
          {loginState && <Header/>}
          <div className={style['main-section']}>
            {!loginState && <LoginPage/>}
            {loginState && <MainPage/>}
          </div>
        </main>

      </>
  );
};

export default DecisionLogin;