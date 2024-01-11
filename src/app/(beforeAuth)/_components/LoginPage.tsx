import Link from 'next/link';
import React from 'react';

import style from './loginPage.module.css';
import LoginForm from "@/app/(beforeAuth)/_components/LoginForm";


export default function LoginPage() {


  return (
      <div className={style.window}>
        <div className={style.container}>
          <section className={style['login-container']}>
            <div className={style.logo}>
              <i
                  data-visualcompletion='css-img'
                  aria-label='Instagram'
                  role='img'
                  style={{
                    backgroundImage: `url("https://static.cdninstagram.com/rsrc.php/v3/yh/r/IS7e616CiR2.png")`,
                    backgroundPosition: '0px 0px;',
                    backgroundSize: '176px 258px',
                    width: '175px',
                    height: '51px',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',
                    color: 'white',
                  }}
              ></i>
            </div>
            <LoginForm/>
          </section>
          <section className={style['signup-container']}>
            <p>계정이 없으신가요?</p>
            <Link href='/accounts/emailsignup'>가입하기</Link>
          </section>
        </div>
      </div>
  );
}
