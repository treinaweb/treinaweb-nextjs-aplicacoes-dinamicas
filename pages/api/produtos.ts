import type { NextApiRequest, NextApiResponse } from 'next';

export default function ProdutosApi(req: NextApiRequest, res: NextApiResponse) {
    console.log('MÉTODO: ', req.method);
    console.log('OBJETO: ', req.body);

    res.status(200).json({
        abc: 123,
    });
}
