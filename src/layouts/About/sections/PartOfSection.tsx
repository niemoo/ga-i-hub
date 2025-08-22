import LinkButton from '../components/LinkButton';
import PartOfTitle from '../components/PartOfTitle';
import PartOfDescription from '../components/PartOfDescription';
import YouTubeVideoFrame from '../components/YouTubeVideoFrame';

export default function PartOfSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="mt-[120px] w-11/12 md:w-6/12 mx-auto flex flex-col gap-[120px]">
      {/* Part of MNC Land */}
      <div className="flex flex-col justify-center items-center gap-2">
        <PartOfTitle alt="MNC Land Logo" src="/images/logo/logo-mncland.png" />
        <PartOfDescription
          description={
            lang_code === 'id'
              ? 'i-Hub sebagai The Most Strategic & Spacious Coworking Space in Jakarta, adalah bagian dari MNC Land, perusahaan entertainment hospitality terbesar di Indonesia, saat ini juga berfokus pada pengembangan coworking space, private office, office lease di Jakarta, Surabaya, dan Bali.'
              : 'i-Hub, as The Most Strategic & Spacious Coworking Space in Jakarta, is a part of MNC Land, the largest entertainment hospitality company in Indonesia. It is currently focusing on the development of coworking spaces, private offices, and office leases in Jakarta, Surabaya, and Bali.'
          }
        />
        <YouTubeVideoFrame url="https://www.youtube.com/embed/cP9oBw36Gtw?si=wAupKVNRA728wq7U" />
        <LinkButton url="https://mncland.com/" text={lang_code === 'id' ? 'Tentang MNC Land' : 'About MNC Land'} />
      </div>

      {/* Part of MNC Group */}
      <div className="flex flex-col justify-center items-center gap-2">
        <PartOfTitle alt="MNC Group Logo" src="/images/logo/logo-mncgroup.png" />
        <PartOfDescription
          description={
            lang_code === 'id'
              ? 'iHub sebagai bagian dari MNC Land, juga termasuk bagian dari MNC Group yang merupakan group bisnis nasional terbesar di Indonesia, memiliki 4 bidang usaha strategis: Entertainment Hospitality, Media & Entertainment, Financial Services, dan Energy.'
              : 'i-Hub, as part of MNC Land, is also a component of the MNC Group, the largest national business group in Indonesia, with four strategic business sectors: Entertainment Hospitality, Media & Entertainment, Financial Services, and Energy.'
          }
        />
        <YouTubeVideoFrame url="https://www.youtube.com/embed/2IFwpB5BUE8?si=OB03VI7__q7mXaXt" />
        <LinkButton url="https://www.mncgroup.com/" text={lang_code === 'id' ? 'Tentang MNC Group' : 'About MNC Group'} />
      </div>
    </section>
  );
}
