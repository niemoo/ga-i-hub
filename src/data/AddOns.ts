interface AddOn {
  id: number;
  icon: string;
  title: string;
  price: string;
}
export const list_addonsID: AddOn[] = [
  {
    id: 1,
    icon: 'event_seat',
    title: 'Ruangan Meeting',
    price: 'IDR 600.000 / 2 Jam',
  },
  {
    id: 2,
    icon: 'print',
    title: 'Printing',
    price: 'BW IDR 1.000* / Lembar <br/> Warna IDR 3.000* / Lembar <br/> Scan Gratis',
  },
  {
    id: 3,
    icon: 'mark_email_read',
    title: 'Alamat Bisnis',
    price: 'IDR 500.000 / Bulan',
  },
  {
    id: 4,
    icon: 'history_edu',
    title: 'Perizinan & Lisensi',
    price: 'Mulai dari IDR 6.500.000*',
  },
];

export const list_addonsEN: AddOn[] = [
  {
    id: 1,
    icon: 'event_seat',
    title: 'Meeting Room',
    price: 'IDR 600.000 / 2 Hours',
  },
  {
    id: 2,
    icon: 'print',
    title: 'Printing',
    price: 'BW IDR 1.000* / Lembar <br/> Color IDR 3.000* / Lembar <br/> Free Scan',
  },
  {
    id: 3,
    icon: 'mark_email_read',
    title: 'Business Address',
    price: 'IDR 500.000 / Month',
  },
  {
    id: 4,
    icon: 'history_edu',
    title: 'Permits & Licensing',
    price: 'Start from IDR 6.500.000*',
  },
];
