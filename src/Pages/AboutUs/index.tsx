import React from "react";
import { Container, CardHeader, Card, TitleInfo, Image, DescriptionInfo, Contacts, ContactsInfo, CardContainer, ConfigImage } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import skype from "../../assets/images/skype.png";
import fbLogo from "../../assets/images/facebook.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import home from "../../assets/images/home.png";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Header/>  
      <CardContainer>  
        <CardHeader>
          <TitleInfo>
            <h2>Projeto Nova Cartografia Social</h2>
          </TitleInfo>  
          <DescriptionInfo>
            <h3>O Projeto Nova Cartografia Social da Amazônia (PNCSA) tem como objetivo dar ensejo à auto-cartografia dos povos 
              e comunidades tradicionais na Amazônia. Com o material produzido, tem-se não apenas um maior conhecimento sobre 
              o processo de ocupação dessa região, mas sobretudo uma maior ênfase e um novo instrumento para o fortalecimento 
              dos movimentos sociais que nela existem. Tais movimentos sociais consistem em manifestações de identidades coletivas, 
              referidas a situações sociais peculiares e territorializadas. Estas territorialidades específicas, construídas socialmente 
              pelos diversos agentes sociais, é que suportam as identidades coletivas objetivadas em movimentos sociais. 
              A força deste processo de territorialização diferenciada constitui o objeto deste projeto. A cartografia se mostra como 
              um elemento de combate. A sua produção é um dos momentos possíveis para a auto-afirmação social. É nesse sentido que o 
              PNCSA busca materializar a manifestação da auto-cartografia dos povos e comunidades nos fascículos que publica, que não só 
              pretendem fortalecer os movimentos, mas o fazem mediante a transparência de suas expressões culturais diversas.</h3>
            </DescriptionInfo>             
        </CardHeader>
        <Card>    
          <Contacts>
            <Image>
              <a href="skype:novacartografia?call"> 
                <ConfigImage src={skype} />
              </a>
            </Image>
            <ContactsInfo>Skype</ContactsInfo>
          </Contacts>

          <Contacts>       
            <Image>
              <a href="https://www.facebook.com/PNCSA"> 
              <ConfigImage src={fbLogo} /> 
              </a>
            </Image>
            <ContactsInfo>Facebook</ContactsInfo>
          </Contacts>

          <Contacts>       
            <Image>
              <a href="http://novacartografiasocial.com/contate-nos/"> 
                <ConfigImage src={email} /> 
              </a>
            </Image>
            <ContactsInfo>E-mail</ContactsInfo>
          </Contacts>

          <Contacts>       
            <Image>
              <ConfigImage src={phone} /> 
            </Image>
            <ContactsInfo>(92)3232-8423 / 3878-4412</ContactsInfo>
          </Contacts> 

          <Contacts>       
            <Image>
              <a href="https://goo.gl/maps/SHD5w"> 
                <ConfigImage src={home} />  
              </a>
            </Image>
            <ContactsInfo>Av. Leonardo Malcher - 1728, 6º andar-Centro.</ContactsInfo>
          </Contacts>
        </Card>
      </CardContainer>
      <Footer />
    </Container>
       
  );
};

export default AboutUs;
