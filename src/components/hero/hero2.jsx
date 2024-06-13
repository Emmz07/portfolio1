import React from 'react';

const sharedClasses = {
  textCenter: 'text-center',
  textZinc900: 'text-white',
  textZinc100: 'text-white',
  textZinc600: 'text-white',
  textZinc400: 'text-white',
  darkBgZinc900: 'dark:bg-zinc-900',
  bgZinc50: 'bg-zinc-50',
  py16: 'py-16',
  mb12: 'mb-12',
  maxW6xl: 'max-w-6xl',
  mxAuto: 'mx-auto',
  gridCols1: 'grid-cols-1',
  gridCols3: 'grid-cols-3',
  gap8: 'gap-8',
  mdGrid: 'md:grid',
  text6xl: 'text-6xl',
  text4xl: 'text-7xl',
  textXl: 'text-xl',
  fontBold: 'font-bold',
  fontSemiBold: 'font-semibold',
  textOrange600: 'text-orange-600',
  bgYellow300: 'bg-yellow-300',
  relative: 'relative',
  inlineBlock: 'inline-block',
  absolute: 'absolute',
  insetX0: 'inset-x-0',
  bottom0: 'bottom-0',
  h2: 'h-2',
  flexBox: 'flex',
  itemsAlign: 'items-center',
  justifyCenter: 'justify-center',
  screenH: "grid place-items-center justify-center"
};

const CohesiveLookComponent = () => {
  return (
    <div className={`${sharedClasses.bgZinc50} ${sharedClasses.darkBgZinc900} ${sharedClasses.py16}`}>
      <div className={`${sharedClasses.textCenter} ${sharedClasses.mb12}`}>
        <h1 className={`${sharedClasses.text4xl} ${sharedClasses.fontBold} ${sharedClasses.textZinc900} ${sharedClasses.darkTextZinc100}`}>
          Create a Cohesive Look with <br />
          <span className={`${sharedClasses.relative} ${sharedClasses.inlineBlock}`}>
            <span className={sharedClasses.relative}>Expert Design</span>
            <span className={`${sharedClasses.absolute} ${sharedClasses.insetX0} ${sharedClasses.bottom0} ${sharedClasses.h2}`}></span>
          </span>
        </h1>
        <br />
      </div>
      <div className={`${sharedClasses.maxW6xl} ${sharedClasses.screenH}  ${sharedClasses.mxAuto} ${sharedClasses.mdGrid} ${sharedClasses.gridCols1} ${sharedClasses.gridCols3} ${sharedClasses.gap8}`}>
        <div>
          <p className={`${sharedClasses.text6xl} ${sharedClasses.fontBold} ${sharedClasses.textOrange600}`}>6+</p>
          <p className={`${sharedClasses.textXl} ${sharedClasses.fontSemiBold} ${sharedClasses.textZinc900} ${sharedClasses.darkTextZinc100}`}>Years of Experience</p>
          <p className={`${sharedClasses.textZinc600} ${sharedClasses.darkTextZinc400}`}>62+ satisfied clients</p>
        </div>
        <div>
          <p className={`${sharedClasses.text6xl} ${sharedClasses.fontBold} ${sharedClasses.textOrange600}`}>24</p>
          <p className={`${sharedClasses.textXl} ${sharedClasses.fontSemiBold} ${sharedClasses.textZinc900} ${sharedClasses.darkTextZinc100}`}>Featured Design</p>
          <p className={`${sharedClasses.textZinc600} ${sharedClasses.darkTextZinc400}`}>from magazine</p>
        </div>
        <div>
          <p className={`${sharedClasses.text6xl} ${sharedClasses.fontBold} ${sharedClasses.textOrange600}`}>2</p>
          <p className={`${sharedClasses.textXl} ${sharedClasses.fontSemiBold} ${sharedClasses.textZinc900} ${sharedClasses.darkTextZinc100}`}>Awards Winner</p>
          <p className={`${sharedClasses.textZinc600} ${sharedClasses.darkTextZinc400}`}>from local community</p>
        </div>
      </div>
    </div>
  );
};

export default CohesiveLookComponent;
