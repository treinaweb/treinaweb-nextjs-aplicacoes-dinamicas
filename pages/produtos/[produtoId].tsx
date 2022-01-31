import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Categoria() {
    const router = useRouter();
    const [produto, setProduto] = useState({ nome: '' });

    useEffect(() => {
        if (router.query.produtoId) {
            fetch(
                'http://localhost:3000/api/produtos?id=' +
                    router.query.produtoId
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setProduto(data);
                    }
                });
        }
    }, [router]);

    return (
        <div>
            SELECIONADO: {produto?.nome}
            <ul>
                <li>
                    <Link href="/produtos/123">
                        <a>Chocolate</a>
                    </Link>
                </li>
                <li>
                    <Link href="/produtos/456">
                        <a>Sorvete</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
