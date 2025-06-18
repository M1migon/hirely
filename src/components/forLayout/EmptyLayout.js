import React from "react";
import { Header } from "../forHeader/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../forFooter/Footer";

export function EmptyLayout() {
    return <>
        <Outlet/>
    </>
}