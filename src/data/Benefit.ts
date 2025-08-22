interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const listBenefitId: Benefit[] = [
  {
    id: 1,
    title: 'Prominent Location',
    description: 'Berlokasi strategis berada di kawasan bisnis MNC Center, termasuk dalam area Ring 1, dekat dengan pusat pemerintahan, kantor BUMN, kedutaan besar, beragam pilihan destinasi kuliner, dan pusat perbelanjaan modern.',
    image: '/images/icons/timer.png',
  },
  {
    id: 2,
    title: 'Pleasant Access',
    description: 'Memiliki akses yang mudah dengan berbagai pilihan transportasi publik modern, mulai dari MRT, TransJakarta, dan KRL, serta alternatif jalan dengan 4 akses pintu masuk yang berbeda.',
    image: '/images/icons/access.png',
  },
  {
    id: 3,
    title: 'Premium Facilities',
    description: 'Terintegrasi dengan luxury hotel Park Hyatt Jakarta dan dilengkapi dengan berbagai pilihan restoran dari lokal hingga internasional, coffee shop, mini market, dan ATM Center.',
    image: '/images/icons/pappers.png',
  },
];

export const listBenefitEn: Benefit[] = [
  {
    id: 1,
    title: 'Prominent Location',
    description: 'Strategically located in the MNC Center complex, surrounded by Embassies and Goverment Office, Jakarta Landmark, and Premium Shopping Center.',
    image: '/images/icons/timer.png',
  },
  {
    id: 2,
    title: 'Pleasant Access',
    description: 'It has easy access with various modern public transportation options, starting from the MRT, TransJakarta, and KRL, and is free from Odd-Even with 4 entrance access from 4 different main roads.',
    image: '/images/icons/access.png',
  },
  {
    id: 3,
    title: 'Premium Facilities',
    description: 'Integrated with luxury hotel Park Hyatt Jakarta, and completed with various local and international culinary options, coffee shops, mini market, and ATM Center.',
    image: '/images/icons/pappers.png',
  },
];
