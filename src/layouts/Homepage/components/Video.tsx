export default function Video() {
  return (
    <div className="block md:col-span-7 pe-[16px] md:pe-0">
      <video className="rounded-xl w-full md:rounded-2xl md:mx-auto h-[280px] md:h-[420px] overflow-hidden object-cover cursor-pointer" poster="/video/placeholder.png" controls>
        <source src="/video/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
