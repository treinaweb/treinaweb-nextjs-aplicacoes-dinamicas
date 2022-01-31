import type { NextApiRequest, NextApiResponse } from 'next';

const listaProdutos = [
    { id: '123', nome: 'Chocolate' },
    { id: '456', nome: 'Sorvete' },
];

export default function ProdutosApi(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;
    const produto = listaProdutos.find((produto) => produto.id === id);
    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).end();
    }
}
