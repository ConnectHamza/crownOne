import Feature1 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG1.webp';
import Feature2 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG2.webp';
import Feature3 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG3.webp';
import Feature4 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG4.webp';
import Feature5 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG5.webp';
import Feature6 from '../../../public/Assets/home/FeaturesIMG/FeatureIMG6.webp';


import { StaticImageData } from 'next/image';

export interface Feature {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  aosText: string | any;
  aosImage: string | any;
  position: string | any;
  order: string | any;
}

export const features: Feature[] = [
  {
    title: "Transfers & Top-Ups",
    description: "Easily send funds or recharge your mobile, ensuring a smooth and hassle-free experience for everyday needs.",
    image: Feature1,
    imageAlt: "Feature1",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "bottom-0 md:left-0", 
    order: "justify-end",
  },
  {
    title: "Cash Wallet",
    description: "Securely track and manage your points, ensuring they remain safe and accessible whenever you need them.",
    image: Feature2,
    imageAlt: "Feature1C",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "top-0 right-0", 
    order: "",
  },
  {
    title: "Inaam Bazaar for Mechanics",
    description: "Unlock daily rewards with QR scans, spin the wheel for exciting prizes, and enjoy exclusive item schemes and offers.",
    image: Feature3,
    imageAlt: "Feature2P",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "bottom-0 left-0", 
    order: "justify-end",
  },
  {
    title: "Shop Branding",
    description: "Create professional branding for your shop to attract customers and elevate your business within your community.",
    image: Feature4,
    imageAlt: "Feature2C",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "top-0 right-0", 
    order: "",
  },
  {
    title: "Explore Our Catalog",
    description: "Browse the complete range of Crown products in one place. Discover, compare, add to cart, and proceed to order effortlessly.",
    image: Feature5,
    imageAlt: "Feature3P",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "bottom-0 left-0", 
    order: "justify-end",
  },
  {
    title: "One Shop",
    description: "A B2B platform connecting retailers and mechanics with a wide range of authentic automotive parts from Crown, a leading two-wheeler manufacturer.",
    image: Feature6,
    imageAlt: "Feature3C",
    aosText: "fade-up",
    aosImage: "fade-up",
    position: "top-0 right-0", 
    order: "",
  },


  
 
];  


export const faqsData = [
  {
      question: "What is the Crown One app?",
      answer: "Crown One is a B2B app that provides a convenient and efficient way for retailers and mechanics to buy and sell automotive parts from Crown, a leading two and three-wheeler automotive parts manufacturer. The app features a user-friendly interface that makes it easy to find the parts you need, and you can even place orders directly from your phone or tablet."
  },
  {
      question: "How do I earn and use points in the Cash Wallet?",
      answer: "+Crown One offers a variety of interactive incentive programs that can help you earn more money. You can earn points for completing certain tasks, such as completing a certain number of repairs or selling a certain number of parts. You can then redeem these points for prizes, such as gift cards, tools, or even vacations."
  },
  {
      question: "What is AutoBazaar?",
      answer: "The Auto Bazaar module enables users to manage orders, payments, and view detailed transaction histories. It includes dynamic features that update based on user selections, providing a comprehensive and efficient experience."
  },
  {
      question: "How does QR Scan Authenticity work?",
      answer: "Ensuring QR Scan Authenticity is vital to prevent fraudulent activities, protect the integrity of the rewards system, and maintain trust among users. This feature will authenticate scanned QR codes to confirm that they belong to Crown Group products and have not been tampered with or reused."
  },
  {
      question: "What is the Inaam Bazaar for Mechanics?",
      answer: "The Inaam Bazaar is designed as a gamified reward and engagement system for users, allowing them to scan Crown Group products, participate in interactive schemes, and redeem rewards. It integrates multiple features to drive user participation, reward loyalty, and offer real-time insights into user behavior."
  },
];