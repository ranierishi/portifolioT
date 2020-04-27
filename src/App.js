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
               
               <li>                  
                <span>
                  <h2>Caçada Autêntica Minas Shopping</h2>
                  <h3>Games & Realidade Aumentada & Marketing</h3>
                  <h5>O Natal no Minas Shopping em 2017 foi muito especial! Além da pompa e circunstância comuns ao grande evento, esse ano contamos com a presença ilustre do Marco Túlio; o Authentic Games, trazendo todos os personagens do mundo Authentic consigo.
                  Nesse espírito, a Gaz Games desenvolveu um jogo com Realidade Aumentada, que consistia nos convidados percorrerem o shopping em busca de imagens do universo Authentic e capturá-las com seus smartphones e tablets. Ao fazê-lo, os convidados eram presenteados
                  com várias animações 3D dos personagens que, juntas, contavam a história do Authentic buscando o presente de Natal da Lydia.
                  Além de toda a experiência da caçada, os jogadores que completavam o jogo eram agraciados com um minigame exclusivo!
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/OZHyD7Si1jg' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Fábrica Extraordinária Brahma Extra</h2>
                  <h3>Aplicativos & Realidade Aumentada & Marketing</h3>
                  <h5>Durante o Comida di Buteco 2017, a Brahma criou, no pátio do Mineirinho, uma miniatura lúdica de uma fábrica de cerveja, com galões e tambores, e todos os ingredientes utilizados no processo de criação da bebida, para que os visitantes aprendessem um pouco sobre as origens da cerveja.
                  Em adição à essa imersão, a Gaz Games foi convidada para desenvolver um aplicativo de realidade aumentada que interagia diretamente com esses props reais, mostrando a parte do processo que não era possível naquela situação. Interiores de tambor, processos de filtro e misturas, todo o caminho, do início ao fim, até o engarrafamento.
                  Uma experiência completa, com modelos 3D imersivos e detalhados e uma grande carga de informações, sobre a produção e sobre a degustação ideal das três cervejas prestigiadas: a Brahma Extra Lager, Brahma Extra Red Lager e Brahma Extra Weiss.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/YN3HJnzGPGU' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Extrato da Beleza Embelleze</h2>
                  <h3>Aplicativos & Realidade Aumentada & Marketing</h3>
                  <h5>Buscando divulgar seu projeto de Loja Conceito, a Araújo nos convidou para visitar a primeira loja nesse novo formato e assim produzir a réplica dela em miniatura 3D. Assim nasceu o Araújo Venda Mais Experience.
                  Através da realidade aumentada, era possível fazer um tour virtual pela Loja Conceito, vendo as novas organizações de gôndolas, serviço de atendimento, espaço planejado de estacionamento e muito mais! Com o livre controle no modelo 3D, é fácil explorar a loja inteira.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/2pMnogYJ5OI' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>CASE Construction Mundo Real Xperience 580N</h2>
                  <h3>Realidade Virtual & Games & Simuladores</h3>
                  <h5>A Gaz Games esteve presente, do dia 26 a 29 de novembro, na Feira Internacional de Equipamentos para Construção e Mineração (M&T 2018), onde se reúnem expositores de todo o mundo para conhecer as últimas novidades em soluções, equipamentos e tecnologias para o setor de construção e mineração.
                  O projeto que apresentamos nesta feira é feito em parceria com a CASE Construction, e tem como objetivo entreter e informar os visitantes com um simulador em Realidade Virtual de todas as funções de um operador da Retroescavadeira Case 580N.
                  São três desafios que abordam diferentes modos de operação e diferentes dificuldades a serem superadas por essa máquina, em conjunto com o usuário.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/ONHiyG7j-GY' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Corrida do Shake - Authentic Games</h2>
                  <h3>Games & Marketing</h3>
                  <h5>Viajando pelo Brasil com sua tour, Marco Túlio; o AuthenticGames, desenvolveu conosco um jogo utilizado em uma seção do seu show, interagindo com a plateia.
                  No jogo, a plateia se movimenta para guiar o host do show nos movimentos que deve tomar, para controlar o Shake, personagem principal do jogo e o cãozinho melhor amigo do Authentic. 
                  O jogo conta com 3 cenários, cada qual com uma mecânica e dificuldade diferente.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/hc_l70tvYnI' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Vilma Kart</h2>
                  <h3>Marketing & Games & Realidade Aumentada</h3>
                  <h5>Em parceria conosco, a Vilma Alimentos desenvolveu esse incrível jogo de corrida controlado por bolachas (ou biscoitos) de papel, tematizados e equipados com um código, lido por uma câmera disposta no estande.
                  Dessa forma os visitantes competem entre si, para controlar seus karts em cada metade da tela.
                  Essa solução foi apresentada na SuperMinas FoodShow 2016 e SuperRio FoodShow 2017.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/fCwD5xMMJB8' />
                </PlayerWrapper>
               </li>

               <li>                  
                <span>
                  <h2>Simulador de Montanha Russa Gaz Games</h2>
                  <h3>Simuladores & Realidade Virtual</h3>
                  <h5>Desenvolvido em 2016, com suporte de atualizações até os dias de hoje, o Simulador de Montanha Russa Gaz Games é um projeto de realidade virtual, desenvolvido para Oculus Rift, que consiste em pistas originais
                     de montanha russa virtual, em cenários variados e imersivos, capacitados com sons e vibração no carrinho físico, divididos em categorias para toda a sorte de gostos.
                  O produto é comercial, e informações de aluguel e compra podem ser encontradas nos meios de contato disponíveis no site.
                  </h5>
                </span>
                <PlayerWrapper>
                  <ReactPlayer  url='https://youtu.be/xvl5pk-MNWw' />
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
        <h1> Arthur Iung - Made by Lucas Ranieri</h1>
      </Footer>

    </Container>      
  );
}

