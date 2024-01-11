'use client'
import React, {useRef, useState} from 'react';
import style from './SearchBox.module.css'
import UserItem from "@/app/(afterAuth)/_component/UserItem";

type Props = {
  searchMode: boolean
}

const SearchBox = ({searchMode}: Props) => {
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInputHandler = () => {
    inputRef.current && inputRef.current.focus();
    setFocus(true);
  }

  return (
      <div className={`${style.container} ${searchMode && style.show}`}>
        <div>
          <section className={style['head-section']}>
            <span className={style.head}>검색</span>
          </section>
          <section className={style['query-section']}>
            <div className={style['input-section']}>
              {searchMode && <input className={style.input} autoFocus={focus} ref={inputRef}/>}
              {!query.length && <div className={`${style.placeholder}`}>
                {/* 텍스트 없는 경우: 포커싱 되어있는지*/}
                {!focus && <div className={`${style['nofocus']} ${style.textbox}`} onClickCapture={focusInputHandler}>
                  <div>
                    <svg aria-label="검색" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16"
                         role="img"
                         viewBox="0 0 24 24" width="16"><title>검색</title>
                      <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                      <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
                    </svg>
                  </div>
                  <span>검색</span>
                </div>}
                {focus && <div className={`${style['focus']} ${style.textbox}`}>
                  <span onClickCapture={focusInputHandler}>검색</span>
                  <div onClick={() => setFocus(false)}>🅧</div>
                </div>}

              </div>}
            </div>
            <hr className={style.line}/>
            <section className={`${style['result-container']}`}>
              <div>
                <div className={style['result-head']}>
                  <span>최근 검색 항목</span>
                  <span>모두 지우기</span>
                </div>
                <div className={style['query-results']}>
                  {/*<div>*/}
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
  );
};

export default SearchBox;