import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prismadb from '@/libs/prismadb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).end();
    const { email, username, name, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                username,
                name,
                hashedPassword,
            },
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}
