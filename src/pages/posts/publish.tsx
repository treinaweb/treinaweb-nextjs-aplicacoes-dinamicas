import { FormEvent, useRef, useState } from 'react';
import { ApiService } from '../../data/services/ApiService';
import styles from '../../ui/styles/pages/posts/publish.module.css';

export default function PostsPublish() {
    const [title, setTitle] = useState(''),
        [description, setDescription] = useState(''),
        [picture, setPicture] = useState(''),
        blogEditorRef = useRef<HTMLDivElement>(null);

    async function sendPost(event: FormEvent) {
        event.preventDefault();
        const postContent = blogEditorRef.current?.innerHTML || '';
        if (
            title.length > 0 &&
            description.length > 0 &&
            picture.length > 0 &&
            postContent.length > 0
        ) {
            await ApiService.post('posts', {
                data: {
                    title,
                    description,
                    picture,
                    content: postContent,
                },
            });
            resetForm();
        }
    }

    function resetForm() {
        setTitle('');
        setDescription('');
        setPicture('');
        if (blogEditorRef.current) {
            blogEditorRef.current.innerHTML = '';
        }
    }

    return (
        <>
            <h2 className={styles['page-title']}>Novo Post</h2>
            <form onSubmit={sendPost} className={styles['post-form']}>
                <input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Título"
                    type="text"
                />
                <input
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Descrição"
                    type="text"
                />
                <input
                    value={picture}
                    onChange={(event) => setPicture(event.target.value)}
                    placeholder="Imagem"
                    type="url"
                />

                <div
                    className={styles['post-content']}
                    contentEditable
                    ref={blogEditorRef}
                />
                <button type="submit">Publicar</button>
            </form>
        </>
    );
}
