export default function MusicProject({ title, description, embeds }) {
  if (!title || !description || !embeds) {
    console.error("MusicProject component requires all props: title, description, embeds");
    return null;
  }
  return (
    <div className="pt-10">
      <div className="text-[32px]">{title}</div>
      <div className="pl-10 pb-10 text-[24px]">
        {description}
        <div className={`grid grid-cols-${embeds.length} place-items-center pt-5`}>{embeds.map((embed) => embed)}</div>
      </div>
    </div>
  );
}
