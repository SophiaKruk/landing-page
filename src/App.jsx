import Tecnologia from "./assets/img-tecnologia.webp";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <p>DESI V1/1 2026 - SENAI</p>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>
        {/* INÍCIO */}
        <section id="inicio" className="body">
          <h1>Transforme ideias em sistemas.</h1>

          <p className="pe">
            Desenvolva soluções, aprenda novas tecnologias e construa seu
            futuro na área de TI.
          </p>

          {/* Imagem + botão */}
          <div className="imagem-container">
            <img
              src={Tecnologia}
              alt="Pessoa utilizando tecnologia com diversos dispositivos digitais"
            />

            <button className="btn">Saiba mais</button>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="conteudo">
          <h2 className="textogran">
            O que é Desenvolvimento de Sistemas?
          </h2>

          <p>
            Desenvolvimento de Sistemas é o processo de criar, testar, manter
            e melhorar sistemas de software que ajudam pessoas ou empresas a
            realizar tarefas e resolver problemas.
          </p>

          <h2 className="textogran">
            Qual é o objetivo do curso?
          </h2>

          <p>
            O objetivo do curso é preparar o aluno para desenvolver sistemas e
            soluções tecnológicas, ensinando programação, banco de dados,
            desenvolvimento web, análise de sistemas, testes e outras
            tecnologias.
          </p>

          <p>
            Além da parte técnica, o curso também ajuda o aluno a desenvolver
            raciocínio lógico e capacidade de resolver problemas.
          </p>

          <h2 className="textogran">
            O que um profissional dessa área faz?
          </h2>

          <p>
            O profissional de Desenvolvimento de Sistemas pode:
          </p>

          <ul>
            <li>Criar sites e aplicativos;</li>
            <li>Programar sistemas;</li>
            <li>Criar e organizar bancos de dados;</li>
            <li>Testar sistemas e corrigir erros;</li>
            <li>Fazer manutenção e melhorias em programas;</li>
            <li>Analisar problemas e criar soluções usando tecnologia;</li>
            <li>Trabalhar em equipe no desenvolvimento de projetos.</li>
          </ul>
        </section>

        {/* CONHECIMENTOS */}
        <section
          id="tecnologias"
          className="conhecimentos"
        >
          <h2>Conhecimentos desenvolvidos no curso</h2>

          <p className="descricao">
            Durante o curso, aprendemos diferentes áreas da tecnologia e do
            desenvolvimento de sistemas.
          </p>

          <div className="cards">

            <div className="card">
              <h3>💡 Lógica de Programação</h3>
              <p>
                Aprendemos a criar algoritmos, resolver problemas e desenvolver
                o raciocínio lógico necessário para programar.
              </p>
            </div>

            <div className="card">
              <h3>🌐 Desenvolvimento Web</h3>
              <p>
                Criamos sites utilizando tecnologias como HTML, CSS e
                JavaScript, aprendendo a estruturar e estilizar páginas.
              </p>
            </div>

            <div className="card">
              <h3>🎨 Frontend</h3>
              <p>
                Trabalhamos com a parte visual das aplicações, criando
                interfaces interativas, organizadas e responsivas.
              </p>
            </div>

            <div className="card">
              <h3>⚙️ Backend</h3>
              <p>
                Aprendemos sobre a parte responsável pelo funcionamento interno
                dos sistemas, regras de negócio e processamento de informações.
              </p>
            </div>

            <div className="card">
              <h3>🗄️ Banco de Dados</h3>
              <p>
                Aprendemos a armazenar, organizar, consultar e gerenciar dados
                utilizados pelos sistemas.
              </p>
            </div>

            <div className="card">
              <h3>🔗 Desenvolvimento de APIs</h3>
              <p>
                Conhecemos APIs e como elas permitem que diferentes sistemas
                troquem informações entre si.
              </p>
            </div>

            <div className="card">
              <h3>📱 Aplicativos</h3>
              <p>
                Conhecemos conceitos relacionados ao desenvolvimento de
                aplicativos e soluções para dispositivos móveis.
              </p>
            </div>

            <div className="card">
              <h3>🔄 Versionamento de Código</h3>
              <p>
                Aprendemos a utilizar ferramentas como Git e GitHub para
                controlar versões, acompanhar alterações e colaborar em
                projetos.
              </p>
            </div>
            </div>
            <section className="tecnologias">
  <p>Crie uma área visual apresentando algumas tecnologias relacionadas ao curso.</p>

  <div className="tecnologias-lista">
    <button>HTML</button>
    <button>CSS</button>
    <button>JavaScript</button>
    <button>React</button>
    <button>Node.js</button>
    <button>SQL</button>
    <button>Git</button>
    <button>GitHub</button>
  </div>
</section>
  

          
        </section>
      </main>
    </>
  );
}

export default App;