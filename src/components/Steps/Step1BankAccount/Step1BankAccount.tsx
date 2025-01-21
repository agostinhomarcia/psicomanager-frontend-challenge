import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  FormHeader,
  WarningBox,
  FormRow,
  FormGroup,
  InputField,
  SelectField,
} from "./styles";
import { bankAccountSchema } from "../../../schemas/bankAccountSchema";
import { BankAccountFormData } from "../../../schemas/bankAccountSchema";
import { usePsicoBank } from "../../../contexts/PsicoBankContext";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

export function Step1BankAccount() {
  const { nextStep } = usePsicoBank();
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<BankAccountFormData>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      professional: "João Silva",
      personType: "PF",
    },
  });

  const personType = watch("personType");

  const onSubmit = (data: BankAccountFormData) => {
    console.log("Form data:", data);
    nextStep();
  };

  const onError = () => {
    toast.error("Atenção Os campos obrigatórios não foram preenchidos", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#F44336",
        width: "278px",
        height: "104px",
      },
    });
  };

  const showErrors = isSubmitted && Object.keys(errors).length > 0;

  return (
    <form id="bankForm" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormHeader>
        <h2>Preencha os itens a seguir para configurar o PsicoBank</h2>
        <WarningBox>
          <strong>Atenção!</strong>
          <ul>
            <li>
              Verifique atentamente o código dado preenchido no cadastro de sua
              conta.
            </li>
            <li>
              Caso tenha selecionado uma conta do banco (341), verifique se a
              sua conta contém o CNPJ e preencha o CPF correto do recebedor da
              conta.
            </li>
            <li>
              O preenchimento incorreto das informações pode trazer transtornos
              no momento da transferência do valor para esta conta corrente.
            </li>
            <li>
              Os valores preenchidos com dados que não correspondem ao cadastro
              da sua conta bancária.
            </li>
          </ul>
        </WarningBox>
      </FormHeader>

      <FormContainer>
        <FormRow>
          <FormGroup>
            <label>Profissional *</label>
            <InputField {...register("professional")} disabled />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Banco *</label>
            <Controller
              name="bank"
              control={control}
              render={({ field }) => (
                <SelectField {...field} hasError={showErrors}>
                  <option value="">Selecione</option>
                  <option value="bb">Banco do Brasil</option>
                  <option value="bradesco">Bradesco</option>
                  <option value="caixa">Caixa Econômica</option>
                  <option value="Itaú">Itaú</option>
                  <option value="Inter">Inter</option>
                  <option value="Santander">Santander</option>
                </SelectField>
              )}
            />
          </FormGroup>

          <FormGroup>
            <label>Tipo de Conta *</label>
            <Controller
              name="accountType"
              control={control}
              render={({ field }) => (
                <SelectField {...field} hasError={showErrors}>
                  <option value="">Selecione</option>
                  <option value="Conta Corrente">Conta Corrente</option>
                  <option value="Conta Poupança">Conta Poupança</option>
                </SelectField>
              )}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Agência *</label>
            <InputField
              {...register("agency")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>

          <FormGroup>
            <label>Conta com dígito *</label>
            <InputField
              {...register("accountNumber")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Tipo de pessoa *</label>
            <Controller
              name="personType"
              control={control}
              render={({ field }) => (
                <SelectField {...field} hasError={showErrors}>
                  <option value="PF">Pessoa Física</option>
                  <option value="PJ">Pessoa Jurídica</option>
                </SelectField>
              )}
            />
          </FormGroup>

          {personType === "PF" ? (
            <FormGroup>
              <label>CPF *</label>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <InputField
                    as={InputMask}
                    mask="999.999.999-99"
                    placeholder="Digite aqui"
                    hasError={showErrors}
                    {...field}
                  />
                )}
              />
            </FormGroup>
          ) : (
            <FormGroup>
              <label>CNPJ *</label>
              <Controller
                name="cnpj"
                control={control}
                render={({ field }) => (
                  <InputField
                    as={InputMask}
                    mask="99.999.999/9999-99"
                    placeholder="Digite aqui"
                    hasError={showErrors}
                    {...field}
                  />
                )}
              />
            </FormGroup>
          )}
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Nome completo *</label>
            <InputField
              {...register("fullName")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>

          <FormGroup>
            <label>Telefone *</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <InputField
                  as={InputMask}
                  mask="(99) 99999-9999"
                  placeholder="Digite aqui"
                  hasError={showErrors}
                  {...field}
                />
              )}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>CEP *</label>
            <InputField
              {...register("cep")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>

          <FormGroup>
            <label>Estado *</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <SelectField {...field} hasError={showErrors}>
                  <option value="">Selecione</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                </SelectField>
              )}
            />
          </FormGroup>

          <FormGroup>
            <label>Cidade *</label>
            <InputField
              {...register("city")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Endereço *</label>
            <InputField
              {...register("address")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>

          <FormGroup>
            <label>Número *</label>
            <InputField
              {...register("number")}
              placeholder="Digite aqui"
              hasError={showErrors}
            />
          </FormGroup>
        </FormRow>
      </FormContainer>
    </form>
  );
}
