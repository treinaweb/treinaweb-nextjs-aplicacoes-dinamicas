import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BlogPost } from '../../../data/@types/BlogPostInterface';
import { getSession } from 'next-auth/react';

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002/api/posts',
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
        case 'DELETE':
            return handleDelete(req, res);
        default:
            res.status(405).send({ error: 'Method not allowed' });
    }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const post = await PostsApis.get('/', {
        params: {
            id: req.query.postId,
        },
    });

    if (post.data) {
        res.status(200).json(post.data);
    } else {
        res.status(404).send({
            error: 'Post not found',
        });
    }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
    await PostsApis.delete('/', {
        params: {
            id: req.query.postId,
        },
    });

    res.status(200).end();
}
