import styled from "styled-components";


export const StyledHeader = styled.header`
  margin:  2rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  max-width: 1240px;
  width: 100%;  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const ProfileImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const WrapperPerfil = styled.div`
display: flex;
gap: 0.5rem;
flex-direction: column;
align-items: center;
justify-content: center;
                 
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const WrapperButton = styled.div`
font-size: 3rem;
margin-top: 1rem;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;


export const Icon = styled.div`
    gap: 3rem;
    align-items: center;
  svg {
    width: 40px;
    margin-right: 8px;
    margin-top: 1rem;
  }
  a {
    color: #6c757d;
    font-size: 3rem;
    transition: color 0.3s ease;
    &:hover {
      color: #343a40;
    }
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid #343a40;
  }
`;


export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 1rem;
`;

export const Telephone = styled.h3`
 text-decoration: none;
  color: #6c757d;
`;

export const Link = styled.a`
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  color: #6c757d;
  cursor: pointer;
`;



