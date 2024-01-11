'use client';
import React from 'react';
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import style from './settingModal.module.css'

type Props = {
  onClose: () => void;
}

const SettingModal = ({onClose}: Props) => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      const res = await signOut({redirect: false});
      router.replace('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
      <div onClick={onClose} className={style.container}>
        <div className={style.item} onClick={handleSignOut}>
          로그아웃
        </div>
      </div>
  );
};

export default SettingModal;