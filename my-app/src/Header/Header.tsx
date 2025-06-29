import React, { useState } from "react";
import * as S from "./styles";
import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const Header: React.FC = () => {
    const [showAll, setShowAll] = useState(false);// Hook useState é usado para criar um estado local chamado showAll, que controla se todos os links pessoais devem ser exibidos ou não. O valor inicial é false, indicando que os links não serão exibidos todos de uma vez. A função setShowAll é usada para atualizar o valor de showAll quando o botão é clicado.
    //estado para controlar a exibição de todos os links, showAll inicia como false, ou seja, os links não são exibidos todos de uma vez, setShowAll é uma função que altera o estado de showAll para true ou false quando o botão é clicado.
    // Links pessoais 
    const personalLinks = [
        <S.Link key="nacionalidade">Nacionalidade: Brasileiro</S.Link>,
        <S.Link key="residencia">Residência: São João da Boa Vista - SP</S.Link>,
        <S.Link key="endereco">Endereço: Rua Jardim Recanto Jaguari, 171 - São João da Boa Vista - SP</S.Link>,
        <S.Link key="email">E-mail: Luiz.H.Camilo01@gmail.com</S.Link>,
        <S.Link key="telefone" href="https://wa.me/5519997638054" target="_blank" rel="meu watts">Telefone: (19) 99763-8054 </S.Link>,
        <S.Link key="idade">Idade: 33 anos</S.Link>,
        <S.Link key="nascimento">Data de Nascimento: 16/07/1992</S.Link>,
        <S.Link key="estado-civil">Estado Civil: Noivo</S.Link>,
        <S.Link key="naturalidade">Naturalidade: Santo Antonio da platina - PR</S.Link>,    
    ];

    // Quantos links mostrar quando "fechado"
    const visibleCount = 5; // Número de links a serem exibidos inicialmente

    return (
        <>
            <S.StyledHeader>
                <S.Container>
                    <S.WrapperPerfil>
                        {/* Aqui você pode colocar a imagem do seu perfil */}
                        <S.ProfileImage src={require("../assets/Perfil.jpeg")} alt="perfil do Luiz Henrique" />
                        <S.Icon>
                            <S.Link href="https://www.linkedin.com/in/luiz-henrique-97b9672a0/" target="_blank" rel="Foto de Pefil"><SiLinkedin /></S.Link>
                            <S.Link href="https://github.com/LuizHenriqueCamilo" target="_blank"><FaGithub /></S.Link>
                            <S.Link href="https://wa.me/5519997638054" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></S.Link>
                        </S.Icon>
                    </S.WrapperPerfil>                    
                    {/* Informações pessoal */}
                    <S.Wrapper>
                        <S.Title>Luiz Henrique Camilo</S.Title>
                        {showAll
                          ? personalLinks// Exibe todos os links quando showAll é true
                          : personalLinks.slice(0, visibleCount)// Exibe apenas os primeiros links quando showAll é false, slice(0, visibleCount) retorna os primeiros 5 links do array personalLinks.
                        }
                        {personalLinks.length > visibleCount && (
                          <S.WrapperButton onClick={() => setShowAll(!showAll)}>
                            {showAll ? <MdArrowDropUp /> : <MdArrowDropDown />}{/* Ícone para indicar se está expandido ou recolhido */}
                          </S.WrapperButton>
                        )}
                    </S.Wrapper>
                </S.Container>
            </S.StyledHeader>
        </>
    );
}