import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='font-poppins bg-primaryBg flex flex-col min-h-screen'>
        <NavBar className="container mx-auto z-20"></NavBar>
        <div className='flex-grow'>
        <Outlet></Outlet>
        </div>
        
        <Footer></Footer>
    </div>
    );
};

export default Root; 