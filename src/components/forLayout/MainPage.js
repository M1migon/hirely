import React from "react";
import { Header } from "../forHeader/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../forFooter/Footer";

export function MainPageOut() {
    return <>
        <Header 
            HomePath = 'login'
            NetworkPath = 'login'
            VacanciesPath = 'login'
            MessagesPath = 'login'
            NotificationsPath = 'login'
            ProfilePath = 'login'
        />
        <Outlet/>
        <Footer/>
    </>
}

export function MainPageIn() {
    return <>
        <Header 
            HomePath = 'login'
            NetworkPath = 'login'
            VacanciesPath = 'login'
            MessagesPath = 'login'
            NotificationsPath = 'login'
            ProfilePath = 'profile'
        />
        <Outlet/>
        <Footer/>
    </>
}