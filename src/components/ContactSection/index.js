import { useState } from 'react';
import styled from 'styled-components';

const InputTelefoneBrasileiro = ({ value, onChange }) => {
  const handleChange = e => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 11) input = input.slice(0, 11);

    let formattedInput = '';
    if (input.length > 0) formattedInput += `(${input.slice(0, 2)}`;
    if (input.length > 2) formattedInput += `) ${input.slice(2, 7)}`;
    if (input.length > 7) formattedInput += `-${input.slice(7)}`;

    onChange(formattedInput);
  };

  return (
    <Input
      id="telefone"
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="(XX) XXXXX-XXXX"
      pattern="$$\d{2}$$\s\d{5}-\d{4}"
      title="Número de telefone no formato: (XX) XXXXX-XXXX"
    />
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  width: 320px;
  margin-bottom: 24px;
  font-family: 'Nunito';
`;

const Input = styled.input`
  display: flex;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: transparent;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const Label = styled.label`
  font-weight: 500;
  line-height: 2rem;
  cursor: pointer;
`;

const Button = styled.button`
  all: unset;
  background: transparent;
  border: 2px solid #24dbdd;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    border-color: #111111;
  }
`;

const Textarea = styled.textarea`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  width: 100%;
  min-width: 480px;
  height: 120px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: transparent;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export default function FormularioContato() {
  const [telefone, setTelefone] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      setError(false);
      setSent(false);
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setError(true);
    }
  };

  // const onSendEmail = async () => {
  //   await fetch('/api/contact', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: 'oi@test.com',
  //       name: 'Test',
  //       phone: '31 98661-0770',
  //       subject: 'Opa',
  //     }),
  //   });
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Contato</h1>
      <div>
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          name="nome"
          required
          minLength={2}
          maxLength={100}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <Label htmlFor="telefone">Telefone</Label>
        <InputTelefoneBrasileiro
          value={telefone}
          onChange={value => setTelefone(value)}
        />
      </div>

      <div>
        <Label htmlFor="subject">Assunto</Label>
        <Input
          id="subject"
          name="subject"
          required
          minLength={3}
          maxLength={100}
          placeholder="Motivo do contato"
        />
      </div>

      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1000}
          placeholder="Digite sua mensagem aqui"
        />
      </div>

      <Button type="submit" disabled={sent}>
        Enviar
      </Button>
      <br />
      {sent && <p>Mensagem enviada com sucesso!</p>}
      {error && <p>Erro ao enviar mensagem. Tente novamente mais tarde.</p>}
    </Form>
  );
}
