import Image from "next/image";

export default function DevProject({ title, link, description, technologies, thumbnail }) {
  if (!title || !link || !description || !technologies || !thumbnail) {
    console.error("DevProject component requires all props: title, link, description, technologies, thumbnail");
    return null;
  }
  return (
    <div className="pb-10 devbreak:p-0">
      <a target="_blank" href={link} rel="noreferrer">
        <Image
          className="drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition duration-100"
          src={thumbnail}
          width={565}
          alt="kyusite thumbnail"
          style={{ border: "2px solid #999999", borderRadius: "2px" }}
        />
      </a>
      <div className="text-[24px] w-[565px]">
        <b>{title}</b> - {description}
        <br />
        <i className="text-[18px]">{technologies}</i>
      </div>
    </div>
  );
}
