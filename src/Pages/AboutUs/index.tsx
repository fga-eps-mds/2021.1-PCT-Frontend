import React from "react";
import { Container, CardHeader, Card, Title, TitleInfo, SubCard, Image, DescriptionInfo } from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Header/>                
     
      <Title> Sobre Nós </Title>
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
        <Image><img src= "data:image/png;base64,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" width="60" height="60"/> <h3>Skype</h3></Image>
        <Image><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png" width="60" height="60"/> <h3>Facebook</h3></Image> 
      </Card> 
      <Footer />
    </Container>
       
  );
};

export default AboutUs;
