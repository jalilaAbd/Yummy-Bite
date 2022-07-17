import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Yummy Bite`,
    siteUrl: `https://www.yourdomain.tld`,
    description: ` For our desserts we always use only the natural ingredients!`,
    author: `Jalila Abdessamad`,
    keywords: `yummy bite, dessert, ingredients, handmade`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Montez", "Gochi Hand"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};

export default config;
