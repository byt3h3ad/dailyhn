import { Links } from "@/utils/types";

export const Stories: React.FC<{ data: Links[] }> = ({ data }) => {
  return (
    <ol className="space-y-3">
      {data.map((item, index) => (
        <li
          key={item.title}
          className="border border-neutral-500 px-6 py-1 flex items-center gap-x-8 shadow-sm rounded-lg"
        >
          <p className="text-2xl">{index + 1}</p>
          <div className="flex flex-col justify-evenly">
            <a
              href={item.link}
              className="hover:text-primary hover:underline underline-offset-2"
            >
              {item.title}
            </a>
            <a
              href={item.comments}
              className="text-primary hover:underline text-xs"
            >
              comments
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
};
