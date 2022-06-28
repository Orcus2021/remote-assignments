import React, { useState } from "react";

const Main = () => {
  const [showContent, setShowContent] = useState(false);
  const contentHandler = () => {
    setShowContent((pre) => !pre);
  };

  return (
    <main>
      <h2>Section title</h2>
      <div className="container1">
        <div className="content1">Content Box 1</div>
        <div className="content2">Content Box 2</div>
        <div className="content3">Content Box 3</div>
        <div className="content4">Content Box 4</div>
      </div>
      <div className="action">
        <button onClick={contentHandler}>Call to Action</button>
      </div>
      {showContent && (
        <div className="container2">
          <div className="content1">Content Box 5</div>
          <div className="content2">Content Box 6</div>
          <div className="content3">Content Box 7</div>
          <div className="content4">Content Box 8</div>
        </div>
      )}
    </main>
  );
};

export default Main;
