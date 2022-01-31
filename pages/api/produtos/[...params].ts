import type { NextApiRequest, NextApiResponse } from 'next';

export default function ProdutoId(req: NextApiRequest, res: NextApiResponse) {
    const [categoria, subcategoria, id] = req.query.params;

    res.status(200).json({
        id,
        categoria,
        subcategoria,
    });
}
