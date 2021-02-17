import React from "react";
import { Card } from "react-bootstrap";

function Experience() {
  return (
    <Card><h2>Experience</h2>
      <p><strong>Fullstack Developer @ <a href="http://livestack.video" target="_blank" rel="noreferrer">Livestack</a></strong> <i>March 2020 - March 2021</i>
        <ul>
          <li> Livestack is a platform for creators to host livestream events and monetize their content.</li>
          <li> Created modular components with JavaScript React on the front-end - took advantage of React v.16+ to control state and components with React hooks and custom hooks.</li>
          <li> Created REST API with CRUD Routing with Node.js and Express in the back-end. </li>
          <li> Wrote SQL queries to interact with PostgreSQL database.</li>
          <li> Integrated several API's to enhance our application: Stripe (payments), Zoom (video conferencing), Twilio SendGrid (emails), Algolia (instant search), Nylas (contact importing)</li>
          <li> Used Git/Github for version control– branching, merges, conflict resolution, projects, pull requests and reviews.</li>
        </ul>
      </p>
    </Card>
  )
};

export default Experience;