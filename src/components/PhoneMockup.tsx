import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface PhoneMockupProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  darkMode?: boolean;
}

export default function PhoneMockup({ children, className, darkMode, ...props }: PhoneMockupProps) {
  return (
    <motion.div 
      className={twMerge(
        "relative mx-auto w-full max-w-sm rounded-[3rem] border-[10px] sm:border-[14px] bg-white shadow-2xl overflow-hidden",
        darkMode 
          ? "border-neutral-900 bg-[#1A1917] shadow-black/50" 
          : "border-neutral-800 bg-white shadow-black/20",
        className
      )}
      {...props}
    >
      {/* Notch / Dynamic Island */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30 pointer-events-none">
        <div className={twMerge("w-1/3 h-full rounded-b-3xl", darkMode ? "bg-neutral-900" : "bg-neutral-800")}></div>
      </div>
      
      {/* Power Button */}
      <div className={twMerge("absolute right-[-14px] top-24 w-[4px] h-16 rounded-l-md pointer-events-none", darkMode ? "bg-neutral-900" : "bg-neutral-800")}></div>
      
      {/* Volume Buttons */}
      <div className={twMerge("absolute left-[-14px] top-20 w-[4px] h-12 rounded-r-md pointer-events-none", darkMode ? "bg-neutral-900" : "bg-neutral-800")}></div>
      <div className={twMerge("absolute left-[-14px] top-36 w-[4px] h-12 rounded-r-md pointer-events-none", darkMode ? "bg-neutral-900" : "bg-neutral-800")}></div>
      
      {/* Screen Content */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] z-10">
        {children}
      </div>
      
      {/* Glossy reflection overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/20 dark:from-white/0 dark:via-white/0 dark:to-white/10 rounded-[2.2rem]"></div>
    </motion.div>
  );
}
