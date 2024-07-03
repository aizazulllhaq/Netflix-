import React from "react";
import Navbar from "../Navbar";
import MainSection from "../MainSection";
import EnjoyTV from "../EnjoyTV";
import DownloadApp from "../DownloadApp";
import WatcheEveryWhere from "../WatchEveryWhere";
import ProfileForKids from "../ProfileForKids";
import FAQ from "../FAQ";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <section className="w-[100%] h-[100vh] bg-[url('/src/assets/netflix.png')] bg-cover bg-center">
      <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.7)]">
        <Navbar />
        <MainSection />
        <EnjoyTV />
        <DownloadApp/>
        <WatcheEveryWhere/>
        <ProfileForKids/>
        <FAQ/>
        <Footer/>
      </div>
    </section>
  );
};

export default Home;
