interface YouTubeVideoFrameProps {
  url: string;
}

export default function YouTubeVideoFrame({ url }: YouTubeVideoFrameProps) {
  return (
    <div className="my-10 w-full mx-auto relative">
      <img alt="Decoration Left" src="/images/icons/decoration_plans_left.png" className="mx-auto mt-10 absolute left-[-80px] top-[-140px]" />
      <img alt="Decoration Right" src="/images/icons/decoration_plans_right.png" className="mx-auto mt-10 absolute right-[-80px] top-[-140px]" />
      <iframe
        width="100%"
        height="485"
        className="rounded-none md:rounded-xl"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
