// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Banner, Header, Footer } from "./components/commons";
import { Home, Login, Signup, Checkout, Payment , BuyInstaLikes , BuyInstaFollowers , BuyInstaComments , BuyInstaViews , BuyTiktokFollowers , BuyTiktokLikes , BuyTiktokViews} from "./pages";

export default function App() {
  const bannerTitle = (
    <p className="font-light">
      Use coupon code{" "}
      <span className="font-medium border border-dotted p-1">DEMO</span> to get{" "}
      <span className="font-medium">5% OFF</span> on orders above $10.
    </p>
  );

  return (
    <Router>
      <Banner text={bannerTitle} />
      <Header />

      <main className="pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />   
          <Route path="/signup" element={<Signup />} />  
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/payment" element={<Payment />} />
          <Route path="/buyinstalikes" element={<BuyInstaLikes />} />
           <Route path="/buyinstafollowers" element={< BuyInstaFollowers/>} />
           <Route path="/buyinstacomments" element={< BuyInstaComments/>} />
           <Route path="/buyinstaviews" element={< BuyInstaViews/>} />
           <Route path="/buytiktokfollowers" element={< BuyTiktokFollowers/>} />
           <Route path="/buytiktoklikes" element={<BuyTiktokLikes />} />
           <Route path="/buytiktokviews" element={<BuyTiktokViews />} />
          <Route path="*" element={<div className="text-center py-20">404 Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
