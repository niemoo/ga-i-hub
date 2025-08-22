interface Promo {
  judul: string;
  diskon: number;
  start_date: string;
  end_date: string;
  kode_promo: string;
  deskripsi: string;
}

export const listPromoID: Promo[] = [
  {
    judul: 'Private Office with View - Disc 20%',
    diskon: 20,
    start_date: '1 Maret 2025',
    end_date: '31 Maret 2025',
    kode_promo: 'RAMADHAN-WITH-VIEW-20%',
    deskripsi: 'Nikmati fleksibilitas kerja dan lingkungan yang menginspirasi dengan diskon 20% untuk paket Private Office dengan view selama 6 bulan /Pax.',
  },
  {
    judul: 'Private Office with View - Disc 25%',
    diskon: 25,
    start_date: '1 Maret 2025',
    end_date: '31 Maret 2025',
    kode_promo: 'RAMADHAN-WITH-VIEW-25%',
    deskripsi: 'Dapatkan diskon 25% untuk paket Private Office Dengan View selama 12 bulan /Pax. Ideal bagi Anda yang ingin berinvestasi dalam lingkungan kerja yang inspiratif dalam jangka panjang.',
  },
  {
    judul: 'Private Office Non View - Disc 25%',
    diskon: 25,
    start_date: '1 Maret 2025',
    end_date: '31 Maret 2025',
    kode_promo: 'RAMADHAN-NON-VIEW-25%',
    deskripsi: 'Rasakan kenyamanan dan kestabilan dengan meja kerja pribadi Anda. Manfaatkan diskon 25% untuk paket Private Office Non View selama 6 bulan /Pax.',
  },
  {
    judul: 'Private Office Non View - Disc 30%',
    diskon: 30,
    start_date: '1 Maret 2025',
    end_date: '31 Maret 2025',
    kode_promo: 'RAMADHAN-NON-VIEW-30%',
    deskripsi: 'Dapatkan diskon eksklusif 30% untuk paket Private Office Non View selama 12 bulan /Pax. Jadikan meja kerja pribadi ini sebagai basis operasi bisnis Anda dalam jangka panjang.',
  },
];

export const listPromoEN: Promo[] = [
  {
    judul: 'Private Office with View - Disc 20%',
    diskon: 20,
    start_date: '1 March 2025',
    end_date: '31 March 2025',
    kode_promo: 'RAMADHAN-WITH-VIEW-20%',
    deskripsi: 'Enjoy flexible work and an inspiring environment with a 20% discount on Private Office With View packages for 6 months /Pax.',
  },
  {
    judul: 'Private Office with View - Disc 25%',
    diskon: 25,
    start_date: '1 March 2025',
    end_date: '31 March 2025',
    kode_promo: 'RAMADHAN-WITH-VIEW-25%',
    deskripsi: 'Get a 25% discount on Private Office With View packages for 12 months /Pax. Perfect for those investing in a long-term inspiring work environment.',
  },
  {
    judul: 'Private Office Non View - Disc 25%',
    diskon: 25,
    start_date: '1 March 2025',
    end_date: '31 March 2025',
    kode_promo: 'RAMADHAN-NON-VIEW-25%',
    deskripsi: 'Experience comfort and stability with your private workspace. Enjoy a 25% discount on Non-View Private Office packages for 6 months /Pax.',
  },
  {
    judul: 'Private Office Non View - Disc 30%',
    diskon: 30,
    start_date: '1 March 2025',
    end_date: '31 March 2025',
    kode_promo: 'RAMADHAN-NON-VIEW-30%',
    deskripsi: 'Enjoy an exclusive 30% discount on Non-View Private Office packages for 12 months /Pax. Make this private workspace the foundation of your long-term business operations.',
  },
];
