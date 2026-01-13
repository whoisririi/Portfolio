import {
  Plus,
  MessageCircle,
  Sparkles,
  Brain,
  Megaphone,
  LayoutGrid,
  ShieldAlert,
  Hourglass,
  MessageSquareText,
} from "lucide-react";

export interface Ability {
  label: string;
  Icon: React.ElementType;
}

export const abilities: Ability[] = [
  { label: "Soft Skills", Icon: Plus },
  { label: "Communication", Icon: MessageCircle },
  { label: "Creativity", Icon: Sparkles },
  { label: "Problem Solving", Icon: Brain },
  { label: "Leadership", Icon: Megaphone },
  { label: "Willingness to Learn", Icon: LayoutGrid },
  { label: "Attention to Detail", Icon: ShieldAlert },
  { label: "Time Management", Icon: Hourglass },
  { label: "Open for feedback", Icon: MessageSquareText },
];
