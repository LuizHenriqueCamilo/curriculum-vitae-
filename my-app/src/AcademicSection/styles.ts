import styled from "styled-components";


export const Container = styled.div`
  margin:  2rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  max-width: 1240px;
  width: 100%;  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #333;
     @media (max-width: 768px) {
         font-size: 1.5rem;
     }

     @media (max-width: 480px) {
         font-size: 1.2rem;
     }
`;   

export const Title = styled.h1`
     font-size: 2.5rem;
     font-weight: bold;
     text-align: center;     
`;

export const TitleSection = styled.h2`
     font-size: 2rem;
     font-weight: bold;
`;   

export const SubtitleSection = styled.h3`
     font-size: 1.8rem;
     font-weight: normal;
     color: #666;
`;

export const Texto = styled.p`
     font-size: 1.5rem;
     line-height: 1.5;
     color: #555;
     margin: 0.5rem 0;`;

export const WrapperButton  = styled.div`
    font-size: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;