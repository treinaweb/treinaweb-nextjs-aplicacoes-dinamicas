import { useRouter } from 'next/router';

export default function Categoria() {
    const router = useRouter();

    return <div>Categoria - {router.query.categoria}</div>;
}
