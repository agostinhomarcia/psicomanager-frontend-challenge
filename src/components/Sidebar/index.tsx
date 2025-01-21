import { Container, MenuItem, MenuList } from "./styles";
import painelIcon from "../../../public/imagens/Options.png";
import clientsIcon from "../../../public/imagens/clients.png";
import agendaIcon from "../../../public/imagens/agenda.png";
import financeiroIcon from "../../../public/imagens/financeiro.png";
import relatoriosIcon from "../../../public/imagens/relatorios.png";
import marketingIcon from "../../../public/imagens/marketing.png";
import configuracaoIcon from "../../../public/imagens/config.png";
import clinicIcon from "../../../public/imagens/clinic.png";

const menuItems = [
  {
    id: "painel",
    icon: <img src={painelIcon} />,
    alt: "Painel",
  },

  {
    id: "clientes",
    icon: <img src={clientsIcon} />,
    alt: "Clientes",
  },
  {
    id: "agenda",
    icon: <img src={agendaIcon} />,
    alt: "Agenda",
  },
  {
    id: "financeiro",
    icon: <img src={financeiroIcon} />,
    alt: "Financeiro",
  },
  {
    id: "relatorios",
    icon: <img src={relatoriosIcon} />,
    alt: "Relatórios",
  },
  {
    id: "marketing",
    icon: <img src={marketingIcon} />,
    alt: "Marketing",
  },
  {
    id: "configuracao",
    icon: <img src={configuracaoIcon} />,
    alt: "Configuração",
  },
  {
    id: "minha-clinica",
    icon: <img src={clinicIcon} />,
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
            isActive={false}
            onClick={() =>
              item.id === "financeiro" && console.log("Financeiro clicked")
            }
          >
            <span className="icon">{item.icon}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
}
