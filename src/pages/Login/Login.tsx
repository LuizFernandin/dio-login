import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import { Container, LoginContainer } from "./styles"
import { IFormLogin, defaultValues } from './types'

import EmailVector from "../../assets/EmailVector.png"
import PasswordVector from "../../assets/PasswordVector.png"

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Numero minino 6 caracteres')
    .required('Campo obrigatório'),
}).required();

export function Login() {
  const {
    watch,
    control,
    formState: { errors, isValid } 
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange',
  })

  console.log(isValid)

  return (
    <Container>
      <LoginContainer>
        <h1>LOGIN</h1>
        <Input 
          name="email" img={EmailVector} 
          placeholder="E-Mail" 
          control={control} 
          errorMassage={errors?.email?.message} 
        />
        <Input 
          name="password" 
          img={PasswordVector} 
          placeholder="Senha" 
          control={control} 
          errorMassage={errors?.password?.message}
          type="password" 
        />

        {
          isValid ? 
            <Button title="ENTRAR"/>
          :
            <Button title="ENTRAR" disabled/>
        }
        
      </LoginContainer>
    </Container>
  )
}