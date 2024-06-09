'use client';
import React from "react";
import SimpleSnackbar from "@/components/MIUI/snackbar";
import {Provider} from "react-redux";
import store from "@/redux/store";

export default function Main({
                              children,
                          }: Readonly<{
    children: React.ReactNode;
}>){
    return <main>
       <Provider store={store}>
           {children}
           <SimpleSnackbar></SimpleSnackbar>
       </Provider>
    </main>
}