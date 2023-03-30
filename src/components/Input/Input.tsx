import { Controller } from "react-hook-form"
import { Control, FieldErrors } from "react-hook-form"
import { IFormLogin } from "../../pages/Login/types"
import { InputContainer, ValidationContainer } from "./styles"

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  img: string
  placeholder: string
  control: Control<IFormLogin, any>
  name: "email" | "password"
  errorMassage?: string
}

export function Input({ img, placeholder, control, name, errorMassage, ...rest }: IInputProps) {
  return (
    <>
      <InputContainer>        
        <img src={img} alt={img} />

        <Controller
          name={name}
          control={control} 
          render={({
            field: { onChange, onBlur, value, ref }
          }) => (
            <input
              { ...rest }
              placeholder={placeholder} 
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
        {/* {errorMassage ? <p>{errorMassage}</p> : null} */}
      </InputContainer>
      
      <ValidationContainer>
        {errorMassage ? <p>{errorMassage}</p> : null}
      </ValidationContainer>

      </>
  )
}