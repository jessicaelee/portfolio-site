import React from "react";
import { Card } from "react-bootstrap";

function Projects() {
  return (
    <Card><h2>Projects</h2>

      <p><strong><a href="https://jl-jobly-fe.herokuapp.com/" target="blank">Jobly</a></strong><i>React.js, Javascript, HTML, CSS, Bootstrap, Node, PostgreSQL</i> <div>A twitter clone that allows users to sign up with an
      account,
      follow/unfollow people and star their messages. A user can also update their profile and write their
      own messages.</div></p>

      <p><strong><a href="https://warblerjl.herokuapp.com/" target="blank">Warbler</a></strong> <i>Python, Jinja, Flask, HTML, CSS, Bootstrap, SQLalchemy</i><div>An app that allows users to create an
      account, view companies and job listings, and apply to jobs. Once logged in, a user can view companies and job listings that they can apply to.</div></p>

      <p><strong><a href="https://github.com/jessicaelee/react-redux-microblog/"
        target="blank">Microblog</a></strong><i>React.js, Redux, Javascript, HTML, CSS, Bootstrap, Node.js, PostgresSQL</i> <div>An anonymous blog site that allows a user to add/edit blogs. The user can also vote up/down on blog posts and add comments.</div></p>

    </Card>
  )
};

export default Projects;