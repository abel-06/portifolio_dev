import './App.css'
import Header from './components/Header'
import { FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'


function App() {

  return (
    <div>
      <Header />
      <div className="container">
        <img
        src="/Screenshot_20250521_120159_Gallery.jpg" alt='imagem de perfil'
        className='imagem-perfil'
         />
      </div>
      <div className='apresentacao'>
        <h1>Olá, me chamo Abel <br /> Prazer em te conhecer!</h1>
        <p>Sou estudante de programação e estou aprendendo a desenvolver aplicações web. <br />
          Utilizo como minha principal ferramenta o React. <br /> Fiz alguns projetos para estudar e desenvolver minhas habilidades.
        </p>
      </div>
      <div className='projetos'>
        <h1>
          <strong>Projetos</strong>
          </h1>
          <a href="https://abel-06.github.io/Financeiro-borracharia/" >
          <img src="/public/financeiro_print.jpg" alt="imagem borracharia" className='borracharia' />
          </a>
      </div>

      <div className='footer'>
        <h1>
          <strong>Contato</strong>
        </h1>
        <div className='social'>
          <a href="https://www.instagram.com/abel_melquiades/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
      </div>
      </div>
    </div>
  )
}

export default App
