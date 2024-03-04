import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import { SearchIcon } from '../../assets/icons/search-icon';
import { useGetPost } from '../../pages/home/service/query/useGetPost';

export const Header = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const { data, refetch } = useGetPost();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        refetch();
    }

    return (
        <header className='py-5 fixed z-20 bg-white top-0 left-0 right-0 '>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <Link to='/'>
                                <img src={logo} alt="dribble logo" />
                            </Link>
                        </div>
                        <ul className='flex items-center gap-8'>
                            <li>
                                <a className=' font-medium text-[16px] text-[#6E6D7A] ' href="#">Inspiration</a>
                            </li>
                            <li>
                                <a className=' font-medium text-[16px] text-[#6E6D7A] ' href="#">Find Work</a>
                            </li>
                            <li>
                                <a className=' font-medium text-[16px] text-[#6E6D7A] ' href="#">Learn Design</a>
                            </li>
                            <li>
                                <a className=' font-medium text-[16px] text-[#6E6D7A] ' href="#">Go Pro</a>
                            </li>
                            <li>
                                <a className=' font-medium text-[16px] text-[#6E6D7A] ' href="#">Hire Designers</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-5'>
                        <form onSubmit={handleSubmit} className=' relative w-[300px]'>
                            <input 
                                value={searchTerm}
                                onChange={handleSearchChange} 
                                className='border-2 p-2 outline-none w-[100%] rounded-full ' 
                                placeholder='Search...' 
                                type="text" 
                            />
                            <div className='absolute top-[50%] translate-y-[-50%] right-5 '>
                                <SearchIcon />
                            </div>
                        </form>
                        <button className='text-[#6E6D7A] font-medium text-[16px] '>Sign in</button>
                        <button className=' bg-[#EA4C89] py-[10px] px-[16px] text-[16px] font-medium text-white rounded-lg border border-[#EA4C89] hover:bg-transparent hover:text-[#EA4C89] '>Sign up</button>
                    </div>
                </nav>
                
            </div>
        </header>
    );
}
