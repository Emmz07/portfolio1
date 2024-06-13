
import React from 'react';

const experienceData = [
  {
    year: '2009-2010',
    company: 'Hums.LTD',
    position: 'Junior Interior Designer'
  },
  {
    year: '2010-2011',
    company: 'Capriso Agency',
    position: 'Senior Interior Designer'
  },
  {
    year: '2011-2015',
    company: 'Prodic Corp.',
    position: 'Project Manager'
  },
  {
    year: '2011-2015',
    company: 'Prodic Corp.',
    position: 'Project Manager'
  },
  {
    year: '2011-2015',
    company: 'Prodic Corp.',
    position: 'Project Manager'
  },
  {
    year: '2011-2015',
    company: 'Prodic Corp.',
    position: 'Project Manager'
  },
  {
    year: '2011-2015',
    company: 'Prodic Corp.',
    position: 'Project Manager'
  }

];

const sharedClasses = {
  textZinc: 'text-zinc-600 dark:text-zinc-400',
  textZincBold: 'font-bold text-zinc-800 dark:text-zinc-200',
  bgBrown: 'bg-brown-500',
  bgZinc: 'bg-zinc-100 dark:bg-zinc-900',
  bgWhite: 'bg-white dark:bg-zinc-800',
  shadow: 'shadow',
  rounded: 'rounded-lg',
  flex: 'flex',
  itemsCenter: 'items-center',
  spaceY: 'space-y-8',
  mx4: 'mx-4',
  h2: 'h-2',
  w2: 'w-2',
  mdW1_2: 'md:w-1/2',
  mt8: 'mt-8',
  mt0: 'mt-0',
  ml8: 'md:ml-8',
  p8: 'p-8',
  textSm: 'text-sm',
  text2xl: 'text-2xl',
  text5xl: 'text-5xl',
  mt2: 'mt-2',
  mt4: 'mt-4',
  mt6: 'mt-6',
  px4: 'px-4',
  px6: 'px-6',
  my7: 'my-9',
  py2: 'py-2',
  bgBlack: 'bg-black',
  textWhite: 'text-white',
  roundedFull: 'rounded-full',
  flexCol: 'flex flex-col',
  flexRow: 'flex flex-col md:flex-row',
  paddingAll: "p-7"
};

const ExperienceItem = ({ year, company, position }) => (
  <div className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.my7}`}>
    <div className={sharedClasses.textZinc}>{year}</div>
    <div className={`${sharedClasses.mx4} ${sharedClasses.h2} ${sharedClasses.w2} ${sharedClasses.bgBrown} ${sharedClasses.rounded}`}></div>
    <div>
      <div className={sharedClasses.textZincBold}>{company}</div>
      <div className={sharedClasses.textZinc}>{position}</div>
    </div>
  </div>
);

const Experiences = () => (
  <div className={`${sharedClasses.bgZinc} ${sharedClasses.p8} ${sharedClasses.paddingAll}`}>
    <div className={ `${sharedClasses.flexRow} ${sharedClasses.px4} `}>
      <div className={sharedClasses.mdW1_2}>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} year={exp.year} company={exp.company} position={exp.position} />
        ))}
      </div>
      <div className={`${sharedClasses.mdW1_2} ${sharedClasses.mt8} ${sharedClasses.mdMt0} ${sharedClasses.ml8} ${sharedClasses.p8} ${sharedClasses.bgWhite} ${sharedClasses.shadow} ${sharedClasses.rounded}`}>
        <div className= {`${sharedClasses.text2xl} ${sharedClasses.my7}`}>EXPERIENCES</div>
        <div className={`${sharedClasses.text5xl} ${sharedClasses.textZincBold} ${sharedClasses.mt2} ${sharedClasses.my7}`}>My Experiences</div>
        <p className={`${sharedClasses.textZinc} ${sharedClasses.my7}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius erat vel erat tincidunt, sed volutpat lectus accumsan. Ut quis magna eget neque tincidunt.

        </p>
        <button className={`${sharedClasses.mt6} ${sharedClasses.text2xl} ${sharedClasses.px6} ${sharedClasses.py2} ${sharedClasses.bgBlack} ${sharedClasses.textWhite} ${sharedClasses.roundedFull}`}>Hire Me</button>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => (
  <Experiences />
);

export default ExperienceSection;
