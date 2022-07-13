import React from "react";

function ProgramGuide(props) {
  /**
   * Component with different services
   */
  console.log(props);

  const ListProgramGuide = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <ul>
          {props.date.map((item) => {
           return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {props.arrPrograms.map((item) => {
        return <ListProgramGuide key={item.title} {...item} />;
      })}
    </div>
  );
}

export default ProgramGuide;
