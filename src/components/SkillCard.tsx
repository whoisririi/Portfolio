interface SkillCardProps {
  Icon: () => React.ReactNode;
  label: string;
}

const SkillCard = ({ Icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6">
      <Icon />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default SkillCard;
