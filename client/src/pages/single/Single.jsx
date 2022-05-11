import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";

function Single() {
  return (
    <>
      <Header />
      <main id="main" className="col2">
        <SinglePost />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default Single;
