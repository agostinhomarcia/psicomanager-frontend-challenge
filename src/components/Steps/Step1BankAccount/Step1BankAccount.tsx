import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  FormRow,
  FormGroup,
  InputField,
  SelectField,
  ErrorMessage,
} from "./styles";
import {
  bankAccountSchema,
  BankAccountFormData,
} from "../../../schemas/bankAccountSchema";

const bankOptions = [
  { value: "itau", label: "Itaú" },
  { value: "bradesco", label: "Bradesco" },
  { value: "santander", label: "Santander" },
];

const accountTypes = [
  { value: "corrente", label: "Conta Corrente" },
  { value: "poupanca", label: "Conta Poupança" },
];

export function Step1BankAccount() {
  const {
    control,
    register,
    watch,
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
    <FormContainer>
      <FormRow>
        <FormGroup>
          <label>Profissional</label>
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
                {bankOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
                {accountTypes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
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
          <InputField {...register("agency")} placeholder="Digite a agência" />
          {errors.agency && (
            <ErrorMessage>{errors.agency.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label>Conta com dígito *</label>
          <InputField
            {...register("accountNumber")}
            placeholder="Digite a conta com dígito"
          />
          {errors.accountNumber && (
            <ErrorMessage>{errors.accountNumber.message}</ErrorMessage>
          )}
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label>Tipo de Pessoa *</label>
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
      </FormRow>

      {personType === "PF" ? (
        <>
          <FormRow>
            <FormGroup>
              <label>CPF *</label>
              <InputField {...register("cpf")} placeholder="000.000.000-00" />
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <label>Nome Completo *</label>
              <InputField
                {...register("fullName")}
                placeholder="Digite seu nome completo"
              />
              {errors.fullName && (
                <ErrorMessage>{errors.fullName.message}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </>
      ) : (
        <>
          <FormRow>
            <FormGroup>
              <label>CNPJ *</label>
              <InputField
                {...register("cnpj")}
                placeholder="00.000.000/0000-00"
              />
              {errors.cnpj && (
                <ErrorMessage>{errors.cnpj.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <label>Razão Social *</label>
              <InputField
                {...register("companyName")}
                placeholder="Digite a razão social"
              />
              {errors.companyName && (
                <ErrorMessage>{errors.companyName.message}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <label>Nome do Responsável *</label>
              <InputField
                {...register("responsibleName")}
                placeholder="Digite o nome do responsável"
              />
              {errors.responsibleName && (
                <ErrorMessage>{errors.responsibleName.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <label>CPF do Responsável *</label>
              <InputField
                {...register("responsibleCpf")}
                placeholder="000.000.000-00"
              />
              {errors.responsibleCpf && (
                <ErrorMessage>{errors.responsibleCpf.message}</ErrorMessage>
              )}
            </FormGroup>
          </FormRow>
        </>
      )}

      <FormRow>
        <FormGroup>
          <label>Telefone *</label>
          <InputField {...register("phone")} placeholder="(00) 00000-0000" />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label>CEP *</label>
          <InputField {...register("cep")} placeholder="00000-000" />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </FormGroup>
      </FormRow>

      <FormRow>
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
          {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label>Cidade *</label>
          <InputField {...register("city")} placeholder="Digite sua cidade" />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label>Endereço *</label>
          <InputField
            {...register("address")}
            placeholder="Digite seu endereço"
          />
          {errors.address && (
            <ErrorMessage>{errors.address.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <label>Número *</label>
          <InputField {...register("number")} placeholder="Digite o número" />
          {errors.number && (
            <ErrorMessage>{errors.number.message}</ErrorMessage>
          )}
        </FormGroup>
      </FormRow>
    </FormContainer>
  );
}
