import React, { useState } from "react";
const dataArr1 = [
  "Content Box 1",
  "Content Box 2",
  "Content Box 3",
  "Content Box 4",
];
const dataArr2 = [
  "Content Box 5",
  "Content Box 6",
  "Content Box 7",
  "Content Box 8",
];
const Main = () => {
  const [showContent, setShowContent] = useState(false);
  const contentHandler = () => {
    setShowContent((pre) => !pre);
  };

  return (
    <main>
      <h2>Section title</h2>
      <div className="container1">
        {dataArr1.map((data, index) => {
          return (
            <div key={index} className={`content${index + 1}`}>
              {data}
            </div>
          );
        })}
      </div>
      <div className="action">
        <button onClick={contentHandler}>Call to Action</button>
      </div>
      {showContent && (
        <div className="container2">
          {dataArr2.map((data, index) => {
            return (
              <div key={index} className={`content${index + 1}`}>
                {data}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Main;
