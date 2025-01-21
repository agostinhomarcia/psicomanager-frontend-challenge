import { Container, Input } from "./styles";
import downIcon from "../../../public/imagens/down.png";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
}

export function InputField({ hasIcon = false, ...props }: InputFieldProps) {
  return (
    <Container>
      <Input {...props} />
      {hasIcon && (
        <img
          src={downIcon}
          alt="Ícone de seta para baixo"
          style={{ width: "12px", height: "12px" }}
        />
      )}
    </Container>
  );
}
