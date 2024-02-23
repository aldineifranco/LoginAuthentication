import { Button } from '../../Components/Button/Button';
import { Container, Form } from './style';

export function Login() {
  return (
    <Container>
      <Form>
        <div>
          <label>Login</label>
          <input
            type="text"
          />
        </div>
      
        <div>
          <label>Senha</label>
          <input
           type="password"
          />
        </div>

        <div>
          <Button
            type='submit'
            title='Acessar'
          />
        </div>
        
      </Form>
    </Container>
  )
}