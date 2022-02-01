import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    GetServerSideProps,
    GetStaticProps,
    GetStaticPropsContext,
} from 'next';

export async function getStaticPaths() {
    return {
        paths: [
            { params: { produtoId: '123' } },
            { params: { produtoId: '456' } },
        ],
        fallback: true,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context?.params?.produtoId;

    const listaProdutos = [
        { id: '123', nome: 'Chocolate' },
        { id: '456', nome: 'Sorvete' },
    ];

    if (id) {
        const produto = listaProdutos.find((produto) => produto.id === id);
        if (produto) {
            return {
                props: {
                    produto,
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
