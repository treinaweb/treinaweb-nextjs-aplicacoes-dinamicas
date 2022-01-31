import { useRouter } from 'next/router';

export default function Produto() {
    const router = useRouter();

    return <div>Produto - {router.query.id}</div>;
}
