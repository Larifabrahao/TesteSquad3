import { motion } from 'framer-motion';
import styles from './Filmes.css';

import React, { Component } from "react";
import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }







export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <motion.div className={styles.divPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} >
                <main>
                    <Slider {...settings}>
                        <section id="dsmovie-card-list" className="container">

                            <div id="row">

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://static.wixstatic.com/media/0873f1_78a0f4031b804974b4b473c9baf9aa81~mv2.jpg/v1/fill/w_640,h_948,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0873f1_78a0f4031b804974b4b473c9baf9aa81~mv2.jpg"
                                            alt="Ex_Machina: Instinto Artificial" />
                                        <div className="dsmovie-card-description">
                                            <h3>Ex_Machina: Instinto Artificial</h3>
                                            <p>Um jovem programador chamado Caleb ganha um concurso e recebe a oportunidade de testar uma inteligência artificial criada por Nathan, um brilhante e recluso bilionário. Mas conforme os testes progridem, Caleb descobre que essa inteligência artificial é tão sofisticada e imprevisível que ele não sabe mais em quem confiar.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>1h 48min / Ficção científica, Suspense</h4>
                                                <h5>Sala 1</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://www.cafecomfilme.com.br/media/k2/items/cache/b414e2ba4719c9b4ceec2e3c09e2491b_XL.jpg?t=20151027_042728"
                                            alt="Us" />
                                        <div className="dsmovie-card-description">
                                            <h3>O Jogo da Imitação</h3>
                                            <p>Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de "Enigma", enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>1h 55min / Biografia, Drama</h4>
                                                <h5>Sala 2</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://br.web.img3.acsta.net/pictures/20/03/27/18/28/4918391.jpg"
                                            alt="Coded Bias" />
                                        <div className="dsmovie-card-description">
                                            <h3>Coded Bias</h3>
                                            <p>Esse documentário investiga o viés nos algoritmos depois que a pesquisadora do MIT Joy Buolamwini descobriu falhas na tecnologia de reconhecimento facial.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>1h 30min / Documentário</h4>
                                                <h5>Sala 3</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://1.bp.blogspot.com/-H9AfbrPIxkA/YGOBnT2bGbI/AAAAAAAAkmo/fUmrBM89Eq4LdqwcOX3qNlE9lXNinpo_ACLcBGAsYHQ/s1024/estrelas-al%25C3%25A9m-do-tempo-738x1024.png"
                                            alt="Estrelas Além do Tempo" />
                                        <div className="dsmovie-card-description">
                                            <h3>Estrelas Além do Tempo</h3>
                                            <p>No auge da corrida espacial travada entre Estados Unidos e Rússia durante a Guerra Fria, uma equipe de cientistas da NASA, formada exclusivamente por mulheres afro-americanas, provou ser o elemento crucial que faltava na equação para a vitória dos Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história americana e se tornando verdadeiras heroínas da nação.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>2h 7m / Drama, Ficção histórica</h4>
                                                <h5>Sala 4</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://images.justwatch.com/poster/270188247/s592/a-rede-social"
                                            alt="A Rede Social" />
                                        <div className="dsmovie-card-description">
                                            <h3>A Rede Social</h3>
                                            <p>Em uma noite de outono em 2003, Mark Zuckerberg, estudante de Harvard e gênio da computação, começa a trabalhar em um novo conceito que acaba se transformando em uma rede social global conhecida como Facebook. Seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso de sua rede social. No entanto, a sua ascensão sem precedentes traz complicações legais e pessoais.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4> 2h 00min / Drama</h4>
                                                <h5>Sala 5</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://cinemacomrapadura.com.br/imagens/2016/06/20160614-snowden_poster.jpg"
                                            alt="Snowden" />
                                        <div className="dsmovie-card-description">
                                            <h3>Snowden</h3>
                                            <p>Depois de trabalhar durante anos na Agência de Segurança Nacional, Edward Snowden decide entregar documentos secretos de ações de invasão de privacidade do governo dos Estados Unidos.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>2h 15min / Suspense, Biografia</h4>
                                                <h5>Sala 6</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://image.tmdb.org/t/p/original/9sML6FGEDVPg1ecAWHmX03xg1O.jpg"
                                            alt="Os Invasores" />
                                        <div className="dsmovie-card-description">
                                            <h3>Invasores - Nenhum Sistema Está Salvo</h3>
                                            <p>Benjamin, um jovem gênio da informática é convidado para se integrar a um subversivo grupo de hackers que procura a atenção por todo o mundo</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4>1h 46min / Suspense</h4>
                                                <h5>Sala 7</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                                    <div className="dsmovie-card">
                                        <img src="https://br.web.img3.acsta.net/pictures/210/250/21025081_20130806175503533.jpg"
                                            alt="Jobs" />
                                        <div className="dsmovie-card-description">
                                            <h3>Jobs</h3>
                                            <p>Em 1976, Steve Jobs abandona a faculdade e, junto com seu amigo Steve Wozniak, um gênio da tecnologia, inicia uma revolução informática com a invenção do Apple 1, o primeiro computador pessoal. A máquina, construída na garagem dos pais de Jobs, e a fundação da empresa Apple mudam o mundo para sempre. Sem se incomodar em passar por cima dos outros para atingir seus objetivos, Steve tem dificuldades em manter relações amorosas e de amizade.</p>
                                            <div className="dsmovie-card-description-bottom">
                                                <h4> 2h 13min / Biografia, Drama</h4>
                                                <h5>Sala 8</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </section>
                    </Slider>
                </main>
            </motion.div>
        )
    }
}












// function Filmes() {
//     return (
//         <motion.div className={styles.divPage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }} >
//             <main>

//                 <section id="dsmovie-card-list" className="container">
//                     <div id="row">

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://static.wixstatic.com/media/0873f1_78a0f4031b804974b4b473c9baf9aa81~mv2.jpg/v1/fill/w_640,h_948,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0873f1_78a0f4031b804974b4b473c9baf9aa81~mv2.jpg"
//                                     alt="Ex_Machina: Instinto Artificial" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Ex_Machina: Instinto Artificial</h3>
//                                     <p>Um jovem programador chamado Caleb ganha um concurso e recebe a oportunidade de testar uma inteligência artificial criada por Nathan, um brilhante e recluso bilionário. Mas conforme os testes progridem, Caleb descobre que essa inteligência artificial é tão sofisticada e imprevisível que ele não sabe mais em quem confiar.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>1h 48min / Ficção científica, Suspense</h4>
//                                         <h5>Sala 1</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://www.cafecomfilme.com.br/media/k2/items/cache/b414e2ba4719c9b4ceec2e3c09e2491b_XL.jpg?t=20151027_042728"
//                                     alt="Us" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>O Jogo da Imitação</h3>
//                                     <p>Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de "Enigma", enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>1h 55min / Biografia, Drama</h4>
//                                         <h5>Sala 2</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://br.web.img3.acsta.net/pictures/20/03/27/18/28/4918391.jpg"
//                                     alt="Coded Bias" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Coded Bias</h3>
//                                     <p>Esse documentário investiga o viés nos algoritmos depois que a pesquisadora do MIT Joy Buolamwini descobriu falhas na tecnologia de reconhecimento facial.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>1h 30min / Documentário</h4>
//                                         <h5>Sala 3</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://1.bp.blogspot.com/-H9AfbrPIxkA/YGOBnT2bGbI/AAAAAAAAkmo/fUmrBM89Eq4LdqwcOX3qNlE9lXNinpo_ACLcBGAsYHQ/s1024/estrelas-al%25C3%25A9m-do-tempo-738x1024.png"
//                                     alt="Estrelas Além do Tempo" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Estrelas Além do Tempo</h3>
//                                     <p>No auge da corrida espacial travada entre Estados Unidos e Rússia durante a Guerra Fria, uma equipe de cientistas da NASA, formada exclusivamente por mulheres afro-americanas, provou ser o elemento crucial que faltava na equação para a vitória dos Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história americana e se tornando verdadeiras heroínas da nação.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>2h 7m / Drama, Ficção histórica</h4>
//                                         <h5>Sala 4</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://images.justwatch.com/poster/270188247/s592/a-rede-social"
//                                     alt="A Rede Social" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>A Rede Social</h3>
//                                     <p>Em uma noite de outono em 2003, Mark Zuckerberg, estudante de Harvard e gênio da computação, começa a trabalhar em um novo conceito que acaba se transformando em uma rede social global conhecida como Facebook. Seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso de sua rede social. No entanto, a sua ascensão sem precedentes traz complicações legais e pessoais.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4> 2h 00min / Drama</h4>
//                                         <h5>Sala 5</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://cinemacomrapadura.com.br/imagens/2016/06/20160614-snowden_poster.jpg"
//                                     alt="Snowden" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Snowden</h3>
//                                     <p>Depois de trabalhar durante anos na Agência de Segurança Nacional, Edward Snowden decide entregar documentos secretos de ações de invasão de privacidade do governo dos Estados Unidos.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>2h 15min / Suspense, Biografia</h4>
//                                         <h5>Sala 6</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://image.tmdb.org/t/p/original/9sML6FGEDVPg1ecAWHmX03xg1O.jpg"
//                                     alt="Os Invasores" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Invasores - Nenhum Sistema Está Salvo</h3>
//                                     <p>Benjamin, um jovem gênio da informática é convidado para se integrar a um subversivo grupo de hackers que procura a atenção por todo o mundo</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4>1h 46min / Suspense</h4>
//                                         <h5>Sala 7</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
//                             <div className="dsmovie-card">
//                                 <img src="https://br.web.img3.acsta.net/pictures/210/250/21025081_20130806175503533.jpg"
//                                     alt="Jobs" />
//                                 <div className="dsmovie-card-description">
//                                     <h3>Jobs</h3>
//                                     <p>Em 1976, Steve Jobs abandona a faculdade e, junto com seu amigo Steve Wozniak, um gênio da tecnologia, inicia uma revolução informática com a invenção do Apple 1, o primeiro computador pessoal. A máquina, construída na garagem dos pais de Jobs, e a fundação da empresa Apple mudam o mundo para sempre. Sem se incomodar em passar por cima dos outros para atingir seus objetivos, Steve tem dificuldades em manter relações amorosas e de amizade.</p>
//                                     <div className="dsmovie-card-description-bottom">
//                                         <h4> 2h 13min / Biografia, Drama</h4>
//                                         <h5>Sala 8</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </section>
//             </main>
//         </motion.div>
//     )
// }
// export default Filmes;