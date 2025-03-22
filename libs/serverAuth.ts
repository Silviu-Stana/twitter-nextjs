import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    if (!session?.user?.email) {
        console.log('Not signed in.');
        return null;
    }

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (!currentUser) {
        console.log('Not signed in!');
        return null;
    }

    return { currentUser };
};

export default serverAuth;
