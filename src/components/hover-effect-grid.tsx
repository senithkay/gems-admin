import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {cn} from "@/utils/functions";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className='relative group  block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full  bg-blue-600 block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription>{item.description}</CardDescription>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-500 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div className='mt-[20px] w-[50%] flex justify-around'>
      <button className=' w-[40%]  border-solid border-blue-600 border-2 rounded-full text-blue-600'>
        View
      </button>
      <button
        className=' w-[40%] bg-blue-600 rounded-full'
        onClick={() => {
          router.push("/templates/template1");
        }}
      >
        Use
      </button>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className,
        "flex justify-center items-center w-[100%] h-[60%]"
      )}
    >
      <Image
        src={"/images/exam_paper.jpg"}
        width={250}
        height={70}
        alt={"Paper preview"}
        className='flex-shrink-0 rounded-md shadow-2xl'
      />
    </div>
  );
};
