import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/common/Appbar';
import Cart from './components/common/Cart';
import Categories from './components/pages/Categories';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import FAQs from './components/pages/FAQs';
import CustomerCare from './components/pages/CustomerCare';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import CookiePolicy from './components/pages/CookiePolicy';

function App() {
  return (
    <>
      <div>
        <Router>
          <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/product/:id" element={<Product />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/customer-care" element={<CustomerCare />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
