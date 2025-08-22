import { useState } from 'react';

interface PromoProps {
  id: string;
  language_code: string;
  title: string;
  description: string;
  promo_code: string;
  discount: string;
  start_date: string;
  end_date: string;
}

interface PromoCardProps {
  promo: PromoProps;
  lang_code: string;
}

export default function PromoCard({ promo, lang_code }: PromoCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [copiedPromoCode, setCopiedPromoCode] = useState('');

  const copyPromoCode = (code: string) => {
    setCopiedPromoCode(code);
    setShowPopup(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };
  return (
    <>
      <div className="flex flex-col w-full rounded-[8px] overflow-hidden">
        <div className="p-6 bg-primary-soft-blue-100 h-full">
          <div className="flex justify-between items-center mb-[12px]">
            <h3 className="font-semibold text-base leading-[1.6] color-neutral-black-100">{promo.title}</h3>
            <span className="px-[6px] py-[2px] rounded-[4px] bg-secondary-red-100 color-neutral-white-100 text-[14px] font-medium">
              {lang_code === 'id' ? 'Diskon' : 'Discount'} {promo.discount}%
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-row justify-between">
              <h3 className="font-normal text-[14px] leading-[1.6] color-neutral-black-60 flex flex-row gap-2 items-center">
                <span className="material-icons text-[14px]">date_range</span>
                {lang_code === 'id' ? 'Tanggal Periode' : 'Date Periode'}
              </h3>
              <h3 className="font-semibold text-[14px] leading-[1.6] color-primary-blue-100">
                {promo.start_date} - {promo.end_date}
              </h3>
            </div>
            <div className="flex flex-row justify-between">
              <h3 className="font-normal text-[14px] leading-[1.6] color-neutral-black-60 flex flex-row items-center gap-2">
                <span className="material-icons text-[14px]">local_offer</span>
                {lang_code === 'id' ? 'Kode Promo' : 'Promo Code'}
              </h3>
              <h3 onClick={() => copyPromoCode(promo.promo_code)} className="font-semibold text-[14px] leading-[1.6] color-primary-blue-100 flex flex-row gap-2 items-center cursor-pointer">
                {promo.promo_code}
                <span className="material-icons text-[14px]">content_copy</span>
              </h3>
            </div>
          </div>
          <div style={{ borderTop: '1px dashed #dddddd' }} className="mt-[16px] pt-[16px]">
            <p className="text-justify">{promo.description}</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-10 right-4 w-1/5 h-1/5 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded shadow-lg text-center">
            {lang_code === 'id' ? (
              <p>
                Kode promo "<strong>{copiedPromoCode}</strong>" telah disalin ke clipboard Anda.
              </p>
            ) : (
              <p>
                Promo code "<strong>{copiedPromoCode}</strong>" has been copied to your clipboard.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
