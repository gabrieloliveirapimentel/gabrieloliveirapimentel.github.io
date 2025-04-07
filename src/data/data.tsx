import { ReactNode } from "react";
import {
  PiDatabase,
  PiInfinity,
  PiDevices,
  PiLinkedinLogo,
  PiInstagramLogo,
  PiGithubLogo,
  PiWhatsappLogo,
  PiEnvelope,
} from "react-icons/pi";

import coffee_delivery from "../assets/coffee-delivery.svg";
import dt_money from "../assets/dt-money.svg";
import gameplay from "../assets/gameplay-rn.svg";
import github_blog from "../assets/github-blog.svg";
import github_repositories from "../assets/github-repositories.svg";
import pizza_shop from "../assets/pizza-shop.svg";

import {
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
} from "react-icons/tb";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Websites e Aplicativos",
    description: "Desenvolvimento de interfaces",
    icon: <PiDevices className="text-purple-500" size={44} />,
  },
  {
    id: 2,
    title: "API e banco de dados",
    description: "Criação de serviços de sistema",
    icon: <PiDatabase className="text-yellow-500" size={44} />,
  },
  {
    id: 3,
    title: "DevOps",
    description: "Gestão e infraestrutura de aplicação",
    icon: <PiInfinity className="text-lime-500" size={44} />,
  },
];

export interface Badge {
  id: number;
  label: string;
  icon: ReactNode;
}

export const badges: Badge[] = [
  {
    id: 1,
    label: "GitHub",
    icon: <TbBrandGithub color="var(--color-gray-300)" size={14} />,
  },
  {
    id: 2,
    label: "React",
    icon: <TbBrandReact color="var(--color-cyan-500)" size={14} />,
  },
  {
    id: 3,
    label: "React Native",
    icon: <TbBrandReactNative color="var(--color-blue-500)" size={14} />,
  },
  {
    id: 4,
    label: "Next.js",
    icon: <TbBrandNextjs color="var(--color-rose-500)" size={14} />,
  },
  {
    id: 5,
    label: "Node.js",
    icon: <TbBrandNodejs color="var(--color-lime-500)" size={14} />,
  },
  {
    id: 6,
    label: "TypeScript",
    icon: <TbBrandTypescript color="var(--color-blue-500)" size={14} />,
  },
  {
    id: 7,
    label: "JavaScript",
    icon: <TbBrandJavascript color="var(--color-yellow-500)" size={14} />,
  },
  {
    id: 8,
    label: "MySQL",
    icon: <TbBrandMysql color="var(--color-cyan-300)" size={14} />,
  },
];

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/gabrielpimentel9",
    icon: <PiInstagramLogo className="text-xl " />,
  },
  {
    id: 2,
    name: "WhatsApp",
    url: "https://wa.me/+5532999907851?text=Ol%C3%A1%20Gabriel%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20seu%20trabalho.",
    icon: <PiWhatsappLogo className="text-xl " />,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-oliveira-pimentel",
    icon: <PiLinkedinLogo className="text-xl " />,
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/gabrieloliveirapimentel",
    icon: <PiGithubLogo className="text-xl " />,
  },
  {
    id: 5,
    name: "E-mail",
    url: "mailto:gabrieloliveirapimentel@hotmail.com",
    icon: <PiEnvelope className="text-xl " />,
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pizza Shop",
    description:
      "Aplicação do programa Ignite da Rocketseat para controle de pedidos de pizza.",
    link: "https://github.com/gabrieloliveirapimentel/pizzashop-web",
    image: pizza_shop,
  },
  {
    id: 2,
    title: "Coffee Delivery",
    description:
      "Aplicação do programa Ignite da Rocketseat para controle de pedidos de café.",
    link: "https://github.com/gabrieloliveirapimentel/coffee-delivery",
    image: coffee_delivery,
  },
  {
    id: 3,
    title: "Github Blog",
    description:
      "Aplicação do programa Ignite da Rocketseat para visualizar issues de um repositório.",
    link: "https://github.com/gabrieloliveirapimentel/github-blog",
    image: github_blog,
  },
  {
    id: 4,
    title: "Github Repositories",
    description:
      "Aplicação pessoal para visualizar repositórios do Github com autenticação.",
    link: "https://github.com/gabrieloliveirapimentel/github-repositories",
    image: github_repositories,
  },
  {
    id: 5,
    title: "DT Money",
    description:
      "Aplicação do programa Ignite da Rocketseat para controle de gastos e receitas pessoais.",
    link: "https://github.com/gabrieloliveirapimentel/dt-money",
    image: dt_money,
  },
  {
    id: 6,
    title: "Gameplay",
    description:
      "Aplicativo do evento Next Level Week da Rocketseat para agendar partidas de jogos.",
    link: "https://github.com/gabrieloliveirapimentel/gameplay",
    image: gameplay,
  },
];
