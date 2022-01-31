import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Categoria() {
    const router = useRouter();

    return (
        <div>
            Categoria - {router.query.categoria} - {router.query.id}
            <button onClick={() => router.push('/produtos/ABC')}>ABC</button>
            <ul>
                <li>
                    <Link href="/produtos/cosmeticos?id=123">
                        <a>Cosméticos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/produtos/doces">
                        <a>Doces</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
