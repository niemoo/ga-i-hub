import PlansList from '../../../components/PlanLists';

export default function PlanSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="plans-wrapper px-[24px] md:px-[72px] mx-auto 2mt-3 relative">
      {lang_code === 'id' ? (
        <>
          <h1 className="title-plans font-medium leading-[120%] text-[40px] text-center mb-2 color-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
            Tentukan Paket Terbaik Anda
          </h1>

          <p className="text-center w-full md:w-9/12 mx-auto text-base font-normal color-neutral-black-60">
            i-Hub menawarkan beragam pilihan ruang kerja terbaik untuk perusahaan atau perorangan sesuai dengan kebutuhan Anda. Baik sebagai ruang kerja bersama, kantor pribadi, ruang rapat, atau tempat penyelenggaraan acara.
          </p>
        </>
      ) : (
        <>
          <h1 className="title-plans font-medium leading-[120%] text-[40px] text-center mb-2 color-neutral-black-100" style={{ fontFamily: 'Roboto Slab' }}>
            Choose Your Best Plan
          </h1>

          <p className="text-center w-full md:w-9/12 mx-auto text-base font-normal color-neutral-black-60">
            i-Hub offers a wide selection of the best workspaces for companies or individuals according to your needs. Whether as a shared workspace, private office, meeting room, or event venue.
          </p>
        </>
      )}

      <img src="/images/icons/decoration_plans_left.png" className="mx-auto mt-10 absolute left-[10px] top-[80px]" alt="Decoration Left" />
      <img src="/images/icons/decoration_plans_right.png" className="mx-auto mt-10 absolute right-[10px] top-[80px]" alt="Decoration Right" />

      <PlansList lang_code={lang_code} />
    </section>
  );
}
