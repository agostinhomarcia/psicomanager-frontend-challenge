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
  ErrorMessage,
} from "./styles";
import { bankAccountSchema } from "../../../schemas/bankAccountSchema";
import { BankAccountFormData } from "../../../schemas/bankAccountSchema";
import { usePsicoBank } from "../../../contexts/PsicoBankContext";

export function Step1BankAccount() {
  const { nextStep } = usePsicoBank();
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BankAccountFormData>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      professional: "João Silva",
      personType: "PF",
    },
  });

  const personType = watch("personType");

  return (
    <>
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
                <SelectField {...field}>
                  <option value="">Selecione</option>
                  <option value="itau">Itaú</option>
                  <option value="bradesco">Bradesco</option>
                  <option value="santander">Santander</option>
                </SelectField>
              )}
            />
            {errors.bank && <ErrorMessage>{errors.bank.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <label>Tipo de Conta *</label>
            <Controller
              name="accountType"
              control={control}
              render={({ field }) => (
                <SelectField {...field}>
                  <option value="">Selecione</option>
                  <option value="corrente">Conta Corrente</option>
                  <option value="poupanca">Conta Poupança</option>
                </SelectField>
              )}
            />
            {errors.accountType && (
              <ErrorMessage>{errors.accountType.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Agência *</label>
            <InputField {...register("agency")} placeholder="Digite aqui" />
            {errors.agency && (
              <ErrorMessage>{errors.agency.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Conta com dígito *</label>
            <InputField
              {...register("accountNumber")}
              placeholder="Digite aqui"
            />
            {errors.accountNumber && (
              <ErrorMessage>{errors.accountNumber.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Tipo de pessoa *</label>
            <Controller
              name="personType"
              control={control}
              render={({ field }) => (
                <SelectField {...field}>
                  <option value="PF">Pessoa Física</option>
                  <option value="PJ">Pessoa Jurídica</option>
                </SelectField>
              )}
            />
          </FormGroup>

          {personType === "PF" ? (
            <FormGroup>
              <label>CPF *</label>
              <InputField {...register("cpf")} placeholder="Digite aqui" />
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
            </FormGroup>
          ) : (
            <FormGroup>
              <label>CNPJ *</label>
              <InputField {...register("cnpj")} placeholder="Digite aqui" />
              {errors.cnpj && (
                <ErrorMessage>{errors.cnpj.message}</ErrorMessage>
              )}
            </FormGroup>
          )}
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Nome completo *</label>
            <InputField {...register("fullName")} placeholder="Digite aqui" />
            {errors.fullName && (
              <ErrorMessage>{errors.fullName.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Telefone *</label>
            <InputField {...register("phone")} placeholder="Digite aqui" />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>CEP *</label>
            <InputField {...register("cep")} placeholder="Digite aqui" />
            {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <label>Estado *</label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <SelectField {...field}>
                  <option value="">Selecione</option>
                  {/* Adicionar lista de estados */}
                </SelectField>
              )}
            />
            {errors.state && (
              <ErrorMessage>{errors.state.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Cidade *</label>
            <InputField {...register("city")} placeholder="Digite aqui" />
            {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label>Endereço *</label>
            <InputField {...register("address")} placeholder="Digite aqui" />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Número *</label>
            <InputField {...register("number")} placeholder="Digite aqui" />
            {errors.number && (
              <ErrorMessage>{errors.number.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>
      </FormContainer>
    </>
  );
}
