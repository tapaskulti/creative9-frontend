import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ArtsPage from "./pages/arts/ArtsPage";
import ArtDetailsPage from "./pages/arts/ArtDetailsPage";
import Illustration from "./pages/illustration/Illustration";

import { useEffect } from "react";
import ArtCreatePage from "./pages/arts/ArtCreatePage";
import ArtUpdatePage from "./pages/arts/ArtUpdatePage";
import IllustrationCreatePage from "./pages/illustration/IllustrationCreatePage";
import IllustrationDetail from "./pages/illustration/IllustrationDetail";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoutes from "./components/PrivateRoute";

import MyOrder from "./pages/myorder/MyOrder";
import Chat from "./pages/chat/Chat";
import ArtPayment from "./pages/arts/ArtPayment";
import AccountActivation from "./pages/auth/AccountActivation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CancellationRefund from "./pages/CancellationRefund";
import ShippingDelivery from "./pages/ShippingDelivery";
import Portfolio from "./pages/illustration/Portfolio";
import PortfolioImageUpload from "./pages/illustration/PortfolioImageUpload";
import ContactUs from "./pages/contactUs";
import SuccessPayment from "./pages/SuccessPayment";
import CancelPayment from "./pages/CancelPayment";
import ReviewEntry from "./pages/ReviewEntry";
import AboutUs from "./components/AboutUs";
import Freelancer from "./components/Freelancer";
import CartPage from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  // const { receiver } = useSelector((state) => state.chat);

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email, "email");
    dispatch({
      type: "ACCESS_TOKEN",
      payload: {
        email: email,
        navigate
      }
    });
  }, []);

  useEffect(() => {
    if (token) {
      dispatch({
        type: "USER_DETAILS",
        payload: {
          email: localStorage.getItem("email")
        }
      });
      dispatch({
        type: "USER_LIST",
        payload: {}
      });
    }
  }, [token]);

  return (
    <>
      <div className="hoverflow-y-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reviewEntry/:orderid" element={<ReviewEntry />} />
          <Route
            path="/user/activate/:activationCode"
            element={<AccountActivation />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-refund" element={<CancellationRefund />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/success" element={<SuccessPayment />} />
          <Route path="/cancel" element={<CancelPayment />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Painting" element={<ArtsPage />} />
          <Route path="/Illustration" element={<Illustration />} />

          <Route element={<PrivateRoutes token={token} />}>
            <Route path="/Painting/create" element={<ArtCreatePage />} />
            <Route path="/Painting/:id/update" element={<ArtUpdatePage />} />
            <Route path="/Painting/:id" element={<ArtDetailsPage />} />
            <Route path="/Painting/:id/Payment" element={<ArtPayment />} />
            <Route path="/Myorder" element={<MyOrder />} />
            <Route path="/Illustration/:id" element={<IllustrationDetail />} />
            <Route path="/Illustration/:id/Portfolio" element={<Portfolio />} />
            <Route
              path="/Illustration/:id/PortfolioImageUpload"
              element={<PortfolioImageUpload />}
            />
            <Route
              path="/Illustration/:id/create"
              element={<IllustrationCreatePage />}
            />
            {/* <Route path="/Myorder" element={<MyOrder />} /> */}
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
