import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="px-6 sm:px-10 lg:px-20 mt-5">
        <div className="flex gap-3">
          <div className="flex cursor-pointer gap-1">
            <FaHome className="mt-1" />
            <div>Home /</div>
          </div>
          <p className="text-sm mt-1 text-gray-400">FRUIT BASKETS</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {[
          { img: "/fruitsBasket-image/charisma.jpg", price: "₹4,100.00" },
          { img: "/fruitsBasket-image/luxuryexotic.jpg", price: "₹2,250.00" },
          { img: "/fruitsBasket-image/luxuryfruits.jpg", price: "₹2,850.00" },
          { img: "/fruitsBasket-image/luxuryhamper.jpg", price: "₹3,650.00" },
          { img: "/fruitsBasket-image/mangohamper.jpg", price: "₹2,100.00" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center shadow">
            <img
              src={item.img}
              alt=""
              className="w-full max-w-[270px] h-[300px] object-cover"
            />
            <p className="text-center text-sm mt-2 text-gray-700">
              CHARISMA ( WOODEN TRAY)
            </p>
            <div className="h-[1px] w-[80%] bg-gray-400 mt-1"></div>
            <p className="text-center text-sm mt-2 font-semibold text-gray-500">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
