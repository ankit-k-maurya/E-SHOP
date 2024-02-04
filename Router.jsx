import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import Contact from './Contact';
// import About from './About';
// import Error from './Error'
import Resturant from './Resturant';
import Cart from './Cart';
const Router = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route 
                exact
                 path="/" 
                 element={<Resturant />}
                 />
                    <Route
                     exact
                     path="/Cart"
                    element={<Cart />}
                     />
            </Routes>
        </BrowserRouter>
    );
}
export default Router