import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { Authenticate } from "./components/Authenticate";
// import { Profile } from "./components/Profile";
import { Favorites } from "./pages/Favorites";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
