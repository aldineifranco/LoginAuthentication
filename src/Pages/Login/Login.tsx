import { useState } from 'react';
import { Button } from '../../Components/Button/Button';
import { Container, Form } from './style';

export function Login() {
  const [form, setForm] = useState({
    login: '',
    senha: ''
  });

  function handleInputChange ({ target }: any) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleSubmite(event: any) {
    event.preventDefault()
    console.log(form)
  }

  return (
    <Container>
      <h1>Acessar o Sistema</h1>
      <Form onSubmit={handleSubmite}>
        <div>
          <label>Login</label>
          <input
            id="login"
            type="text"
            value={form.login}
            onChange={handleInputChange}
          />
        </div>
      
        <div>
          <label>Senha</label>
          <input
            id="senha"
            type="password"
            value={form.senha}
            onChange={handleInputChange}
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