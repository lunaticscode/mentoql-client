import { SERVER_BASE_URL } from "@consts/index";

type SigninProviders = "google" | "kakao";
const SigninPage = () => {
  const handleClickOauthSignin = (provider: SigninProviders) => {
    window.location.href = `${SERVER_BASE_URL}/api/oauth/${provider}`;
  };
  return (
    <>
      <h2>Signin Page</h2>
      <button onClick={() => handleClickOauthSignin("google")}>
        Google Signin
      </button>
    </>
  );
};
export default SigninPage;
