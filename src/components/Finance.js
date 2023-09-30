import React from "react";
import "./Finance.css";

const Finance = () => {
  return (
    <>
      <div class="image-right">
        <div className="text">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            One App the world loves.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="btn btn-secondary text-primary w-[200px]  my-6 mx-auto md:mx-0 py-3">
            <span className="z-10 relative">Get Started</span>
          </button>
        </div>
        <div className="top1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png"
            alt="Human Rights Logo"
          />
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <h2>Front Side</h2>
            </div>
            <div class="flip-box-back">
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png"
            alt="Human Rights Logo"
          />
        </div>
        <div className="center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png"
            alt="Human Rights Logo"
          />
        </div>
        <div className="top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HumanRightsLogo.svg/230px-HumanRightsLogo.svg.png"
            alt="Human Rights Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Finance;
