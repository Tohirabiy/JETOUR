import { FC } from "react";

interface PROPS {
  title: string;
  description: string;
  image: string;
  link: string;
  speed: number;
  //   id: number;
}
const Card: FC<PROPS> = ({ title, description, image, link, speed }) => {
  return (
    <div className="card flex border p-4">
      <div className="p-4 bg-[#E6E6E6] grid w-[640px] h-[400px] place-content-start">
        <img className="" src={image} alt={title} />
      </div>
      <div className="p-4 flex flex-col">
        <h2>{speed}</h2>
      </div>
      <div className="wrap">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <a href={link}>
        <button>LINK</button>
    </a>
    </div>
  );
};

export default Card;
