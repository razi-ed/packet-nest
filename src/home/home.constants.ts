import { HomeOutlined } from "@ant-design/icons";

export const moduleName = "home";

const linkLabel = "Home";
const routePath = `/${moduleName}`;
const path = `/${moduleName}`;
const linkKey = `${moduleName}`;

export const HomeNavObject = {
  path,
  routePath,
  linkLabel,
  linkKey,
  linkIcon: HomeOutlined,
};

export const HeroContent = {
  ctaLabel: "Start Exploring Now",
  title: "Discover the Packages for the web, with PackageNest",
  subTitle:
    "Whether you're building a simple website or a complex web application, PackageNest offers you a vast library of high-quality front-end packages to supercharge your development. With our intuitive search and easy installation process, finding and integrating the right tools into your project has never been easier.",
};

export const FeaturesContent = [
  {
    key: "unmatched_variety",
    title: "Unmatched Variety",
    subTitle:
      "Explore a diverse collection of packages, from the most popular frameworks and libraries to niche tools that can make your project unique. With over 10,000 packages available, you're sure to find exactly what you need, whether it's a JavaScript library, a CSS framework, or a set of icons.",
  },
  {
    key: "effortless_management",
    title: "Effortless Management",
    subTitle:
      "Managing dependencies can be a hassle, but not with PackageNest. Our platform simplifies the process with automatic updates, easy version control, and clear documentation, allowing you to focus on what you do best—building great software.",
  },
  {
    key: "trusted_by_millions",
    title: "Trusted by Millions",
    subTitle:
      "Join a growing community of developers who rely on PackageNest to deliver robust, scalable, and maintainable web projects. With over 5 million visits and counting, PackageNest is the trusted choice for developers around the world.",
  },
];

export default HomeNavObject;
