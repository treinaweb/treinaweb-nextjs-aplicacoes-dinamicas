import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

export async function getServerSideProps(context: GetServerSideProps) {
    const id = context.params.produtoId;

    if (id) {
        const response = await fetch(
            'http://localhost:3000/api/produtos?id=' + id
        );
        const data = await response.json();

        if (data) {
            return {
                props: {
                    produto: data,
                },
            };
        }
    }

    return { props: { produto: {} } };
}

export default function Categoria({ produto = { nome: '' } }) {
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
