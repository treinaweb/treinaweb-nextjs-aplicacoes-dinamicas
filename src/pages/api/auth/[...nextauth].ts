import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
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
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});
