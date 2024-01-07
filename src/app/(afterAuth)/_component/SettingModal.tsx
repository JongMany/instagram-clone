import React from 'react';

type Props = {
  onClose: () => void;
}
import style from './settingModal.module.css'

const SettingModal = ({onClose}: Props) => {
  return (
      <div onClick={onClose} className={style.container}>
        <div className={style.item}>
          로그아웃
        </div>
      </div>
  );
};

export default SettingModal;