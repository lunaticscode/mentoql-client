import { useEffect, useState } from "react";

const QUERIES = {
  MOBILE: "(max-width: 500px)",
  TABLET: "(min-width: 501px)  and (max-width: 1023px)",
  DESKTOP: "(min-width: 1024px)",
};
type Devices = keyof typeof QUERIES;

const useMediaQuery = (device: Devices) => {
  const query = QUERIES[device];

  const getMatches = () => {
    if (typeof window === undefined) false;
    return window.matchMedia(query).matches;
  };

  const [isMatch, setIsMatch] = useState<boolean>(getMatches());

  const handleResize = () => {
    const changedMatches = getMatches();
    setIsMatch(changedMatches);
  };

  useEffect(() => {
    if (typeof window === undefined) return;
    const matchMedia = window.matchMedia(query);
    matchMedia.addEventListener("change", handleResize);
    return () => {
      matchMedia.removeEventListener("change", handleResize);
    };
  }, []);

  return isMatch;
};
export default useMediaQuery;
