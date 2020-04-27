import React from 'react';
import {Container,Section, Section2, Section3, Footer, PlayerWrapper} from './styles'
import ReactPlayer from 'react-player'
import FormikForm from "./FormikForm";


export default function App() {
  return (
    <Container>     

      <Section >
        <span>

        <div>

          <h1>Arthur Iung</h1>
          <h2>Game Designer</h2>
          <h3>​Hello! My name is Arthur Iung and I am a game designer with a degree
            in Game Desing.
            Currently I am working as a Senior Game Designer at Gaz Games.​
              Below you can find my portfolio highlighting my game development work.
          </h3>
        
        </div>
        </span>
          <img src={require('./img/img3.jpeg')}
          alt=''></img>
      </Section>

      <Section2>
        <article>

          <div>
            <h1> Projects </h1>
          </div>
          
             <ul>
               <li>                  
                <span>
                  <h2>Skol Hops Teste Cérebro</h2>
                  <h3>Aplicativos & Marketing & Simuladores</h3>
                  <h5>O "Jângalove. Movimento Ritmo." foi um evento aberto ao público em Belo Horizonte. O evento tinha como tema a saudade da folia, promovendo uma dose de fim de ano para receber a energia do carnaval. Em meio os shows e barraquinhas, oficinas de percursão e muito mais, a Gaz Games estava lá para trazer tecnologia e inovação.
                  Em parceria com a Skol, desenvolvemos um aplicativo utilizando um leitor de ondas cerebrais para definir perfis de cervejeiros nas pessoas que experimentavam a cerveja do momento: Skol Hops. O usuário chegava no estande, se sentava em frente à um telão com um cérebro em 3D. Munia-se de um fone que tocava um áudio binaural, ou seja, 360 graus de narração dinâmica, que guiava o usuário em como abrir, saborear e sentir a cerveja.
                  Em paralelo, o leitor enviava dados, refletidos no telão em tempo real, das ondas dentro da cabeça do usuário enquanto experimentava uma Skol Hops em sua magnitude. Por fim, definia-se um perfil cervejeiro com base nos movimentos de suas ondas, e permitia-se fotos da pessoa com um still do seu cérebro. Foi um evento muito divertido de comparecer, novamente misturando o lúdico com o tecnológico, especialidade da Gaz Games.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/bCOh6BBPCRQ' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Robbyson Land</h2>
                  <h3>Aplicativos & Realidade Aumentada & Games</h3>
                  <h5>Desenvolvido em 2016/7, com suporte de atualizações até os dias atuais, Robbyson Land é um jogo produzido em parceria com a AeC e a marca Robbyson, para divulgar, entreter e estreitar as relações dos usuários e a plataforma Robbyson.
                  Através de um mundo em miniatura, com personagens e locais fictícios da cidade Robbyson Land, o jogador tem tarefas como cuidar do seu avatar, ter uma carreira e ir ao trabalho, à faculdade, responder à necessidades da cidade e seus habitantes, enquanto pode se divertir com jogos e personalizar o seu avatar.
                  Disponível na Google Play e App Store, Robbyson Land é um jogo de gerenciamento de personagem, divertido e que une os universos corporativo e lúdico.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/wc0V4g6At1s' />
                </PlayerWrapper>
               </li>
               
             </ul>
          
          

        </article>
      </Section2>

      <Section3>
        <FormikForm/>
      </Section3>

      <Footer>
        <h1>Copyright © 2020</h1>
        <h1> Lucas Ranieri</h1>
      </Footer>

    </Container>      
  );
}

