import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import seoData from "../../consts/seo";

const DEFAULT_SEO_DATA = {
  title: "MentoQL",
  description: "MentoQL description",
  keywords: "mentoql",
};
const SEO = () => {
  const location = useLocation();
  const { title, description, keywords } = useMemo(
    () => seoData[location.pathname] ?? DEFAULT_SEO_DATA,
    [location.pathname]
  );
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </>
  );
};
export default SEO;