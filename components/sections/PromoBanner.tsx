"use client";
import React, { useState } from 'react';
import { Sparkles, BadgeX } from 'lucide-react';

const PromoBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    if(!isVisible) return null;
    return (
        <div className='bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white'>
                <div className='flex py-3'>
                    <div className='flex items-center mx-auto'>
                        <Sparkles className='h-5 w-5 animate-pulse text-yellow-200' />
                        <p className='text-xs md:text-base font-medium'>
                            Say 'I Love You' in a Unique Way – Exclusive Valentine's Discounts{' '}
                            <span className='inline-block font-bold bg-white/10 px-2 py-0.5 rounded-full animate-pulse'>
                                Get 60% OFF!
                            </span>
                        </p>
                        <Sparkles className='h-5 w-5 animate-pulse text-yellow-200' />
                        
                    </div>
                    <div className='mr-10'>
                            <button
                                onClick={() => setIsVisible(false)}
                                className='text-white/80 hover:text-white transition-colors cursor-pointer'
                                aria-label='Close promotion banner'
                            >
                                <BadgeX/>
                            </button>   
                    </div>
                </div>
        </div>
    );
};

export default PromoBanner;