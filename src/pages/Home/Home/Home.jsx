import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
      <Featured></Featured>
      <div className="">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
