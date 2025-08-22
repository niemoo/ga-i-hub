export default function AboutSection({ lang_code }: { lang_code: string }) {
  return (
    <section>
      {lang_code === 'id' ? (
        <>
          {/* Title ID */}
          <div>
            <h1 className="font-slab font-semibold text-[20px] md:text-[40px] text-center leading-[120%] color-neutral-black-100">Tentang i-hub</h1>
          </div>

          {/* First Description ID */}
          <div className="w-10/12 md:w-8/12 mx-auto mt-2">
            <p className="font-normal text-[14px] md:text-base leading-[160%] text-center color-neutral-black-60">
              Kehadiran i-Hub menjawab kebutuhan perusahaan maupun perorangan yang membutuhkan ruang kerja bersama yang modern dan inspiratif dengan berbagai keunggulan dan daya tarik utama 3P: Lokasi Strategis, Kemudahan Akses, dan
              Fasilitas Premium.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Title EN */}
          <div>
            <h1 className="font-slab font-semibold text-[20px] md:text-[40px] text-center leading-[120%] color-neutral-black-100">About i-hub</h1>
          </div>

          {/* First Description EN */}
          <div className="w-10/12 md:w-8/12 mx-auto mt-2">
            <p className="font-normal text-[14px] md:text-base leading-[160%] text-center color-neutral-black-60">
              The presence of i-Hub addresses the needs of both businesses and individuals who require a modern and inspiring shared workspace with various advantages and the main attractions of 3P: Prominent Location, Pleasant Access, and
              Premium Facilities.
            </p>
          </div>
        </>
      )}

      {/* Image */}
      <div className="h-[180px] md:h-[300px] xl:h-[400px] 2xl:h-[450px] w-11/12 md:w-8/12 mx-auto mt-[72px] grid grid-flow-col grid-cols-3 gap-6">
        <div className="flex flex-row items-end">
          <img alt="i-Hub Chair" src="/images/about/image_about_1.png" className="items-center w-full rounded-[14px]" />
        </div>
        <div className="flex flex-row items-start">
          <img alt="Busway" src="/images/about/image_about_2.png" className="items-center w-full rounded-[14px]" />
        </div>
        <div className="flex flex-row items-end">
          <img alt="i-Hub Receptionist" src="/images/about/image_about_3.png" className="items-center w-full rounded-[14px]" />
        </div>
      </div>

      {lang_code === 'id' ? (
        <>
          {/* Second Description ID */}
          <div className="w-11/12 md:w-8/12 mx-auto p-10 gap-4 flex flex-col bg-primary-soft-blue-100 rounded-2xl mt-[72px]">
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              i-Hub sebagai The Most Strategic & Spacious Coworking Space in Jakarta, dapat menjadi solusi yang tepat dalam memenuhi kebutuhan coworking space, private office, meeting room, dan event space bagi para perusahaan nasional,
              multinasional, start-up, entrepreneur, hingga freelancer.
            </p>
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              Coworking space di era modern seperti saat ini juga dapat menjadi ruang bersama untuk menambah koneksi dalam pertumbuhan bisnis Anda. Ruangan nyaman yang ditawarkan di area coworking space juga dapat menstimulus produktivitas
              terciptanya ide-ide kreatif yang begitu menginspirasi.
            </p>
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              MNC Land melalui i-Hub ingin menawarkan ruang kerja bersama di pusat kota yang dapat menjadi pusat bertumbuhnya creative hub dan business center dengan beragam inovasi terdepan. i-Hub akan selalu memberikan layanan dan
              fasilitas terbaik untuk menunjang kebutuhan Anda.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Second Description EN */}
          <div className="w-11/12 md:w-8/12 mx-auto p-10 gap-4 flex flex-col bg-primary-soft-blue-100 rounded-2xl mt-[72px]">
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              i-Hub as The Most Strategic & Spacious Coworking Space in Jakarta, can be the right solution to meet your needs coworking space, private office, meeting room and event space for national companies, multinationals, start-ups,
              entrepreneurs, to freelancers.
            </p>
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              Coworking space in the modern era like today can also be shared space to add connections in your business growth. The comfortable rooms offered in the coworking space area are also available Stimulates productivity and creates
              creative ideas inspiring.
            </p>
            <p className="font-normal text-base leading-[160%] color-neutral-black-100 text-justify">
              MNC Land through i-Hub wants to offer co-working space in the center a city that can become a center for the growth of creative hubs and businesses center with a variety of leading innovations. i-Hub will always deliver the
              best services and facilities to support your needs.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
