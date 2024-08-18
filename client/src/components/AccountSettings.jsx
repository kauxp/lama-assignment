import BackArrow from '../assets/BackArrow';

const AccountSettings = ({onClick}) => {
    return (
        <div className='flex flex-col w-full items-start space-y-16'>
            <div onClick={onClick} className="flex items-center space-x-6">
                <BackArrow />
                <div className="text-4xl font-semibold">Account Settings</div>
            </div>
            <div className='flex items-center space-x-8'>
                <div className='w-[151px] h-[151px] bg-black rounded-[100%]'>
                    <image src="" alt="profile" />
                </div>
                <div className='flex flex-col items-start '>
                    <div className='font-bold text-xl'>UserName</div>
                    <div className='w-[358.06px] h-[44.3px] text-lg text-[#3C3C3C] text-left flex items-center p-4 border border-solid border-[#999999] rounded-[5px] bg-white'>Bulbasaur</div>
                </div>
                <div className='flex flex-col items-start '>
                    <div className='font-bold text-xl'>Email</div>
                    <div className='w-[358.06px] h-[44.3px] text-lg text-[#3C3C3C] text-left flex items-center p-4 border border-solid border-[#999999] rounded-[5px] bg-white'>ichooseu@gmail.com</div>
                </div>
            </div>
            <div className="text-4xl font-semibold">Subscriptions</div>
            <div className='flex items-center p-10  pr-20 border border-solid border-[#7E22CE] justify-between w-[100%] h-[105.15px] shadow-lg bg-gradient-to-r from-white to-[#EDD9FF] py-2 px-4 rounded-[10px]'>
                <div className='text-2xl text-[#7E22CE]'><span>Oops! You don’t have any active plans.</span><span className='font-bold'> Upgrade now!</span></div>
                <button className='text-white bg-[#7E22CE] pt-1 pb-1 pr-5 pl-5 rounded-[7px]'>Upgrade</button>
            </div> 
        </div>
    )
}
export default AccountSettings;