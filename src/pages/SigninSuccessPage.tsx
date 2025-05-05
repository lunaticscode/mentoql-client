import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SigninSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { state: { fromSigninSuccess: true } });
  }, []);
  return null;
};
export default SigninSuccessPage;
