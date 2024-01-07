'use client'
import React from 'react';
import {faker} from "@faker-js/faker";
import style from './userItem.module.css'
import Image from "next/image";
import Link from "next/link";

// const user = {
//   image: faker.image.avatar(),
//   id: 'zero1s1',
//   nickname: faker.person.firstName(),
//   profile: faker.person.jobType(),
//   following: Math.random() <= 0.5,
// };

const UserItem = () => {
  const user = {
    image: faker.image.avatar(),
    id: 'zero1s1',
    nickname: faker.person.firstName(),
    profile: faker.person.jobType(),
    following: Math.random() <= 0.5,
  };

  return (
      <Link href=''>
        <section className={style.container}>
          <div className={style['image-container']}>
            <span className={style['image-background']}>
              <img src={user.image} alt={user.nickname}/>
            </span>
          </div>
          <div className={style['info-container']}>
            <div className={style.id}>
              <span>{user.id}</span>
            </div>
            <div className={style.meta}>
              <span>{user.nickname}</span>
              <span>{user.following && '﹒ 팔로잉'}</span>
            </div>
          </div>
          <div className={style.delete}>
            <span>
              Ⅹ
            </span>
          </div>
        </section>
      </Link>
  );
};

export default UserItem;