import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await blogFetch.get(`/posts/${id}`);
        const data = response.data;
        console.log(data);
        setTitle(data.title);
        setBody(data.body);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [id]);

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    try {
      await blogFetch.put(`/posts/${id}`, post);
      navigate("/");
    } catch (error) {
      console.log('Erro ao atualizar o post:', error);
    }
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={editPost}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Escreva aqui o conteúdo do seu Post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
