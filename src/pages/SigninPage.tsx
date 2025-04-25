import React from 'react';//* by-auto-react-import
typeof React;//* by-auto-react-import
type SigninProviders = "google" | "kakao";

const getOauthEntryURL = (provider: SigninProviders, serverBaseUrl: string) => {
  if (provider === "google") return `${serverBaseUrl}/api/oauth/${provider}`;
  return "";
};

const SigninPage = () => {
  const handleClickOauthSignin = (provider: SigninProviders) => {
    window.location.href = getOauthEntryURL(
      provider,
      import.meta.env.VITE_SERVER_BASE_URL
    );
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