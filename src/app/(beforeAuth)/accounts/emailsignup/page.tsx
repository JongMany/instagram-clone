'use client';
import React, {FormEventHandler} from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useForm} from "@/app/_hooks/useForm";
import style from '@/app/(beforeAuth)/accounts/emailsignup/signupPage.module.css'
import {signIn} from "next-auth/react";

const initialForm = {
  id: '',
  nickname: '',
  name: '',
  password: '',
}

export default function Page() {
  const {form, onChangeForm} = useForm(initialForm);
  const router = useRouter();

  const handleSignup: FormEventHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('id', form.id);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
        method: 'POST',
        body: formData,
      });
      console.log(response)
      if (response.ok && response.status === 200) {
        const loginRes = await signIn('credentials', {
          id: form.id,
          password: form.password,
          redirect: false,
        })
        if (loginRes?.error) {

        } else {
          router.replace('/');
        }
      }

    } catch (err) {
      console.error(`signup page - ${err}`);
    }
  }

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
        <form method='post' onSubmit={handleSignup}>
          <div>
            <input className={style.input} type='text' name='id' placeholder='아이디' onChange={onChangeForm}
                   value={form.id}/>
          </div>
          <div>
            <input className={style.input} type='text' name='nickname' placeholder='닉네임' onChange={onChangeForm}
                   value={form.nickname}/>
          </div>
          <div>
            <input className={style.input} type='text' name='name' placeholder='사용자 이름' onChange={onChangeForm}
                   value={form.name}/>
          </div>
          <div>
            <input className={style.input} type='password' name='password' placeholder='비밀번호' onChange={onChangeForm}
                   value={form.password}/>
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
