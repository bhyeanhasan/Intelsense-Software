import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, socialimage }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Description of your image" />
      <meta
      property="og:image"
      itemprop="image"
      content="%PUBLIC_URL%/brand.jpg"
    />
    <meta
      property="og:image:secure_url"
      itemprop="image"
      content="%PUBLIC_URL%/brand.jpg"
    />
    {/* <!-- twitter sharing --> */}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={title} />
    <meta
      name="twitter:description"
      content="The Next Generation Language Processing & Voice AI Solutions"
    />
    <meta
      property="twitter:image"
      content="%PUBLIC_URL%/brand.jpg"
    />
    </Helmet>
  );
};

export default Meta;
