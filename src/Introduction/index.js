import React from "react";
import { Card } from "react-bootstrap";
import image from "../photo.jpeg"

function Introduction() {
  return (
    <Card>
      <h2>About Me</h2>
      <div class="grid-2">
        <div class="center">
          <img class="photo" src={image} alt="jessica" />
        </div>
        <div>
          <p>Hello! I am a software engineer based in San Francisco (I actually grew up here!). I attended Pepperdine University in Southern California where I majored in Accounting. I spent a few years as an accountant until I decided to leave that (boring) life behind and pursue my interests in software development. It's been the best decision I've made and I haven't looked back since.</p>
        </div>
      </div>
    </Card>
  )
};

export default Introduction;