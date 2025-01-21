import { z } from "zod";

export const bankAccountSchema = z.object({
  professional: z.string(),
  bank: z.string().min(1, "Selecione um banco"),
  accountType: z.string().min(1, "Selecione o tipo de conta"),
  agency: z.string().min(1, "Agência é obrigatória"),
  accountNumber: z.string().min(1, "Número da conta é obrigatório"),
  personType: z.enum(["PF", "PJ"]),

  cpf: z.string().min(11, "CPF inválido").optional(),
  fullName: z.string().min(3, "Nome completo é obrigatório").optional(),

  cnpj: z.string().min(14, "CNPJ inválido").optional(),
  companyName: z.string().min(3, "Razão social é obrigatória").optional(),
  responsibleName: z
    .string()
    .min(3, "Nome do responsável é obrigatório")
    .optional(),
  responsibleCpf: z.string().min(11, "CPF do responsável inválido").optional(),

  phone: z.string().min(10, "Telefone inválido"),
  cep: z.string().min(8, "CEP inválido"),
  state: z.string().min(1, "Estado é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  address: z.string().min(1, "Endereço é obrigatório"),
  number: z.string().min(1, "Número é obrigatório"),
});

export type BankAccountFormData = z.infer<typeof bankAccountSchema>;
