import Link from 'next/link';
import React from 'react';

import style from './loginPage.module.css';

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
            <form method='post'>
              <div>
                <input className={style.input} type='text' name='id' placeholder='아이디'/>
              </div>
              <div>
                <input className={style.input} type='password' name='password' placeholder='비밀번호'/>
              </div>
              <div>
                <button className={style.button} type='submit'>로그인</button>
              </div>
            </form>
          </section>
          <section className={style['signup-container']}>
            <p>계정이 없으신가요?</p>
            <Link href='/accounts/emailsignup'>가입하기</Link>
          </section>
        </div>
      </div>
  );
}
