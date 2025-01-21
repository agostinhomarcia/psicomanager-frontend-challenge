import { Container, MenuItem, MenuList } from "./styles";

const menuItems = [
  {
    id: "painel",
    icon: <img src="../../../public/imagens/Options.png" />,
    alt: "Painel",
  },

  {
    id: "clientes",
    icon: <img src="../../../public/imagens/clients.png" />,
    alt: "Clientes",
  },
  {
    id: "agenda",
    icon: <img src="../../../public/imagens/agenda.png" />,
    alt: "Agenda",
  },
  {
    id: "financeiro",
    icon: <img src="../../../public/imagens/financeiro.png" />,
    alt: "Financeiro",
  },
  {
    id: "relatorios",
    icon: <img src="../../../public/imagens/relatorios.png" />,
    alt: "Relatórios",
  },
  {
    id: "marketing",
    icon: <img src="../../../public/imagens/marketing.png" />,
    alt: "Marketing",
  },
  {
    id: "configuracao",
    icon: <img src="../../../public/imagens/config.png" />,
    alt: "Configuração",
  },
  {
    id: "minha-clinica",
    icon: <img src="../../../public/imagens/clinic.png" />,
    alt: "Minha Clínica",
  },
];

export function Sidebar() {
  return (
    <Container>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            isActive={item.active}
            onClick={() =>
              item.id === "financeiro" && console.log("Financeiro clicked")
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
}
