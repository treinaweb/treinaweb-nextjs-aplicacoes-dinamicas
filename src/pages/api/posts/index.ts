import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BlogPost } from '../../../data/@types/BlogPostInterface';
import { getSession } from 'next-auth/react';

const PostsApis = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_DB}/posts`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    if (!session && req.method !== 'GET') {
        res.status(401).send({ error: 'Unauthorized' });
        return;
    }
    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        case 'POST':
            return handlePost(req, res);
        case 'PUT':
            return handlePut(req, res);
        default:
            res.status(405).send({ error: 'Method not allowed' });
    }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const posts = await PostsApis.get('/');
    res.status(200).json(posts.data);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    const newPost = req.body.data as BlogPost;
    newPost.slug = newPost.title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]+/g, '');

    const createdPost = await PostsApis.post('/', newPost);
    res.status(200).json(createdPost.data);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
    const newPost = req.body.data as BlogPost;

    await PostsApis.put('/', newPost, {
        params: {
            id: newPost.id,
        },
    });
    res.status(200).end();
}
