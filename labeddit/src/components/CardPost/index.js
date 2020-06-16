import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../Configs/url'
import './styles.css'



const CardPost = () => {

    const history = useHistory()
    const user = window.localStorage.getItem('username')
    const [tituloPost, setTituloPost] = useState('')
    const [textarea, setTextarea] = useState('')

    const onChangeTitulo = event => {

        setTituloPost(event.target.value)
    }

    const onChangeText = event => {
        setTextarea(event.target.value);
      }

      const onSubmitPostar = event => {
        event.preventDefault()
        const token = window.localStorage.getItem('token')
        const body = {
            title: tituloPost,
            text: textarea
          };
          if (!token) {
            history.push("/");
          } else {
            axios.post(`${baseUrl}/posts`, body, {
              headers: {
                Authorization: token
              }
            });
          }
        };

        return (
            <div className="FormPost">
            <form onSubmit={onSubmitPostar}>
              <input
                className="input Titulo"
                type="text"
                placeholder="Qual o titulo do texto?"
                value={tituloPost}
                onChange={onChangeTitulo}
                required
              />
              <textarea
                className="input Textarea"
                type="textarea"
                placeholder={`No que está pensando, ${user}?`}
                value={textarea}
                onChange={onChangeText}
                required
              />
              <button className="Btn Postar">
                POSTAR
              </button>
            </form>
          </div>
          );

}

export default CardPost