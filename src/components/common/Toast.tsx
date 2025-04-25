import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { createRoot, Root } from "react-dom/client";

interface ToastProps extends PropsWithChildren {
  duration?: number;
  unmount: () => void;
}

const Toast: FC<ToastProps> = (props) => {
  const { children, duration = 3000, unmount } = props;
  const timer = useRef<NodeJS.Timeout>(null);

  const cleanupTimeout = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const onMount = () => {
    timer.current = setTimeout(() => {
      cleanupTimeout();
      unmount();
    }, duration);
  };

  useEffect(() => {
    onMount();
    return () => {
      cleanupTimeout();
    };
  }, []);
  return <div className={"toast-wrapper"}>{children}</div>;
};

const Toaster = () => {
  return <div id={"app-toaster"} />;
};

const useToast = () => {
  const toaster = useRef<Root>(null);

  const unmount = () => {
    toaster.current?.unmount();
  };
  const toast = (message: string) => {
    if (toaster.current) {
      toaster.current.unmount();
    }
    toaster.current = createRoot(
      document.getElementById("app-toaster") as Element
    );
    toaster.current.render(<Toast unmount={unmount}>{message}</Toast>);
  };

  return toast;
};

export { Toaster, useToast };