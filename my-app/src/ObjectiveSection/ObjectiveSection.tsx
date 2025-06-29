import React, { useState } from "react";
import * as S from "./styles";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const ObjectiveSection: React.FC = () => {    
    const [showAll, setShowAll] = useState(false);

    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>
                    Objetivo
                </S.Title>
                    <S.SubtitleSection>
                        Desde já me disponhho a melhores esclarecimentos
                    </S.SubtitleSection>
                    {showAll && (
                      <S.Texto>
                        Busco minha primeira oportunidade na área de Desenvolvimento Front-end e Back-end. 
                        Estou disponível para início imediato e altamente motivado a aplicar meus conhecimentos em um ambiente profissional e colaborativo.
                        Sou dedicado, proativo e estou em constante evolução por meio de estudos, cursos e projetos pessoais. 
                        Este currículo, inclusive, foi desenvolvido como aplicação web utilizando React com TypeScript, demonstrando minha familiaridade com a stack e boas práticas de desenvolvimento.Tenho facilidade para aprender novas tecnologias, preparado para contribuir com responsabilidade, organização e vontade de crescer na área.
                      </S.Texto>
                    )}                
                <S.WrapperButton onClick={() => setShowAll(!showAll)}>
                  {showAll ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </S.WrapperButton>
               </S.Wrapper>
        </S.Container>
    );
}