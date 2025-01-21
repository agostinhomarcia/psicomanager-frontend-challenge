import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { usePsicoBank } from "../../../contexts/PsicoBankContext";
import {
  FormContainer,
  FormHeader,
  FormGroup,
  SelectField,
  InfoBox,
  DynamicMarkingContainer,
  EditorContainer,
} from "./styles";
import { InputField } from "../Step1BankAccount/styles";
import downIcon from "../../../../public/imagens/down.png";

interface MessageConfigFormData {
  professional: string;
  dynamicMarking: string;
  messageContent: string;
}

const modules = {
  toolbar: [
    ["undo", "redo"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic"],
    [{ align: [] }],
    ["list", "bullet"],
    ["link"],
  ],
};

export function Step2MessageConfig() {
  const { nextStep } = usePsicoBank();
  const { control, handleSubmit, watch, setValue } =
    useForm<MessageConfigFormData>({
      defaultValues: {
        professional: "João Silva",
        messageContent:
          "Olá {NOME_CLIENTE}! Estou te mandando um link no qual você consegue ver a melhor forma de pagamento das nossas sessões.\nObrigado!",
      },
    });

  const onSubmit = (data: MessageConfigFormData) => {
    console.log(data);
    nextStep();
  };

  const handleInsertMarking = () => {
    const marking = watch("dynamicMarking");
    const currentContent = watch("messageContent") || "";
    setValue("messageContent", currentContent + ` {${marking}}`);
  };

  return (
    <form id="messageForm" onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <h2>Preencha os itens a seguir para configurar o PsicoBank</h2>
      </FormHeader>

      <FormContainer>
        <FormGroup>
          <label>Profissional *</label>
          <InputField value="João Silva" disabled readOnly />
          <img
            src={downIcon}
            alt="Ícone de seta para baixo"
            style={{ width: "12px", height: "12px" }}
          />
        </FormGroup>

        <FormGroup>
          <label>Enviar cobrança por e-mail:</label>
          <InfoBox>
            Esse é a mensagem por e-mail que seus clientes irão receber. Clique
            no campo de texto para editar o conteúdo da mensagem e depois faça o
            próximo passo.
          </InfoBox>
        </FormGroup>

        <FormGroup>
          <label>Marcação Dinâmica:</label>
          <DynamicMarkingContainer>
            <Controller
              name="dynamicMarking"
              control={control}
              render={({ field }) => (
                <SelectField {...field}>
                  <option value="">Selecione</option>
                  <option value="NOME_CLIENTE">Nome do Cliente</option>
                  <option value="CPF do Cliente">CPF do Cliente</option>
                  <option value="Telefone do Cliente">
                    Telefone do Cliente
                  </option>
                </SelectField>
              )}
            />
            <button type="button" onClick={handleInsertMarking}>
              Inserir
            </button>
          </DynamicMarkingContainer>
        </FormGroup>

        <FormGroup>
          <label>Conteúdo da mensagem:</label>
          <EditorContainer>
            <Controller
              name="messageContent"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={onChange}
                  modules={modules}
                />
              )}
            />
          </EditorContainer>
        </FormGroup>
      </FormContainer>
    </form>
  );
}
