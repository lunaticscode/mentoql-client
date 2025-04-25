import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
import { ComponentType, PropsWithChildren, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type UserProfile = any;
interface WithAuthHocProps {
  profile?: UserProfile | null;
}

type AuthPermissions = "admin" | "user";

const WithAuth = <
  P extends PropsWithChildren
  //   & { profile?: UserProfile | null }
>(
  WrappedComponent: ComponentType<P>,
  _permission: AuthPermissions = "user"
) => {
  const Component = ({ ...props }: WithAuthHocProps) => {
    const { isLoading, isAuth, profile } = useAuth();
    const isMounted = useRef<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
      isMounted.current = true;
    }, []);

    if (isLoading) return <h1>LOADING...</h1>;
    if (isLoading && !isMounted.current) return <></>;
    if (!isLoading && isMounted.current && !isAuth) {
      alert("인증 오류!");
      navigate("/signin", { replace: true });
    }

    return (
      <WrappedComponent
        {...({ ...props, profile } as P & (UserProfile | null))}
      />
    );
  };
  return Component;
};

export default WithAuth;