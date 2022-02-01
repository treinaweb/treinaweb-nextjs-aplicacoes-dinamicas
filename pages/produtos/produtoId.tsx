import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';

export async function getStaticProps(context: GetStaticProps) {
    // const id = context.params.produtoId;
    const id = '123';

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
