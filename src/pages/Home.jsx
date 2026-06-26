import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Stats from "../components/Stats";
// import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Home = () => {
  return (
   <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      {/* <CreatePost /> */}
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;