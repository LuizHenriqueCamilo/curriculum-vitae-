import * as S from "./styles"// usamos este estilo de importação para evitar conflitos de nomes com outros componentes

export const Header: React.FC = () => {
    return(
        <>
        <S.StyledHeader>
            <S.Container>
                   {/* Aqui você pode colocar a imagem do seu perfil */}
                <S.ProfileImage src={require("../assets/Perfil.jpeg")} alt="perfil do Luiz Henrique" />
                   {/* Informações pessoal */}
                   <S.Wrapper>
                        <S.Title>Luiz Henrique Camilo</S.Title>
                        <S.Link>Telefone: (19) 99763-8054 </S.Link>
                        <S.Link>E-mail: Luiz.H.Camilo01@gmail.com:</S.Link>
                        <S.Link href="https://www.linkedin.com/in/luiz-henrique-97b9672a0/" target="_blank" rel="noopener noreferrer">Linkedin:</S.Link>
                        <S.Link href="https://github.com/LuizHenriqueCamilo">Github</S.Link>  
                   </S.Wrapper>
            </S.Container>
        </S.StyledHeader>
        </>
    )
}