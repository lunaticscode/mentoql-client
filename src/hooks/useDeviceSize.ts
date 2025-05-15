import { useMemo } from "react";
import useMediaQuery from "./internal/useMediaQuery";
import useDebounce from "./useDebounce";
type UseDeviceSizeReturn = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
};

const useDeviceSize = (): UseDeviceSizeReturn => {
  const isMobile = useMediaQuery("MOBILE");
  const isTablet = useMediaQuery("TABLET");
  const isDesktop = useMediaQuery("DESKTOP");

  const [mobile, tablet, desktop] = [isMobile, isTablet, isDesktop];

  return {
    mobile,
    tablet,
    desktop,
  };
};
export default useDeviceSize;
