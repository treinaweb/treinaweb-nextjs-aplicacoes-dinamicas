import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Produto() {
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:3000/api/produtos')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    return <div>Produto - {router.query.id}</div>;
}
