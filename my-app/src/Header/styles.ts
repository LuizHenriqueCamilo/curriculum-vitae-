import styled from "styled-components";


export const StyledHeader = styled.header`
  margin:  2rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  max-width: 1200px;
  width: 100%;  
`;

export const Container = styled.div`
 display: flex;
 gap: 2rem;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
  
`;

export const ProfileImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 200px;
  height: 200px;
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
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: #6c757d;
  cursor: pointer;
`;
