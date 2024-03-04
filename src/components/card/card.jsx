import React from 'react'
import { ViewIcon } from '../../assets/icons/view-icon'
import { LikeIcon } from '../../assets/icons/like-icon'

export const Card = (props) => {
    return (
        <div className=''>
            <div className='mb-[10px] relative group overflow-hidden cursor-pointer rounded-xl'>
                <div className='absolute bg-[#00000098] flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                    <button className=' text-white border  z-20 border-white py-2 px-4 rounded-xl'>VIEW</button>
                </div>
                <img className=' object-cover object-center group-hover:scale-[1.2] transition-all duration-[0.7s] ' src={props.image} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <div>
                        <img src={props.profileImg} alt="" />
                    </div>
                    <h1 className='text-[14px] font-medium text-[#0D0C22] '>{props.name.slice(0, 18)}</h1>
                    <span className='text-white font-bold text-[10px] py-[3px] px-[5px] bg-[#CCCCCC] rounded-md'>{props.type}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <LikeIcon />
                        <span className='text-[12px] text-[#3D3D4E] font-medium '>
                            {props.likes}
                        </span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <ViewIcon />
                        <span className='text-[12px] text-[#3D3D4E] font-medium '>
                            {props.views}k
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
