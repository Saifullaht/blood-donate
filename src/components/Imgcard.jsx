import React from 'react';

const Imgcards = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
          {/* Reduced the top and bottom padding from py-24 to py-12 */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            {/* Adjusted margins and paddings */}
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-700">
              Purpose of Blood Donation
            </h1>
            <p className="mb-6 leading-relaxed">
              Blood donation is a life-saving act that helps people suffering from various medical conditions, including
              Thalassemia, a genetic blood disorder. Thalassemia patients require regular blood transfusions to manage
              their condition and maintain a healthy life. Donating blood ensures a continuous supply for those in
              urgent need, offering them a chance at a better and longer life.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-vector/blood-donation-design_24877-46616.jpg?semt=ais_hybrid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Imgcards;
