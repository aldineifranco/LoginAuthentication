import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 6px 8px;
  color:  ${({ theme }) => theme.COLORS.WHITE};
  
`;