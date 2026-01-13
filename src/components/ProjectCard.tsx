type ProjectCardProps = {
  image: string;
  name: string;
  description: string;
  role: string;
  websiteUrl?: string;
  figmaUrl?: string;
};

const ProjectCard = ({
  image,
  name,
  description,
  role,
  websiteUrl,
  figmaUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>

        <p className="text-sm text-gray-600">{description}</p>

        <p className="text-xs italic text-gray-500">{role}</p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              Visit Website
            </a>
          )}

          {figmaUrl && (
            <a
              href={figmaUrl}
              target="_blank"
              className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Access Prototype
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
