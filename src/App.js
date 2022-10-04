import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./views/home";
import Explore from "./views/explore";
import Detail from "./views/detail";
import My from "./views/my";
import Settings from "./views/settings";
import Instructor from "./views/instructor";
const App = () => {
  return (
    <Router>
        <div className="App">    
            <Header />
            <div className="main">
                <Nav />
                <div className="wrapper">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/courses" element={<Explore />}/>
                        <Route path="/courses/:id" element={<Detail />}/>
                        <Route path="/mycourses" element={<My />}/>
                        <Route path="/settings" element={<Settings />}/>
                        <Route path="/instructor" element={<Instructor />}/>
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
  )
}

export default App;
