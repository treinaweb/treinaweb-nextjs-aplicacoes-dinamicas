import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'TreinaBlog',
            credentials: {
                username: {
                    label: 'Nome de usuário',
                    type: 'text',
                    placeholder: 'Digite seu nome de usuário',
                },
                password: { label: 'Senha', type: 'password' },
            },
            async authorize(credentials, req) {
                if (
                    credentials &&
                    credentials.username === 'admin' &&
                    credentials.password === 'admin'
                ) {
                    return {
                        id: 1,
                        name: 'Administrador',
                        email: '',
                    };
                }

                return null;
            },
        }),
    ],
});
