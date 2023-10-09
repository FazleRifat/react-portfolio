import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="space-y-6">
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <Banner></Banner>
      </div>
      <Skills></Skills>
    </div>
  );
};

export default Home;
