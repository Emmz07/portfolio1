import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const sharedClasses = {
  textColor: 'text-zinc-500 dark:text-zinc-400',
  hoverTextColor: 'hover:text-zinc-700 dark:hover:text-zinc-200',
  widthCls: 'w-8',
  heightCls: 'h-8'
};

const SocialLink = ({ href, alt, iconSrc }) => (
  <a href={href} className={`${sharedClasses.textColor} ${sharedClasses.hoverTextColor}`}>
    <img src={iconSrc} alt={alt} className="w-6 h-6" />
  </a>
);

const ContactCard = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
    <div className="relative w-full h-24 bg-white dark:bg-zinc-900">
      <div className="absolute inset-x-0 top-0 h-24 bg-orange-500 transform rotate-6"></div>
      <div className="absolute inset-x-0 top-0 h-24 bg-white dark:bg-zinc-900 transform -rotate-6"></div>
    </div>
    <div className="relative -mt-12 bg-white dark:bg-zinc-900 rounded-full p-2">
      <img src="https://placehold.co/100x100" alt="Interior Designer" className="rounded-full w-29 h-29" />
    </div>
    <div className="text-center mt-6">
      <p className={`text-lg ${sharedClasses.textColor} mt-4`}>FOLLOW ME ON</p>
      <div className="flex justify-center space-x-4 mt-2">
        <FaLinkedin width={sharedClasses.widthCls} height={sharedClasses.heightCls} href='#' />
        <FaInstagram width={sharedClasses.widthCls} height={sharedClasses.heightCls} href='#'/>
        <FaTwitter width={sharedClasses.widthCls} height={sharedClasses.heightCls} href='#'/>
        <SiGmail width={sharedClasses.widthCls} height={sharedClasses.heightCls} href='#'/>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return <ContactCard />;
};

export default Footer;
