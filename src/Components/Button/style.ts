import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 8px 12px;
  color:  ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
`;