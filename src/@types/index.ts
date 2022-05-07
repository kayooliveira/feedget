import lamp from "../Assets/img/Lamp.svg";
import bug from "../Assets/img/Bug.svg";
import thought from "../Assets/img/Thought.svg";

export type FeedbackTypeType = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};
export const FeedbackTypes = [
  {
    name: "Problema",
    description: "Encontrou um bug? Comente-o!",
    image: {
      src: bug,
      alt: "Imagem de um inseto",
    },
  },
  {
    name: "Ideia",
    description: "Tem uma ideia em mente? Conte-nos!",
    image: {
      src: lamp,
      alt: "Imagem de uma lâmpada",
    },
  },
  {
    name: "Outro",
    description: "Outro tipo de feedback?",
    image: {
      src: thought,
      alt: "Imagem de um balão de pensamento",
    },
  },
] as FeedbackTypeType[];
