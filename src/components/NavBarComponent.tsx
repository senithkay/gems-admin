'use client';
import { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./navbar-component";
import Button from "@mui/material/Button";
import {cn} from "@/utils/functions";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export function NavbarComponent({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const router = useRouter()
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className,
        " shadow-2xl shadow-blue-300 flex justify-around h-[50px] items-center rounded-full top-5 bg-white"
      )}
    >
      <Link href={'/'}>
        <h1 className=' z-[51] text-blue-600 relative font-extrabold text-lg'>
          Your logo
        </h1>
      </Link>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item='Templates'>
          <div className='  text-sm grid grid-cols-2 gap-10 p-4'>
            <ProductItem
              title='MCQ Papers'
              href='https://algochurn.com'
              src='/images/exam_paper.jpg'
              description='Paper templates for MCQ type papers.'
            />
            <ProductItem
              title='Essay Papers'
              href='https://tailwindmasterkit.com'
              src='/images/exam_paper.jpg'
              description='Paper templates for essay type papers.'
            />
            <ProductItem
              title='Structured Essay Papers'
              href='https://gomoonbeam.com'
              src='/images/exam_paper.jpg'
              description='Paper templates for structured essay type papers.'
            />
            <ProductItem
              title='Full Papers'
              href='https://userogue.com'
              src='/images/exam_paper.jpg'
              description='Paper templates for papers with a combination of MCQ, Structured, and Essay type papers.'
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Library'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/web-dev'>Your Templates</HoveredLink>
            <HoveredLink href='/interface-design'>Your Papers</HoveredLink>
            <HoveredLink href='/interface-design'>Saved Templates</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='Company'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>About</HoveredLink>
            <HoveredLink href='/individual'>Contact US</HoveredLink>
            <HoveredLink href='/individual'>Join US</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item='FAQ'>
          <div className='flex flex-col space-y-4 text-sm'>
            <HoveredLink href='/hobby'>About Templates</HoveredLink>
            <HoveredLink href='/individual'>About Pricing</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      <div>
        <Button
            className='bg-white hover:bg-slate-200 text-black mx-3'
            variant='contained'
            onClick={()=>{
              router.push('/auth/signin')
            }}
        >
          login
        </Button>
        <Button className='bg-blue-600' variant='contained' onClick={()=>{
          router.push('/auth/signup')
        }}>
          Sign up
        </Button>
      </div>
    </div>
  );
}
