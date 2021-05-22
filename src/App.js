import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
import HomepagePage from "./routes/HomepagePage"
import FAQPage from "./routes/FAQPage"
import ContactUsPage from "./routes/ContactUsPage"
import BlogsPage from './routes/BlogsPage';
import FreeResourcesPage from './routes/FreeResourcesPage'
import AboutUsPage from './routes/AboutUsPage'
import ProductsPage from './routes/ProductsPage'
import "./assets/css/style.css"
function App() {
  return (
    <div className="App">
      <Router>
      <HomepagePage path="/" />
      <FAQPage path="/faq" />
      <ContactUsPage path="/contactus"/>
      <BlogsPage path="/blogs" />
      <FreeResourcesPage path="/freeresources" />
      <AboutUsPage path="/about" />
      <ProductsPage path="/products" />
      </Router>
    </div>
  );
}

export default App;
