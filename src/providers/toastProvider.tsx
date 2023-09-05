"use client";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
} 