// Core
import styled from 'styled-components';

export const Container = styled.section`
  input,
  textarea {
    font-size: 15px;
    color: ${({ theme }) => theme.main.color};
    background-color: ${({ theme }) => theme.accent.bgSecond};
  }
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;


  h3 {
    padding-left: 17px;
    margin-bottom: 0;
    margin-right: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.main.bgSecond};
    }
  }
`;


export const Title = styled.h3`
  position: relative;
  font-family: 'NotoSans800',sans-serif;
  font-weight: 800;
  font-size: 19px;
  color: ${({ theme }) => theme.main.color};
  margin-bottom: 10px;
`;

export const List = styled.ul`
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.main.color};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;

export const Name = styled.h4`
  margin-bottom: 3px;
  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;

export const Customer = styled.h5`
  margin-bottom: 3px;
`;

export const Duration = styled.time`
`;

export const Role = styled.h6`
  margin-right: 10px;
`;

export const Responsibilities = styled.div`
  margin-bottom: 5px;
  textarea {
    color: ${({ theme }) => theme.main.color};
    font-size: 15px;
    min-height: 80px;
  }
`;

export const TeamSize = styled.div`
  margin-bottom: 3px;
`;

export const Stack = styled.span`
  input {
    font-family: 'NotoSans500';
    font-weight: 500;
  }
`;
