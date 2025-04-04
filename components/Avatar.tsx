import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
    const { data: fetchedUser, mutate } = useUser(userId);
    const router = useRouter();

    const onClick = useCallback(
        (event: any) => {
            event.stopPropagation(); //stop parent onClick from being triggered

            const url = `/users/${userId}`;
            router.push(url);
        },
        [router, userId]
    );

    return (
        <div
            className={`
                    ${hasBorder ? 'border-4 border-black' : ''}
                    ${isLarge ? 'h-32' : 'h-12'}
                    ${isLarge ? 'w-32' : 'w-12'}
                    rounded-full
                    transition hover:opacity-90 cursor-pointer relative
                    `}
        >
            <Image
                fill
                style={{ objectFit: 'cover', borderRadius: '100%' }}
                alt="Avatar"
                onClick={onClick}
                src={fetchedUser?.profileImage || '/images/placeholder.png'}
            />
        </div>
    );
};

export default Avatar;
