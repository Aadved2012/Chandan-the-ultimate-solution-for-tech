import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';

import ResponsiveNavbar from './components/Navbar'
import SimpleSlider from './components/Slider';
import Products from './components/Products';
import ResponsiveMarquee from './components/Marquee';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <ResponsiveNavbar />
      <SimpleSlider />
      <Products />
      <ResponsiveMarquee />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
