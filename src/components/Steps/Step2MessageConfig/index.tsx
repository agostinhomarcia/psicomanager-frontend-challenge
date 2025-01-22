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
import { InputField } from "../../../components/InputField";
import downIcon from "../../../../public/imagens/down.png";

interface MessageConfigFormData {
  professional: string;
  dynamicMarking: string;
  messageContent: string;
}

interface QuillInstance {
  quill: {
    history: {
      undo: () => void;
      redo: () => void;
    };
  };
}

const icons = ReactQuill.Quill.import("ui/icons");
icons["undo"] = `<svg viewbox="0 0 18 18">
  <path fill="currentColor" d="M12.5,8.5c0,0-4-3.6-4-3.6c-0.3-0.3-0.7-0.3-1,0c-0.3,0.3-0.3,0.7,0,1l2.9,2.9H5.5c-1.7,0-3,1.3-3,3v4 c0,0.6,0.4,1,1,1s1-0.4,1-1v-4c0-0.6,0.4-1,1-1h4.9L7.5,14.1c-0.3,0.3-0.3,0.7,0,1c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2 l4-3.6C13.1,11,13.1,9,12.5,8.5z"/>
</svg>`;

icons["redo"] = `<svg viewbox="0 0 18 18">
  <path fill="currentColor" d="M5.5,8.5c0,0,4-3.6,4-3.6c0.3-0.3,0.7-0.3,1,0c0.3,0.3,0.3,0.7,0,1L7.6,8.9h4.9c1.7,0,3,1.3,3,3v4 c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4c0-0.6-0.4-1-1-1H7.6l2.9,2.9c0.3,0.3,0.3,0.7,0,1c-0.1,0.1-0.3,0.2-0.5,0.2s-0.4-0.1-0.5-0.2 l-4-3.6C4.9,11,4.9,9,5.5,8.5z"/>
</svg>`;

const Quill = ReactQuill.Quill;
const Parchment = Quill.import("parchment");

class UndoClass extends Parchment.Embed {}
UndoClass.blotName = "undo";
Quill.register("formats/undo", UndoClass);

class RedoClass extends Parchment.Embed {}
RedoClass.blotName = "redo";
Quill.register("formats/redo", RedoClass);

const modules = {
  toolbar: {
    container: [
      ["undo", "redo"],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
    handlers: {
      undo: function (this: QuillInstance) {
        this.quill.history.undo();
      },
      redo: function (this: QuillInstance) {
        this.quill.history.redo();
      },
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
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
              + Inserir
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
