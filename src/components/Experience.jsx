import React from 'react';

const Experience = ({ experience = [{}, {}, {}, {}] }) => {
  return (
    <div>
      {experience.map((element, startDate) => (
        <section className="Experience-item" key={element.startDate}>
          <h3 className="item" key="1">
            {element.company}
          </h3>
          <p className="item" key="2">
            {element.jobTitle}
          </p>
          <p className="item" key="3">
            {element.jobDescription}
          </p>
          <p className="item" key="4">
            {element.startDate}
          </p>
        </section>
      ))}
    </div>
  );
};

export default Experience;
