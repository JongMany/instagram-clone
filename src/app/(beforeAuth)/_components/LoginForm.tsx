"use client";
import React, { FormEventHandler } from "react";
import style from "@/app/(beforeAuth)/_components/loginPage.module.css";
import { useForm } from "@/app/_hooks/useForm";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const initialForm = { id: "", password: "" };
const LoginForm = () => {
  const { form, onChangeForm, resetForm } = useForm(initialForm);
  const router = useRouter();
  console.log(form);

  const handleLogin: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        id: form.id,
        password: form.password,
        redirect: false,
      });

      if (response?.error) {
        console.log("2", response);
      } else {
        router.replace("/");
        router.refresh();
      }

      resetForm();
    } catch (err) {
      console.error("로그인 에러", err);
    }
  };
  return (
    <form method="post" onSubmit={handleLogin}>
      <div>
        <input
          className={style.input}
          type="text"
          name="id"
          placeholder="아이디"
          onChange={onChangeForm}
        />
      </div>
      <div>
        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeForm}
        />
      </div>
      <div>
        <button className={style.button} type="submit">
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
