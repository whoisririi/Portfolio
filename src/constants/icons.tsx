import type { ReactNode } from "react";

import { CiSquareMore } from "react-icons/ci";
import { FaFigma, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiMicrosoftWordLogo, PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiCanva } from "react-icons/si";

const ICON_COLOR = "#CE6B8B";
const ICON_SIZE = 48;

export interface SkillIcon {
  label: string;
  Icon: () => ReactNode;
}

/* Custom SVG Components */
const CapcutIcon = () => (
  <svg viewBox="0 0 48 48" width={ICON_SIZE} height={ICON_SIZE}>
    <path fill={ICON_COLOR} d="M24 6 6 15v18l18 9 18-9V15L24 6z" />
  </svg>
);

const AlightMotionIcon = () => (
  <svg
    viewBox="0 0 48 48"
    width={ICON_SIZE}
    height={ICON_SIZE}
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M43.5 28.33a19.5 19.5 0 0 0-39 0" />
    <path d="M18.47 32.59a6.92 6.92 0 0 0 9.79-9.79" />
    <path d="M23.25 39.17a11.23 11.23 0 1 0 0-22.45" />
    <path d="M34.6 38.22a14.64 14.64 0 1 0-20.7-20.7" />
  </svg>
);

export const softwareIcons: SkillIcon[] = [
  {
    label: "Skills",
    Icon: () => <CiSquareMore size={44} color="#CE6B8B" />,
  },
  {
    label: "Figma",
    Icon: () => <FaFigma size={44} color="#CE6B8B" />,
  },
  {
    label: "HTML",
    Icon: () => <FaHtml5 size={44} color="#CE6B8B" />,
  },
  {
    label: "CSS",
    Icon: () => <FaCss3Alt size={44} color="#CE6B8B" />,
  },
  {
    label: "React",
    Icon: () => <FaReact size={44} color="#CE6B8B" />,
  },
  {
    label: "Tailwind",
    Icon: () => <RiTailwindCssFill size={44} color="#CE6B8B" />,
  },
  {
    label: "CapCut",
    Icon: CapcutIcon, // uses internal size and color bro
  },
  {
    label: "Alight Motion",
    Icon: AlightMotionIcon,
  },
  {
    label: "MS Word",
    Icon: () => <PiMicrosoftWordLogo size={42} color="#CE6B8B" />,
  },
  {
    label: "PowerPoint",
    Icon: () => <PiMicrosoftPowerpointLogo size={42} color="#CE6B8B" />,
  },
  {
    label: "Canva",
    Icon: () => <SiCanva size={44} color="#CE6B8B" />,
  },
];
