import React, { useState } from "react";
import * as S from "./styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const AcademicSection: React.FC = () => {    
    const [showAll, setShowAll] = useState(false);

    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>
                    Formação Profissional
                </S.Title>
            </S.Wrapper>
            <S.Wrapper>
                {/*---------------------------------------Primeiro------------------------------------------------------*/}
                <S.TitleSection>
                  Programa Desenvolvedor Full Stack – Adda Tech | Santander Periodo 2025 
                </S.TitleSection>
                <S.SubtitleSection>
                  Modalidade: Formação intensiva em desenvolvimento Front-End Full Stack (concluido)
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, (Node.js), TypeScript, Back-End: PHP, Banco de Dados: MySQL, Ferramentas e Visualização de Dados: Power BI, Git e GitHub, Metodologias: Boas práticas de versionamento, desenvolvimento ágil e integração de sistemas
                  </S.Texto>
                )}
                {/*-----------------------------------------Segundo----------------------------------------------------*/}
                <S.TitleSection>
                  Instituto Federal de Educação, Ciência e Tecnologia de São Paulo – Campus São João da Boa Vista Periodo 2024 - 2025
                </S.TitleSection>
                <S.SubtitleSection>
                  Curso Técnico em Manutenção e Suporte em Informática (concluido)
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Sistemas e Programação: Algoritmos e Técnicas de Programação, Gestão e Administração de Sistemas Operacionai,Comunicação Técnica em Informática
                    Hardware e Manutenção: Instalação, Organização e Manutenção de Computadores e Dispositivos, Operação e Configuração de Aplicativos, Instalação e Suporte Técnico de Equipamentos
                    Redes e Suporte: Estrutura e Configuração de Redes de Computadores, Suporte Técnico e Atendimento ao Usuário
                    Fundamentos Técnicos: Eletricidade e Eletrônica Básica
                    Design Gráfico, Arte e Hipermídia
                  </S.Texto>
                )}
                {/*-----------------------------------------Terceiro----------------------------------------------------*/}
                <S.TitleSection>
                   SENAC – Serviço Nacional de Aprendizagem Comercial 
                </S.TitleSection>
                <S.SubtitleSection>
                  Curso: Programa Educação para o Trabalho (concluido)
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Informática Aplicada ao Ambiente Corporativo: Domínio do Pacote Office (Word, Excel, PowerPoint, Outlook), Produção e formatação de documentos, planilhas e apresentações profissionais, Organização e arquivamento digital de documentos
                    Rotinas Administrativas e Profissionalização: Noções de gestão de tempo, organização de tarefas e atendimento ao cliente, Processos administrativos: recepção, protocolo, controle de estoque, emissão de documentos, Introdução à ética profissional, trabalho em equipe e postura no ambiente corporativo
                    Tecnologia no Mundo do Trabalho: Utilização de recursos de informática para otimização de rotinas, Comunicação digital e escrita profissional, Noções básicas de navegação, pesquisa e segurança na internet
                  </S.Texto>
                )}
                {/*-----------------------------------------quarto----------------------------------------------------*/}
                <S.TitleSection>
                  Netcompany 
                </S.TitleSection>
                <S.SubtitleSection>
                  Curso: Informática Básica (concluido)
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Pacote Office (Microsoft 365): Word: criação e edição de documentos profissionais, Excel: fórmulas básicas, organização de dados e criação de planilhas, PowerPoint: desenvolvimento de apresentações com design e clareza, Outlook: noções de comunicação profissional por e-mail
                    Internet e Navegação Segura: Utilização eficiente de navegadores e ferramentas de busca, Boas práticas de segurança digital e proteção de dados, Introdução a serviços na nuvem e recursos colaborativos online
                  </S.Texto>
                )}
                {/*------------------------------------------Quinto----------------------------------------------------*/}
                <S.TitleSection>
                  Escola Estadual Coronel Cristiano Osório de Oliveira 
                </S.TitleSection>
                <S.SubtitleSection>
                    Ensino Médio - Completo
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                   (concluido)
                  </S.Texto>
                )}
                <S.WrapperButton onClick={() => setShowAll(!showAll)}>
                  {showAll ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </S.WrapperButton>
               </S.Wrapper>
        </S.Container>
    );
}