import React from "react";
import Typed from 'react-typed';

function Introduction() {

  return (<>
    <h1 className="title"> <Typed strings={["Hello! I am Jessica"]} typeSpeed={150} /></h1>
    <h2 className="sub-title">Software Developer | Dog Lover</h2>
  </>
  )
};

export default Introduction;