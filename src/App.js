import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "@reach/router";
import FAQPage from "./routes/FAQPage"
import ContactUsPage from "./routes/ContactUsPage"
import "./assets/css/style.css"
function App() {
  return (
    <div className="App">
      <Router>
      <FAQPage path="/faq" />
      <ContactUsPage path="/"/>
      </Router>
    </div>
  );
}

export default App;
