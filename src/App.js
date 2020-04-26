import React from 'react';
import {Container,Section, Section2, Footer, PlayerWrapper} from './styles'
import ReactPlayer from 'react-player'

export default function App() {
  return (
    <Container>
      

      <Section >
        <div>

          <h1>Arthur Iung</h1>
          <h2>Game Designer</h2>
          <h3>​Hello! My name is Arthur Iung and I am a game designer with a degree
            in Game Desing.
            Currently I am working as a Senior Game Designer at Gaz Games.​
              Below you can find my portfolio highlighting my game development work.
          </h3>
        
        </div>
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
                  <h2>Oficina da Cooperação OCEMG</h2>
                  <h3>Aplicativos & Marketing & Simuladores</h3>
                  <h5>O Sistema OCEMG (Sindicato e Organização das Cooperativas do Estado de Minas Gerais) é um órgão de representação política, sindical-patronal e de defesa do cooperativismo em Minas. Nesse contexto, uma oficina com pequenas dinâmicas divertidas é realizada nas cooperativas para unir e conscientizar.
                      A Gaz Games se uniu a esse processo no intuito de gamificar, modernizar e melhorar esse sistema de dinâmicas com uma plataforma digital de jogos, para edição e reprodução, apresentando uma solução robusta em rede, mesclando iPads e um computador.
                      Atualmente carregado com quatro jogos de mecânica clássica, a plataforma já está sendo utilizada ao longo do estado, trazendo informação e diversão.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/wc0V4g6At1s' />
                </PlayerWrapper>
               </li>
               
             </ul>
          
          

        </article>
      </Section2>

      <Footer>
        <h1>Copyright © 2020</h1>
        <h1> Lucas Ranieri</h1>
      </Footer>

    </Container>      
  );
}

