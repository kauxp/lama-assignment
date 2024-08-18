import { Link } from 'react-router-dom';
import Home from '../assets/Home';
const NavLink = () => {
    return (
        <div className="flex gap-3 items-center  justify-center ">
            <Home />
            <Link to="/create-new-project">
                <div className='flex justify-center items-center'><span className='text-[#999999]'>Home Page</span><span className='text-[#7E22CE]'></span></div>
            </Link>
        </div>
    )
}
export default NavLink;