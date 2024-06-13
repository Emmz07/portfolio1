import React from 'react';
import CohesiveLookComponent from './hero2';
import ServicesComponent from './hero3';
import ExperienceSection from './hero4';
import ContactForm from './hero6';


const profileImageClass = "rounded-full border-4 border-white shadow-lg";
const badgeClass = "absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold rounded-full px-3 py-1 shadow-md";

const ProfileCard = () => {
  return (
    <>
    <div className="relative flex items-center justify-center h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="relative">
        <img className={profileImageClass} src="https://placehold.co/300x300" alt="Profile Image" />
        <div className={badgeClass}>
          Software Engineer
        </div>
      </div>
    </div>

    <CohesiveLookComponent />
    <br />
    <ServicesComponent />
    <br />
    <ExperienceSection />
    <ContactForm />
    </>

    
  );
};

export default ProfileCard;


