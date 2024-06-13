import React from 'react';

const sharedClasses = {
  button: "bg-black text-white px-6 py-2 rounded-full",
  card: "flex items-start p-4 bg-white rounded-lg shadow-md border border-orange-200",
  textZinc600: "text-zinc-600",
  textZinc900: "text-zinc-900",
  textSm: "text-sm",
  textLg: "text-lg",
  fontSemibold: "font-semibold",
  w16: "w-16",
  h16: "h-16",
  mt4: "mt-4",
  mt6: "mt-6",
  my6: "my-6",
  spaceY6: "space-y-6",
  gridCols2: "grid md:grid-cols-2",
  gap8: "gap-8",
  itemsStart: "items-start",
  roundedLg: "rounded-lg",
  maxW7xl: "max-w-7xl",
  mxAuto: "mx-auto",
  bgZinc100: "bg-zinc-100",
  textZinc500: "text-zinc-500",
  uppercase: "uppercase",
  text3xl: "text-3xl",
  fontBold: "font-bold",
  paddingAll: "p-9"
};

const ServicesComponent = () => {
  return (
    <div className={`${sharedClasses.bgZinc100} ${sharedClasses.p8} ${sharedClasses.my6} ${sharedClasses.roundedLg} ${sharedClasses.maxW7xl} ${sharedClasses.mxAuto}`}>
      <div className={`${sharedClasses.gridCols2} ${sharedClasses.gap8} ${sharedClasses.paddingAll}`}>
        <div>
          <h2 className={`${sharedClasses.textSm} ${sharedClasses.fontSemibold} ${sharedClasses.textZinc500} ${sharedClasses.uppercase}`}>Services</h2>
          <h1 className={`${sharedClasses.mt2} ${sharedClasses.text3xl} ${sharedClasses.fontBold} ${sharedClasses.textZinc900}`}>Transform Your Home with Expert Interior Design Services</h1>
          <p className={`${sharedClasses.mt4} ${sharedClasses.textZinc600}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt imperdiet. Fusce in ex nec ligula hendrerit tempor.</p>
          <button className={`${sharedClasses.mt6} ${sharedClasses.button}`}>Hire Me</button>
        </div>
        <div className={sharedClasses.spaceY6}>
          <ServiceCard imageSrc="https://placehold.co/64x64" title="House Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt." />
          <ServiceCard imageSrc="https://placehold.co/64x64" title="Building Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt." />
          <ServiceCard imageSrc="https://placehold.co/64x64" title="Building Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt." />
          <ServiceCard imageSrc="https://placehold.co/64x64" title="Building Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt." />

        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className={sharedClasses.card}>
      <img src={imageSrc} alt={title} className={`${sharedClasses.w16} ${sharedClasses.h16} mr-4`} />
      <div>
        <h3 className={`${sharedClasses.textLg} ${sharedClasses.fontSemibold} ${sharedClasses.textZinc900}`}>{title}</h3>
        <p className={sharedClasses.textZinc600}>{description}</p>
      </div>
    </div>
  );
};

export default ServicesComponent;
