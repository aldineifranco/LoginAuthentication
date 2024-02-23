import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 48px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
  }
`;