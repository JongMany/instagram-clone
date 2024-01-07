'use client'


import style from './header.module.css';
import {useState} from "react";
import CommonHeader from "@/app/(afterAuth)/_component/CommonHeader";
import SearchModeHeader from "@/app/(afterAuth)/_component/SearchModeHeader";
import SearchBox from "@/app/(afterAuth)/_component/SearchBox";

export default function Header() {
  const [searchMode, setSearchMode] = useState(false);
  console.log(searchMode)
  return (
      <div className={style.container}>
        {
              <CommonHeader searchMode={searchMode} setSearchMode={setSearchMode}/>
        }

        <SearchModeHeader searchMode={searchMode} setSearchMode={setSearchMode}/>

        <SearchBox searchMode={searchMode}/>
      </div>
  );
}
