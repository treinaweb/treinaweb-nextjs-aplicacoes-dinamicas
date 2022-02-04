import { GetServerSidePropsContext } from 'next';
import { BlogPost } from '../../data/@types/BlogPostInterface';
import { ApiService } from '../../data/services/ApiService';
import PostBody from '../../ui/components/PostBody/PostBody';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const slug = context?.params?.postSlug;

    const posts = await ApiService.get<BlogPost[]>('posts');
    const post = posts.data.find((post) => post.slug === slug);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
    };
}

export default function MeuPost({ post }: { post: BlogPost }) {
    return (
        <>
            <PostBody post={post} />
        </>
    );
}
