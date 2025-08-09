import Image from "next/image";
import user from "@/assets/user.png";
import { IoChevronDownOutline } from "react-icons/io5";
const HeadLine = () => {
    return (
        <div className='flex items-center justify-between gap-5 border-b border-black pb-6'>
                <h1 className="text-3xl font-medium text-gray-900">Super Admin Panel</h1>
                <div className="flex items-center gap-2">
                    <Image src={user} alt="Admin" width={54} height={54} className='rounded-full' />
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <div className='flex items-center gap-2'><h1 className='font-bold'>Annette Black</h1><IoChevronDownOutline /></div>
                        <div className='text-gray-500'>Admin</div>
                    </div>
                </div>
            </div>
    );
};

export default HeadLine;