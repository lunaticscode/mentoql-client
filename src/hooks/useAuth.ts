import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [profile, _setProfile] = useState<any>({});
  const test = async () => {
    // await _sleep();
    setIsAuth(true);
    setIsLoading(false);
  };
  useEffect(() => {
    test();
  }, []);
  return {
    isLoading,
    isAuth,
    profile,
  };
};
export default useAuth;
