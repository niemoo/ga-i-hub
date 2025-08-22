import { list_addonsID, list_addonsEN } from '../../../data/AddOns';

export default function AddOnsSection({ lang_code }: { lang_code: string }) {
  return (
    <section className="mt-[72px]">
      {/* Header Add Ons */}
      <div className="w-11/12 md:w-7/12 mx-auto">
        <div>
          <h3 className="font-slab font-semibold text-[40px] leading-[120%] text-center color-neutral-black-100">Add-Ons</h3>
        </div>
        <div>
          <p className="font-normal text-base leading-[160%] color-neutral-black-60 text-center">
            {lang_code === 'id'
              ? 'i-Hub juga menyediakan berbagai fasilitas tambahan yang dapat Anda manfaatkan sesuai dengan kebutuhan, sehingga dapat membantu Anda lebih produktif saat bekerja atau beraktivitas di sini.'
              : 'i-Hub also provides various additional facilities that you can use according to your needs, so that they can help you be more productive while working or doing activities here.'}
          </p>
        </div>
      </div>

      {/* List Add Ons */}
      <div className="w-10/12 mx-auto grid grid-flow-row md:grid-cols-4 gap-8 mt-[40px]">
        {(lang_code === 'id' ? list_addonsID : list_addonsEN).map((item) => (
          <div className="flex flex-col items-center justify-center p-6 gap-4 shadow-card rounded-[10px]" key={item.id}>
            <div className="w-[56px] h-[56px] rounded-[40px] bg-secondary-cyan-100 flex flex-row items-center justify-center">
              <span className="material-icons text-[28px] text-white">{item.icon}</span>
            </div>
            <div>
              <h5 className="font-medium text-base leading-[1.6] color-neutral-black-100 text-center">{item.title}</h5>
              <p className="font-normal leading-[1.6] text-[14px] color-neutral-black-60 text-center" dangerouslySetInnerHTML={{ __html: item.price }}></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
