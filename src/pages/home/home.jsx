import React from 'react'
import bgImg from '../../assets/images/hero-bg.png'
import { SearchIcon } from '../../assets/icons/search-icon'
import { useGetPost } from './service/query/useGetPost'
import { Card } from '../../components/card/card'

export const Home = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const { data, fetchNextPage, isLoading, isPending, refetch } = useGetPost(searchTerm);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        refetch();
    }
    return (
        <div>

            <section className='mt-[85px] bg-fixed pt-[50px] pb-[80px] bg-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="container">
                    <ul className='flex items-center justify-center mb-[46px] gap-[14px]'>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Discover
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Animation
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Branding
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Illustration
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Mobile
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Print
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Product Design
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Typography
                            </a>
                        </li>
                        <li>
                            <a className=' transition-all duration-[0.4] bg-[#00000080] text-white text-[16px] py-4 px-5 rounded-full hover:bg-[#fff] hover:text-[#000]' href="#">
                                Web Design
                            </a>
                        </li>
                    </ul>
                    <h1 className=' font-bold text-white text-center mb-4 text-[32px] '>
                        Explore the world’s leading <br /> design portfolios
                    </h1>
                    <p className=' text-center text-white text-[16px] mb-[42px] '>
                        Millions of designers and agencies around the world showcase their portfolio work on <br /> Dribbble - the home to the world’s best design and creative professionals.
                    </p>
                    <form onSubmit={handleSubmit} className='relative max-w-[600px] mb-10 mr-auto ml-auto w-[100%] '>
                        <input
                            placeholder='Search...'
                            className='w-[100%] px-[56px] outline-none py-[21px] rounded-full'
                            type="search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <div className='absolute top-[50%] left-5 translate-y-[-50%]'>
                            <SearchIcon />
                        </div>
                    </form>

                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-white text-[12px]  '>Trending searches</p>
                        <ul className='flex items-center gap-3'>
                            <li>
                                <a className="border rounded-full px-4 py-[6px] text-white" href="">
                                    landing page
                                </a>
                            </li>
                            <li>
                                <a className="border rounded-full px-4 py-[6px] text-white" href="">
                                    ios
                                </a>
                            </li>
                            <li>
                                <a className="border rounded-full px-4 py-[6px] text-white" href="">
                                    food
                                </a>
                            </li>
                            <li>
                                <a className="border rounded-full px-4 py-[6px] text-white" href="">
                                    uxdesign
                                </a>
                            </li>
                            <li>
                                <a className="border rounded-full px-4 py-[6px] text-white" href="">
                                    app design
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='py-[40px]'>
                <div className="container">
                    {isLoading ? (
                        <div className='grid grid-cols-4 gap-9 mb-10'>
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='grid grid-cols-4 gap-9 mb-10'>
                            {data?.pages?.map((pages) => pages?.map((item) => (
                                <Card key={item.id} {...item} />
                            )))}
                        </div>

                    )}
                    <div className='flex items-center justify-center'>
                        <button
                            onClick={() => fetchNextPage()}
                            className={`bg-blue-400 py-3 px-6 text-white rounded-md border border-blue-400 hover:bg-transparent hover:text-blue-400 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'View More'}
                        </button>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
