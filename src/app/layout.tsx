'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Main from './Main';
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body className='bg-white overflow-auto'>
    <Main>
      <div className={'relative mt-[100px]'}>
        {children}
      </div>
      <div className=' w-full flex items-center  flex-col px-[10%] justify-center pt-[20vh]'>
      </div>
    </Main>
    </body>
    </html>
  );
}
