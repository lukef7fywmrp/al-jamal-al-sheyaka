"use client";

import { Menu } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavbarProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function MobileNavbar({ children, isOpen, setIsOpen }: MobileNavbarProps) {
  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;

    const closeOnResize = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeOnResize);
    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("orientationchange", closeOnResize);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && event.target instanceof Element) {
        const mobileMenu = document.querySelector("[data-mobile-menu]");
        if (mobileMenu && !mobileMenu.contains(event.target)) {
          setIsOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative md:hidden rounded-full p-2 hover:bg-black/5 transition-colors"
      >
        <Menu className="size-6 text-primary/80 hover:text-primary transition-colors" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-[100dvh] w-[80%] max-w-[400px] md:hidden"
              data-mobile-menu
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white">
                <div className="flex-1 px-6 py-20">{children}</div>
                <div className="h-24 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
