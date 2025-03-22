import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { IconType } from 'react-icons';

interface SidebarItem {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
    auth?: boolean;
}

const SidebarItem: React.FC<SidebarItem> = ({
    label,
    href,
    icon: Icon,
    onClick,
    auth,
}) => {
    const { data: currentUser } = useCurrentUser();
    const loginModal = useLoginModal();
    const router = useRouter();
    const handleClick = useCallback(() => {
        if (onClick) return onClick();

        if (auth && !currentUser) {
            loginModal.onOpen();
        } else if (href) {
            router.push(href);
        }
    }, [auth, currentUser, href, loginModal, onClick, router]);

    return (
        <div onClick={handleClick} className="flex flex-row items-center">
            <div
                className="relative
            rounded-full cursor-pointer
            h-14 w-14 p-4 lg:hidden
            flex items-center justify-center
            hover:bg-slate-300/10"
            >
                <Icon size={24} color="white" />
            </div>
            <div className="relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300/10 cursor-pointer">
                <Icon size={24} color="white" />
                <p className="text-white hidden lg:block text-xl">{label}</p>
            </div>
        </div>
    );
};

export default SidebarItem;
