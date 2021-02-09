import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../../components/layout";

import "../../assets/stylesheets/curriculum.css";


export default function LearnWebDev({ data }) {
  return (
    <Layout>
      <div className="main-learn-page">
        <h1>Full stack web development curriculum.</h1>
        <p className="learn-page-text">
          Learn at your own pace with our hands-on curriculum, step by step guide, and detailed screencasts.
          Everything you need and nothing you don't.
        </p>
      <div className="thumbnails-div">
        {data.allImageSharp.edges.map((edge, idx) => {
          return <Img key={idx} fluid={edge.node.fluid} className="thumbnail" alt="html-css-thumbnnail" />
        })}
      </div>

      {/* <h1>UNIX and Git</h1>
      <ul>
        <li>Intro to Unix and Shell Commands</li>
        <li>Intro to Git</li>
        <li>Branching and merging in Git</li>
        <li>Merging v/s Rebasing</li>
        <li>Collaborating with GitHub</li>
      </ul>
      <h1>HTML and CSS</h1>
      <ul>
        <li>Intro to HTML and CSS</li>
        <li>Box Model</li>
        <li>Positioning</li>
        <li>FlexBox</li>
        <li>Typography</li>
        <li>Media, Lists, Tables, Forms</li>
        <li>Responsive Web Design</li>
        <li>Complex Selectors</li>
        <li>Preprocessor (SASS)</li>
        <li>Transform, Transition and Animation</li>
        <li>CSS Grid</li>
      </ul>
      <h1>JavaScript</h1>
      <ul>
        <li>Value, Variable, and Types</li>
        <li>Functions</li>
        <li>Data Structure</li>
        <li>Array and String Methods</li>
        <li>Intro to DOM</li>
        <li>DOM Events</li>
        <li>Higher Order Function</li>
        <li>Scope</li>
        <li>Closure</li>
        <li>Advanced DOM and Canvas</li>
        <li>Prototypal nature of object</li>
        <li>Prototypal inheritance, this and classNames</li>
        <li>AJAX, Promise, and Async/Await</li>
        <li>Error Handling and writing Test</li>
      </ul>
      <h1>Object Oriented Programming</h1>
      <h1>State Management with Redux</h1>
      <ul>
        <li>Why Redux? An Intro</li>
        <li>Async actions, Reducers and Store in Redux</li>
        <li>Redux middlewares and connecting with React</li>
      </ul>
      <h1>ReactJS</h1>
      <ul>
        <li>Build your own JS library</li>
        <li>Components and Props</li>
        <li>State and Events</li>
        <li>LifeCycle and Data fetching</li>
        <li>Forms (Controlled Components)</li>
        <li>Lifting State Up</li>
        <li>Thinking in React</li>
        <li>Type Checking and PropTypes</li>
        <li>Routing in React</li>
        <li>Authentication and Autherisation</li>
        <li>Uncontrolled Component</li>
        <li>React Hooks</li>
      </ul>
      <h1>NodeJS and ExpressJS</h1>
      <ul>
        <li>HTTP Protocol</li>
        <li>Introduction to NodeJS</li>
        <li>NodeJS Architecture</li>
        <li>Creating HTTP server</li>
        <li>Working with FileSystem</li>
        <li>Working with core NodeJS modules</li>
        <li>Package Manager and External modules</li>
        <li>ExpressJS Fundamentals</li>
        <li>Middlewares in ExpressJS</li>
        <li>Templating and rendering dynamic pages</li>
        <li>CRUD in express with mongoose</li>
        <li>Session based Authentication and Autherization</li>
      </ul> */}
      </div>
    </Layout>
  );
}

export const ThumbnailImage = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;