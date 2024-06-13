import React from 'react';

const sharedClasses = {
  flex: 'flex',
  flexCol: 'flex-col',
  flex1: 'flex-1',
  textCenter: 'text-center',
  textLeft: 'text-left',
  text6xl: 'text-6xl',
  fontBold: 'font-bold',
  textTeal400: 'text-teal-400',
  mb4: 'mb-4',
  text4xl: 'text-4xl',
  fontExtrabold: 'font-extrabold',
  justifyCenter: 'justify-center',
  justifyStart: 'justify-start',
  spaceX4: 'space-x-4',
  mt8: 'mt-8',
  mt0: 'mt-0',
  ml8: 'ml-8',
  relative: 'relative',
  roundedLg: 'rounded-lg',
  absolute: 'absolute',
  top0: 'top-0',
  right0: 'right-0',
  translateX12: 'translate-x-1/2',
  translateY12: '-translate-y-1/2',
  h16: 'h-16',
  w16: 'w-16',
  bgGradient: 'bg-gradient-to-r',
  fromTeal400: 'from-teal-400',
  toBlue500: 'to-blue-500',
  transform: 'transform',
  rotate45: 'rotate-45',
};

const SocialLink = ({ href, alt, src }) => (
  <a href={href} className={`text-white`}>
    <img aria-hidden="true" alt={alt} src={src} />
  </a>
);

const ProfileCard = () => (
  <div className={`bg-purple-800 text-white p-8 ${sharedClasses.flex} ${sharedClasses.flexCol} ${sharedClasses.itemsCenter} ${sharedClasses.mdItemsStart}`}>
    <div className={`${sharedClasses.flex1} ${sharedClasses.textCenter} ${sharedClasses.mdTextLeft}`}>
      <div className={`${sharedClasses.text6xl} ${sharedClasses.fontBold} ${sharedClasses.textTeal400} ${sharedClasses.mb4}`}>01</div>
      <h1 className={`${sharedClasses.text4xl} ${sharedClasses.fontExtrabold} ${sharedClasses.mb4}`}>MARK HUGGINS</h1>
      <p className={`${sharedClasses.mb4}`}>Hello, my name is Mark, and I’m a designer & animator. I worked for high-profile creative studios in the past until I decided to go all on my own. So, welcome to my cosy place where you can learn about me and my projects.</p>
      <div className={`${sharedClasses.flex} ${sharedClasses.justifyCenter} ${sharedClasses.mdJustifyStart} ${sharedClasses.spaceX4}`}>
        <SocialLink href="#" alt="twitter" src="https://placehold.co/24x24" />
        <SocialLink href="#" alt="facebook" src="https://placehold.co/24x24" />
        <SocialLink href="#" alt="dribbble" src="https://placehold.co/24x24" />
      </div>
    </div>
    <div className={`${sharedClasses.flex1} ${sharedClasses.mt8} ${sharedClasses.mdMt0} ${sharedClasses.mdMl8}`}>
      <div className={`${sharedClasses.relative}`}>
        <img className={`${sharedClasses.roundedLg}`} src="https://placehold.co/300x300" alt="Profile Picture" />
        <div className={`${sharedClasses.absolute} ${sharedClasses.top0} ${sharedClasses.right0} ${sharedClasses.transform} ${sharedClasses.translateX12} ${sharedClasses.translateY12}`}>
          <div className={`${sharedClasses.h16} ${sharedClasses.w16} ${sharedClasses.bgGradient} ${sharedClasses.fromTeal400} ${sharedClasses.toBlue500} ${sharedClasses.transform} ${sharedClasses.rotate45}`}></div>
        </div>
      </div>
    </div>
  </div>
);

const ProfileComponent = () => {
  return <ProfileCard />;
};

export default ProfileComponent;




