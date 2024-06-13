import Header from "./components/header";
import ProfileCard from "./components/hero/hero";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <ProfileCard />
        <div className="App">
         
        </div>
      <Footer />
    </Router>
    
  );
}

export default App;
