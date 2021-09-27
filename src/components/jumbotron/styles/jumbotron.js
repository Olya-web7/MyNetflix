import styled from 'styled-components/macro';

export const Item = styled.div`
    display: flex;    
    border-bottom: 8px solid #222;
    padding: 50px 5px;
    overflow: hidden;      
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;    

  @media (max-width: 990px) {
        flex-direction: column;
    }     
`;

export const Pane = styled.div`
    width: 80%;
    text-align: center;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }        
`;

export const Title = styled.h2`
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    &:hover {
      transform: scale(1.1);
      transition: 1.3s;
    }
`;

export const Container = styled.div`
  ${Item}:nth-child(even) ${Inner} {
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  
  @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;
