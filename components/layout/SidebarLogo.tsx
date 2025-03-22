import { useRouter } from 'next/router';
import React from 'react';
import { BsTwitterX } from 'react-icons/bs';

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push('/')}
            className="rounded-full
            h-14 w-14 p-4
            flex items-center justify-center
            hover:bg-white/10 cursor-pointer transition"
        >
            <BsTwitterX size={28} color="white" />
        </div>
    );
};

export default SidebarLogo;
