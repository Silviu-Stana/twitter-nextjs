import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FaFeatherPointed } from 'react-icons/fa6';

const SidebarTweetButton = () => {
    const router = useRouter();

    const loginModal = useLoginModal();

    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);

    return (
        <div onClick={onClick}>
            <div
                className="mt-6 lg:hidden rounded-full h-14 w-14 p-4
            flex items-center justify-center 
            bg-white hover:opacity/80 transition cursor-pointer"
            >
                <FaFeatherPointed size={24} color="black" />
            </div>
            <div
                className="mt-6 hidden lg:block px-4 py-4 rounded-full
            bg-white hover:opacity-90
            cursor-pointer transition"
            >
                <p className="hidden lg:block text-center font-bold text-[18px]">
                    Post
                </p>
            </div>
        </div>
    );
};

export default SidebarTweetButton;
