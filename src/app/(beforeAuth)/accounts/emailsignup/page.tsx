import React from 'react';
import style from '@/app/(beforeAuth)/accounts/emailsignup/signupPage.module.css'
import Link from "next/link";

export default function Page() {
  return <div className={style.window}>
    <div className={style.container}>
      <section className={style['signup-container']}>
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
          <div>
            친구들의 사진과 동영상을 보려면 가입하세요.
          </div>
        </div>
        <form>
          <div>
            <input className={style.input} type='text' name='id' placeholder='아이디'/>
          </div>
          <div>
            <input className={style.input} type='text' name='nickname' placeholder='닉네임'/>
          </div>
          <div>
            <input className={style.input} type='text' name='username' placeholder='사용자 이름'/>
          </div>
          <div>
            <input className={style.input} type='password' name='password' placeholder='비밀번호'/>
          </div>
          <div>
            <button className={style.button} type='submit'>가입</button>
          </div>
        </form>
      </section>
      <section className={style['login-container']}>
        <p>계정이 있으신가요?</p>
        <Link href='/'>가입하기</Link>
      </section>
    </div>
  </div>;
}
