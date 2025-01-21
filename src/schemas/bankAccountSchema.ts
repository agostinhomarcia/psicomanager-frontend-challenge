import { z } from "zod";

export const bankAccountSchema = z
  .object({
    professional: z.string().min(1, "Campo obrigatório"),
    bank: z.string().min(1, "Selecione um banco"),
    accountType: z.string().min(1, "Selecione o tipo de conta"),
    agency: z.string().min(1, "Agência é obrigatória"),
    accountNumber: z.string().min(1, "Número da conta é obrigatório"),
    personType: z.enum(["PF", "PJ"]),

    cpf: z.string().min(14, "CPF inválido").optional(),
    fullName: z.string().min(1, "Nome completo é obrigatório"),

    cnpj: z.string().min(18, "CNPJ inválido").optional(),
    companyName: z.string().min(3, "Razão social é obrigatória").optional(),
    responsibleName: z
      .string()
      .min(3, "Nome do responsável é obrigatório")
      .optional(),
    responsibleCpf: z
      .string()
      .min(11, "CPF do responsável inválido")
      .optional(),

    phone: z.string().min(14, "Telefone inválido"),
    cep: z.string().min(1, "CEP é obrigatório"),
    state: z.string().min(1, "Selecione um estado"),
    city: z.string().min(1, "Cidade é obrigatória"),
    address: z.string().min(1, "Endereço é obrigatório"),
    number: z.string().min(1, "Número é obrigatório"),
  })
  .refine(
    (data) => {
      if (data.personType === "PF") {
        return !!data.cpf;
      } else {
        return !!data.cnpj;
      }
    },
    {
      message: "CPF/CNPJ é obrigatório",
      path: ["cpf"],
    }
  );

export type BankAccountFormData = z.infer<typeof bankAccountSchema>;
