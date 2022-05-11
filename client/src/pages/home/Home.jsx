import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Posts />
      </main>
      <Footer />
    </>
  );
}

export default Home;
