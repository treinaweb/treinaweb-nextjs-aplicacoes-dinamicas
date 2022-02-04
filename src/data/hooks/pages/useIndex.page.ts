import { useEffect, useState } from 'react';
import { BlogPost } from '../../@types/BlogPostInterface';
import { ApiService } from '../../services/ApiService';

export default function useIndex() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        ApiService.get('posts').then((res) => setPosts(res.data));
    }, []);

    return {
        posts,
    };
}
