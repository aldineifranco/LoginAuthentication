import { Container } from './style';

interface ButtonProps {
  title: string;
  type: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <Container>{ title }</Container>
  )
}