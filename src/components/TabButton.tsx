type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-sm font-semibold transition
        ${
          isActive
            ? "bg-dirtygold text-lightpink"
            : "bg-[#f2e8c9] text-dirtygold hover:bg-[#e6dab5]"
        }
      `}
    >
      {label}
    </button>
  );
};

export default TabButton;
