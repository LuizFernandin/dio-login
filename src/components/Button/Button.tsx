import { ButtonContainer } from "./styles"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({title, ...rest}: IButtonProps) {
  return (
    <ButtonContainer { ...rest } >
      { title }
    </ButtonContainer>
  )
}