import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from './Footer';

const Root = () => {
    return (
        <div className='font-poppins flex flex-col min-h-screen'>
            
            <NavBar className=""></NavBar>
            <Outlet className="flex-grow"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root; 