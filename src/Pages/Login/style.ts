import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 30px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.COLORS.PRIMARY}
  }
`;

export const Form = styled.form`
  padding: 48px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.GRAY_500}
    }
  }

  div > input {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    padding: 8px 12px;
    border-radius: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_700}
  }
`;