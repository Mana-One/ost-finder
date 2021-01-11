import "./App.css";
import Header from "./components/Header.jsx";
import Route from "./components/Route.jsx";
import Home from "./components/Home.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/Page3.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return(
        <div className="app">
            <Header/>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/api1">
                <Page1/>
            </Route>
            <Route path="/api2">
                <Page2/>
            </Route>
            <Route path="/both">
                <Page3/>
            </Route>
            <Footer/>
        </div>
    )
};

export default App;