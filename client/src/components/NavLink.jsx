import Home from '../assets/Home';
const NavLink = () => {
    return (
        <div className="flex space-x-2 items-center  justify-center ">
            <Home />
            <div className='flex justify-center items-center'><span className='text-[#999999]'>Home Page / Sample Project / </span><span className='text-[#7E22CE]'>Add your podcast</span></div>
        </div>
    )
}
export default NavLink;