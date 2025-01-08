import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <SideNavBar />
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
