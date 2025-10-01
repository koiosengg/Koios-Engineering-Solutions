import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Blog/Banner";
import OurBlogs from "./Blog/OurBlogs";
import FAQ from "./Blog/FAQ";
import SampleBlog from "./Blog/SampleBlog";
import Articles from "./Blog/Articles";

function Blog() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Banner />
              <OurBlogs />
            </>
          }
        />
        <Route
          path="sample-blog"
          element={
            <>
              <SampleBlog />
              <Articles />
            </>
          }
        />
      </Routes>
      <FAQ />
    </>
  );
}

export default Blog;
