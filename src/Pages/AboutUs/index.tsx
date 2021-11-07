import React, { useEffect } from "react";
import {
  Container,
  CardHeader,
  Card,
  TitleInfo,
  DescriptionInfo,
  Contacts,
  ContactsInfo,
  CardContainer,
  ConfigImage,
} from "./styles";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import skype from "../../assets/images/logoSkype.png";
import fbLogo from "../../assets/images/facebook.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import home from "../../assets/images/home.png";

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "Sobre Nós";
  }, []);

  const endereco = {
    width: "100px",
  };

  const telefone = {
    width: "150px",
  };

  const facebook = {
    marginTop: "40%",
  };

  return (
    <Container>
      <Header />
      <CardContainer>
        <CardHeader>
          <TitleInfo>
            <h2>Projeto Nova Cartografia Social</h2>
          </TitleInfo>
          <DescriptionInfo>
            <p>
              Esta aplicação web é uma ferramenta de busca integrada que permite,
              a partir de um só comando, acessar informações sobre povos e
              comunidades tradicionais obtidas em fontes específicas na internet.
              Seu objetivo é facilitar o acesso a tais informações a um
              público amplo - tanto os movimentos sociais que representam povos e
              comunidades tradicionais no campo político; quanto os pesquisadores
              que realizam trabalhos científicos com esses grupos,
              além de outros usuários interessados na temática.
              <br />
              <br />
              Povos e comunidades tradicionais são grupos culturalmente
              diferenciados, que se reconhecem como tais, que possuem formas
              próprias de organização social, ocupando e usando territórios e
              recursos naturais como condição para sua reprodução cultural,
              social, religiosa, ancestral e econômica.
              Estes grupos sociais - tais como ribeirinhos, quebradeiras de
              coco babaçu, quilombolas, povos indígenas, faxinalenses, povos de terreiro,
              ciganos, entre outros - têm modos de vidas marcados pela
              utilização de conhecimentos, inovações e práticas gerados
              e transmitidos pela tradição (Decreto federal n. 6.040/2007).
              <br />
              <br />
              Na primeira etapa deste projeto, dez entidades governamentais federais
              do Brasil compõem este repertório de fontes, contemplando os três
              poderes políticos: Senado Federal, Câmara dos Deputados,
              Supremo Tribunal Federal, Superior Tribunal de Justiça,
              Ministério Público Federal (MPF), Instituto Nacional de Colonização e
              Reforma Agrária (Incra), Instituto Brasileiro de Geografia e
              Estatística (IBGE), Instituto Brasileiro de Meio Ambiente e
              Recursos Naturais (IBAMA); Instituto Chico Mendes de
              Conservação da Biodiversidade (ICMBio) e Tribunal de Contas da União (TCU).
              <br />
              <br />
              Este projeto experimental foi idealizado no âmbito do Projeto Nova
              Cartografia Social Quilombola no Alto Paranaíba, por meio do Núcleo
              Minas Gerais da Rede Nova Cartografia Social, sob a coordenação do
              Programa de Pós-Graduação em Desenvolvimento Social da Universidade
              Estadual de Montes Claros, e realizado em parceria com o curso de graduação
              em Engenharia de Software da Universidade de Brasília, ao longo do
              primeiro semestre letivo de 2021.
              <br />
              <br />
              A Nova Cartografia Social é uma rede composta por pesquisadores,
              acadêmicos e representantes de movimentos sociais que associam
              atividades de pesquisa científica a ações de defesa de direitos
              humanos coletivos. Atuando desde 2005, a Rede Nova Cartografia Social
              tem colaborado com o auto mapeamento e com a capacitação de
              diversos povos e comunidades tradicionais,
              <br />
              <br />
              No âmbito da disciplina Engenharia de Produto de
              Software da Universidade de Brasília (UnB), os graduandos vêm desenvolvendo
              produtos de software para usuários reais, conforme as necessidades destes.
              Neste sentido, já foram realizados projetos em parceria com a
              Polícia Civil do Estado de Goiás (Instituto de Identificação e
              Setor de Arquivamento), com a Fundação estadual Naturatins
              (Tocantins) e com outros setores da Universidade de Brasília
              (Departamento de Engenharia de Produção e Instituto de Letras). 
              <br />
              <br />
              <strong>Nova Cartografia Social -</strong> Núcleo Minas Gerais, PPGDS-Unimontes
              <br />
              Sheilla Borges Dourado
              <br />
              Ricardo Dias Campos
              <br />
              Andrea Maria Narciso Rocha de Paula
              <br />
              Juliene Pereira dos Santos
              <br />
              Cáritas Borges Dourado
              <br />
              <br />
              <strong>Universidade de Brasília -</strong> Curso de graduação em Engenharia de Software
              <br />
              Disciplina Engenharia de Produto de Software Turma A, semestre letivo 2021.1
              <br />
              Hilmer Rodrigues Neri (professor)
              <br />
              Caio Vinicius Fernandes de Araujo
              <br />
              Guilherme Mendes Pereira
              <br />
              Julio Cesar Litwin
              <br />
              Letícia Karla Araújo
              <br />
              Lucas Gomes de Oliveira
              <br />
              Lucas Gomes Silva
              <br />
              Lucas Maciel Aguiar
              <br />
              Lude Yuri de Castro Ribeiro
              <br />
              Miguel Henrique de O. Alves
              <br />
              <br />
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
            <ContactsInfo style={telefone}>
              (92) 3232 8423 <br /> (92) 3878 4412
            </ContactsInfo>
          </Contacts>

          <Contacts>
            <a href="https://goo.gl/maps/SHD5w">
              <ConfigImage src={home} />
            </a>
            <ContactsInfo style={endereco}>
              Av. Leonardo Malcher 1728 6º andar (Centro).
            </ContactsInfo>
          </Contacts>
        </Card>
      </CardContainer>
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  );
};

export default AboutUs;