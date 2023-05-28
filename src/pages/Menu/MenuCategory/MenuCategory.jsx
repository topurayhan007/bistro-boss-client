import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 my-16 w-full">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
