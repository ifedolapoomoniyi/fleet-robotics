"use client"
import React from 'react';

const Button = () => {
    return (
        <div>
            <div className="inline-flex justify-start items-center gap-1.5">
                <div className="w-60 p-3.5 bg-white rounded-sm flex justify-center items-center gap-2.5">
                    <div className="justify-start text-black text-lg font-medium">
                        Explore the Marketplace
                    </div>
                </div>
                <div className="w-12 h-12 relative bg-white rounded-sm overflow-hidden">
                    <div className="w-2.5 h-4 left-[21.33px] top-[16px] absolute">
                        <div className="w-1 h-1 left-0 top-0 absolute bg-orange-600" />
                        <div className="w-1 h-1 left-0 top-[13.33px] absolute bg-orange-600" />
                        <div className="w-1 h-1 left-[6.67px] top-[6.67px] absolute bg-orange-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Button;