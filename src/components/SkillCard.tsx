type SkillCardProps = {
  icon: string;
  label: string;
};

const SkillCard = ({ icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-36 h-36 rounded-2xl shadow-sm flex items-center justify-center">
        <img src={icon} alt={label} className="w-12 h-12 object-contain" />
      </div>
      <p className="text-sm font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
};

export default SkillCard;
