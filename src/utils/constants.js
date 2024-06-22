import { FaShippingFast, FaTools } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";

export const navLinks = [
  { id: 1, label: "home", url: "/" },
  { id: 2, label: "about", url: "/about" },
  { id: 3, label: "products", url: "/products" },
];

export const sidebarLinks = [...navLinks];

export const services = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: "fast shipping",
    description:
      "Enjoy expedited shipping options to receive your gadgets quickly and conveniently.",
  },
  {
    id: 2,
    icon: <BiSupport />,
    title: "24/7 support",
    description:
      "Get assistance whenever you need it, day or night, ensuring a smooth and hassle-free experience.",
  },
  {
    id: 3,
    icon: <FaTools />,
    title: "2-year free repairs",
    description:
      "Enjoy worry-free ownership! If anything goes wrong with your gadget within two years, we'll fix it for free.",
  },
];

export const companyLogos = [
  { id: 1, source: company1 },
  { id: 2, source: company2 },
  { id: 3, source: company3 },
  { id: 4, source: company4 },
  { id: 5, source: company5 },
  { id: 6, source: company6 },
  { id: 7, source: company7 },
  { id: 8, source: company8 },
];

export const checkoutSteps = [
  { id: 1, label: "shipping info" },
  { id: 2, label: "order summary" },
  { id: 3, label: "confirm order" },
];

export const footerLinks = [...navLinks];

export const footerIcons = [
  { id: 1, url: "https://twitter.com", icon: <AiFillTwitterCircle /> },
  { id: 2, url: "https://www.instagram.com", icon: <AiOutlineInstagram /> },
  { id: 3, url: "https://www.youtube.com", icon: <AiFillYoutube /> },
];

export const productsURL = "https://api.pujakaitem.com/api/products";

export const singleProductURL = "https://api.pujakaitem.com/api/products";
