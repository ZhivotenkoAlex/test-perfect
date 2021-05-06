import React, { useState } from "react";

import s from "./Header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
      <div className={ s.container}>
      <div className={s.wraper}>
              <header className={s.headerContainer }>
          <nav className={s.navContainer} >
            <div className={s.accountName_wraper} onClick={() => setIsActive(!isActive)}>
              <p className={s.accountName} >Kira Huston</p>{" "}
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isActive ? `${s.accountName_flag} ${s.accountName_active}` : `${s.accountName_flag}`}
            >
              <path d="M0 0L5 5L10 0H0Z" fill="white" />
            </svg>
            </div>
          </nav>
          <div className={isActive ? `${s.dropList} ${s.dropList_active}` : `${s.dropList}`}>
            <p className={s.dropList_item}>Profile</p>
            <p className={s.dropList_item}>Sign out</p>
          </div>
        </header>
      </div>

     
    </div>
  );
};

export default Header;