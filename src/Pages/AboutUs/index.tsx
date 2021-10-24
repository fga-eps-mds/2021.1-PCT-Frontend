import React from "react";
import { Container, CardHeader, Card, TitleInfo, Image, DescriptionInfo, Contacts, ContactsInfo, CardContainer, ConfigImage } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import skype from "../../assets/images/logoSkype.png";
import fbLogo from "../../assets/images/facebook.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import home from "../../assets/images/home.png";

const AboutUs: React.FC = () => {
  const endereco = {
    width: '100px',
  }

  const telefone = {
    width: '150px',
  }

  const facebook = {
    marginTop: '40%',
  }

  return (
    <Container>
      <Header/>  
      <CardContainer>  
        <CardHeader>
          <TitleInfo>
            <h2>Projeto Nova Cartografia Social</h2>
          </TitleInfo>  
          <DescriptionInfo>
            <p>O Projeto Nova Cartografia Social da Amazônia (PNCSA) tem como objetivo dar ensejo à auto-cartografia dos povos 
              e comunidades tradicionais na Amazônia. Com o material produzido, tem-se não apenas um maior conhecimento sobre 
              o processo de ocupação dessa região, mas sobretudo uma maior ênfase e um novo instrumento para o fortalecimento 
              dos movimentos sociais que nela existem. Tais movimentos sociais consistem em manifestações de identidades coletivas, 
              referidas a situações sociais peculiares e territorializadas. Estas territorialidades específicas, construídas socialmente 
              pelos diversos agentes sociais, é que suportam as identidades coletivas objetivadas em movimentos sociais. 
              A força deste processo de territorialização diferenciada constitui o objeto deste projeto. A cartografia se mostra como 
              um elemento de combate. A sua produção é um dos momentos possíveis para a auto-afirmação social. É nesse sentido que o 
              PNCSA busca materializar a manifestação da auto-cartografia dos povos e comunidades nos fascículos que publica, que não só 
              pretendem fortalecer os movimentos, mas o fazem mediante a transparência de suas expressões culturais diversas.<br/><br/>

              Cada fascículo é resultado de uma relação social específica entre um povo ou comunidade tradicional e a equipe de 
              pesquisadores. É o movimento social que busca o PNSCA para realizar a cartografia. A partir desse interesse manifesto, 
              é realizada uma oficina de mapas com a participação de cerca de 30 agentes sociais e os pesquisadores membros do Projeto. 
              Nela, os pesquisadores ensinam técnicas de GPS e de mapeamento, além de conversar com os agentes e coletar depoimentos 
              sobre a história social e problemas da comunidade. Os agentes sociais produzem croquis, mapeando sua região e indicando 
              quais os elementos relevantes para a sua composição. Em um segundo momento, sem a presença dos pesquisadores, os agentes 
              sociais marcam, com GPS, os pontos do que consideram significativo de seu território. Na seqüência, o PNSCA recolhe as 
              informações das marcações de ponto e as georeferencia na base cartográfica, inserindo as ilustrações produzidas nos croquis. 
              Essas ilustrações compreendem desenhos, esboços e reproduções de símbolos e objetos (remos, casas, embarcações, instrumentos 
              de trabalho, animais, plantas, etc.) que são transformados, a partir do trabalho da equipe de pesquisadores, em ícones para 
              compor as legendas dos mapas. Simultaneamente, transcreve-se excertos de depoimentos e seleciona-se os que comporão o fascículo.<br/><br/>


              Com o mapa concluído e os depoimentos selecionados, monta-se um protótipo de fascículo, que é remetido à comunidade. Ela 
              então faz as correções que deseja, procede à leitura do mapa-piloto e envia-o de volta ao PNCSA. A partir daí toma-se as 
              providências concernentes à publicação. São publicadas mil cópias de cada fascículo. Um menor número de cópias fica em mãos do 
              PNCSA, que guarda alguns exemplares e distribui os restantes para pesquisadores, núcleos de pesquisa, universidades e órgãos 
              estatais tais como Ministério Público Federal e Procuradoria da República. A maior parte dos exemplares fica de posse do movimento 
              social, e por ele é utilizada como quiser, muitas vezes como parte integrante de sua estratégia de auto-afirmação social e de 
              resolução de seus problemas.<br/><br/>


              O PNCSA nos seus 13 anos de atuação, alcançou mais de 212 formas organizativas (associações, sindicatos, cooperativas, comissões, Ong‟s) 
              com 142 entidades apoiadoras e centenas de comunidades. Desde 2005 todas as publicações em formato físico, além dos conteúdos que tem sido 
              disponibilizados para download gratuito no site do projeto, fazem essa comparação do alcance das publicações em formato impresso e em 
              formato digital. Deste modo é possível levar a informação produzida tanto para os agentes sociais que participam ativamente das produções, 
              como para o usuário que tenha interesse nessas informações.
            </p>
            </DescriptionInfo>             
        </CardHeader>
        <Card>    
          <Contacts>
              <a href="skype:novacartografia?call"> 
                <ConfigImage src={skype} />
              </a>
            <ContactsInfo>novacartografia</ContactsInfo>
          </Contacts>

          <Contacts>       
              <a href="https://www.facebook.com/PNCSA"> 
              <ConfigImage src={fbLogo} /> 
              </a>
            <ContactsInfo style={facebook}>PNCSA</ContactsInfo>
          </Contacts>

          <Contacts>       
              <a href="http://novacartografiasocial.com/contate-nos/"> 
                <ConfigImage src={email} /> 
              </a>
            <ContactsInfo>pncsa.ufam@yahoo.com</ContactsInfo>
          </Contacts>

          <Contacts>       
              <ConfigImage src={phone} /> 
            <ContactsInfo style={telefone}>(92) 3232 8423 <br/> (92) 3878 4412</ContactsInfo>
          </Contacts> 

          <Contacts>       
              <a href="https://goo.gl/maps/SHD5w"> 
                <ConfigImage src={home} />  
              </a>
            <ContactsInfo style={endereco}>Av. Leonardo Malcher 1728 6º andar (Centro).</ContactsInfo>
          </Contacts>
        </Card>
      </CardContainer>
      <br/>
      <br/>
      <br/>
      <Footer />
    </Container> 
  );
};

export default AboutUs;
