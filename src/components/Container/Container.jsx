import React from "react";

import Sidebar from "../Sidebar/Sidebar"
import Page from "../Page/Page"
import s from "./Container.module.scss";

const Container = () => {
    return (
        <div className={s.container}>
            <Sidebar/>
            <Page/>
            </div>
    )
}

export default Container