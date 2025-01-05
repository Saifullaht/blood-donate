import React from 'react';

const Chnageimg = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col-reverse items-center md:gap-x-8">
          {/* Added gap-x-8 for horizontal spacing */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-4 md:mb-0">
            {/* Added bottom margin for smaller screens */}
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-vector/realistic-world-blood-donor-day-illustration_23-2148948280.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
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
        </div>
      </section>
    </>
  );
};

export default Chnageimg;
