import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Navbar, NavbarTop } from '../components';

const Root = () => {
    return (
        <>
            <NavbarTop />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
};
export default Root;
