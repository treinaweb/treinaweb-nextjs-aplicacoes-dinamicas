import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002/api/posts',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        default:
            res.status(405).send({ error: 'Method not allowed' });
    }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const posts = await PostsApis.get('/');
    res.status(200).json(posts.data);
}
