import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity, favQuantity } = useShoppingCart();

  return (
    <div className="w-full h-[8vh] shadow-lg shadow-gray items-center  text-gray-50 flex justify-evenly backdrop-blur-xl bg-white/30">
      <div className="w-full mr-10 ml-12 p-2">
        <NavLink
          to="/"
          className={(activeStyle) =>
            activeStyle.isActive
              ? "mr-12 text-black font-bold"
              : "mr-12 text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={(activeStyle) =>
            activeStyle.isActive
              ? "mr-12 text-black font-bold"
              : "mr-12 text-black"
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className={(activeStyle) =>
            activeStyle.isActive
              ? "mr-12 text-black font-bold"
              : "mr-12 text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/cart"
          className={(activeStyle) =>
            activeStyle.isActive
              ? "mr-12 text-black font-bold"
              : "mr-12 text-black"
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/favorites"
          className={(activeStyle) =>
            activeStyle.isActive
              ? "mr-12 text-black font-bold"
              : "mr-12 text-black"
          }
        >
          <>Favorites - {favQuantity}</>
        </NavLink>
      </div>
      <button
        onClick={openCart}
        className="mr-7 ml-5 w-12 h-12 rounded-full border border-black hover:bg-indigo-200 right-4 bottom-4"
      >
        <svg
          style={{ width: "1.7rem", margin: "auto", display: "fixed" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="black"
        >
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>
        {cartQuantity > 0 ? (
          <div className="absolute rounded-full bg-green-500 flex justify-center items-center w-6 h-6 right-4 bottom-4">
            {cartQuantity}
          </div>
        ) : (
          <div className="absolute rounded-full bg-red-500 flex justify-center items-center w-6 h-6 right-4 bottom-4">
            {cartQuantity}
          </div>
        )}
      </button>
    </div>
  );
}
