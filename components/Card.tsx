import Image, { StaticImageData } from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";

interface CardProps {
  url: string;
  image: StaticImageData;
  href?: string;
  languages: string[];
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({
  url,
  image,
  title,
  href,
  languages,
  desc,
}) => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-center gap-10 border-[1px] p-10 shadow-2xl">
      <div className="flex flex-row justify-center items-center w-full">
        <Image src={image} alt="image" className="w-72 h-72 rounded-md" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <h1 className="text-lg font-extrabold">{title}</h1>
        <p className="text-md opacity-90">{desc}</p>
        <div className="flex flex-row items-center justify-center gap-4">
          {languages.map((item, key) => {
            return (
              <p key={key} className="font-extrabold text-md">
                {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-row items-center justify-center gap-16 p-6">
          <a
            className="flex flex-row gap-2 items-center justify-center hover:underline"
            href={url}
            target="_blank"
          >
            <AiFillGithub size={30} />
            <p className="font-extrabold text-lg">Code</p>
          </a>
          {href && (
            <a
              className="flex flex-row gap-2 items-center justify-center hover:underline"
              href={href}
              target="_blank"
            >
              <BsBoxArrowInUpRight size={30} />
              <p className="font-extrabold text-lg">Demo</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
