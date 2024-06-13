import React from 'react';

const inputClasses = "w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white";
const containerClasses = "grid grid-cols-1 md:grid-cols-2 gap-4";
const buttonClasses = "w-full py-3 bg-black text-white rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f1eb] dark:bg-zinc-900">
      <div className="text-center mb-8">
        <p className="text-sm text-orange-600 uppercase tracking-widest">Contact</p>
        <h1 className="text-4xl font-bold text-zinc-800 dark:text-white">Time to Build Your Dream Interior</h1>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg w-full max-w-lg">
        <form className="space-y-4">
          <div className={containerClasses}>
            <input type="text" placeholder="Full Name" className={inputClasses} />
            <input type="email" placeholder="Email Address" className={inputClasses} />
          </div>
          <div className={containerClasses}>
            <input type="text" placeholder="Budget" className={inputClasses} />
            <input type="text" placeholder="Type of Design" className={inputClasses} />
          </div>
          <textarea placeholder="Messages" className={`${inputClasses} h-32`}></textarea>
          <button type="submit" className={buttonClasses}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
