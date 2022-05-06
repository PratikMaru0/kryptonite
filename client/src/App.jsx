// import "./App.css";
import "./index.css";
import {
  Loader,
  Footer,
  Navbar,
  Welcome,
  Services,
  Transactions,
} from "./components/Index.js";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
