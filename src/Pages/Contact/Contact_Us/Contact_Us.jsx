import React from "react";

const Contact_Us = () => {
  return (
    <div className="bg-info pb-16">
      <div className="lg:w-96 mx-auto pb-8">
        <small className="text-primary flex justify-center font-bold pb-1">
          Contact Us
        </small>
        <h1 className="text-3xl lg:text-4xl text-black text-center font-bold">
          Have Any Questions? Let’s Talk!
        </h1>
      </div>
      <div className="bg-white w-11/12 md:w-10/12 mx-auto pt-5 pb-16  rounded-lg">
        <form className="w-10/12 mx-auto">
          {/* 1 */}

          <div className="md:flex gap-5">
            {/* name */}
            <div className="w-full">
              <div>
                <label className="font-bold text-neutral">Your Name</label>
              </div>
              <input
                type="text"
                placeholder="Type your name here"
                className="focus:outline-none input w-full bg-info mt-3"
              />
            </div>

            {/* email */}
            <div className="w-full pt-2 md:pt-0">
              <div>
                <div>
                  <label className="font-bold text-neutral">
                    Email Address
                  </label>
                </div>
                <input
                  type="email"
                  placeholder="Type your email here"
                  className="focus:outline-none input w-full bg-info mt-3"
                />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="md:flex gap-5 pt-4">
            {/* subject */}
            <div className="w-full">
              <div>
                <label className="font-bold text-neutral">Subject</label>
              </div>
              <input
                type="text"
                placeholder="Type your subject here"
                className="focus:outline-none input w-full bg-info mt-3"
              />
            </div>

            {/* phone number */}
            <div className="w-full pt-2 md:pt-0">
              <div>
                <div>
                  <label className="font-bold text-neutral">Phone Number</label>
                </div>
                <input
                  type="text"
                  placeholder="Type your phone number here"
                  className="focus:outline-none input w-full bg-info mt-3"
                />
              </div>
            </div>
          </div>

          {/* message */}
          <div className="pt-4">
            <div>
              <label className="font-bold text-neutral">Massage ....</label>
            </div>
            <textarea
              className="focus:outline-none textarea w-full h-48 bg-info mt-3"
              placeholder="Your message"></textarea>
          </div>

          {/* check box */}
          <div className="flex gap-2 pt-2">
            <input type="checkbox" id="" name="" value="" />
            <small className="font-extrabold">
              Accept <span className="text-red-500">terms</span> and  <span className="text-red-500">privacy policy.</span>
            </small>
          </div>

          <div className="text-center lg:text-left pt-10">
            <button className="bg-primary rounded-full px-7 py-1 md:py-2">
              <a className="text-white text-base font-bold text-xs md:text-base">
              Submit Massage
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Us;
