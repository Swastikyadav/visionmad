import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import "../assets/stylesheets/blogsListPage.css";

function BlogPage() {
  return (
    <Layout>
      <div className="blogs-list-page">
        <section className="blogs-header">
          <h1>VisionMad Web-Development Blogs</h1>
          <p>Best web-development tips and tricks blog. The best of which are featured in the weekly newsletter. Join the newsletter now!</p>
        </section>
        <div className="blog-card">
          <h2><Link to="/blog/rails-with-react-tutorial">3 ways to connect rails with react: Tutorial</Link></h2>
          <p>Complete guide to connect rails with react using react-rails gem, build a monolithic web app with react and rails, and create a separate frontend react app and backend rails API.</p>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;