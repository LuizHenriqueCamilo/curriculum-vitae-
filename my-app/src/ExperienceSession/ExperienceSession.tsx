import React, { useState } from "react";
import * as S from "./styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const ExperienceSession: React.FC = () => {    
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
                   Fort Mix
                </S.TitleSection>
                <S.SubtitleSection>
                  Cargo: Conferente, Período: 10 anos
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Manutenção preventiva e corretiva de computadores e notebooks.
                    Formatação de sistemas, instalação e configuração de softwares e aplicativos.
                    Configuração de roteadores e redes domésticas.
                    Atendimento personalizado a clientes com suporte técnico básico.
                  </S.Texto>
                )}
                {/*-----------------------------------------Segundo----------------------------------------------------*/}
                <S.TitleSection>
                  Trabalho Autônomo
                </S.TitleSection>
                <S.SubtitleSection>
                  Cargo: Técnico em Manutenção de Computadores
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
                   Sempre Vale 
                </S.TitleSection>
                <S.SubtitleSection>
                  Cargo: Auxiliar Administrativo Período: 1 ano
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Lançamento, digitação e conferência de notas fiscais.
                    Apoio nas rotinas administrativas e organização de documentos.
                    Manutenção básica e configuração de computadores da empresa.
                    Suporte interno em pequenas tarefas de TI e infraestrutura.
                  </S.Texto>
                )}
                {/*-----------------------------------------quarto----------------------------------------------------*/}
                <S.TitleSection>
                  Delaplastc 
                </S.TitleSection>
                <S.SubtitleSection>
                    Cargo: Auxiliar de Produção e Operadoradpr de maquina de Tear Período: 1 ano
                </S.SubtitleSection>
                {showAll && (
                  <S.Texto>
                    Operação de máquinas de tear e controle de qualidade dos produtos.
                    Auxílio na produção e montagem de peças plásticas.
                    Manutenção básica das máquinas e equipamentos utilizados.
                    Colaboração com a equipe para otimização dos processos produtivos.
                  </S.Texto>
                )}
                
                <S.WrapperButton onClick={() => setShowAll(!showAll)}>
                  {showAll ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </S.WrapperButton>
               </S.Wrapper>
        </S.Container>
    );
}