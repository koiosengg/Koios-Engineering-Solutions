import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import { BlogStructuredData } from "../structured-data";
import Banner from "./Blog/Banner";
import OurBlogs from "./Blog/OurBlogs";
import Articles from "./Blog/Articles";
import Prototyping from "./Blog/Prototyping";
import Design from "./Blog/Design";
import Electric from "./Blog/Electric";

function Blog() {
  return (
    <>
      <BlogStructuredData />
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Koios Engineering Solution Blogs" />
      </Helmet>
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
          path="prototyping-services-automotive-vehicle-development"
          element={
            <>
              <Prototyping />
              <Articles />
            </>
          }
        />
        <Route
          path="automotive-design-services-vehicle-development"
          element={
            <>
              <Design />
              <Articles />
            </>
          }
        />
        <Route
          path="electric-vehicle-design-services"
          element={
            <>
              <Electric />
              <Articles />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default Blog;
