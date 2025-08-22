export const images = [
  { image: '/images/home/local-area-3.png', category: 'Hotel', title: 'Park Hyatt Jakarta', range: '100 M' },
  { image: '/images/home/local-area-cp.png', category: 'Restaurant', title: 'Center Point Restaurant', range: '200 M' },
  { image: '/images/home/local-area-wollomollo.png', category: 'Restaurant', title: 'Woollomooloo Restaurant', range: '200 M' },
  { image: '/images/home/local-area-wasabae.png', category: 'Restaurant', title: 'Wasabae Restaurant', range: '400 M' },
  { image: '/images/home/local-area-4.png', category: 'Mosque', title: 'Masjid Bimantara', range: '300 M' },
  { image: '/images/home/local-area-1.png', category: 'Train Station', title: 'Stasiun Gondangdia', range: '500 M' },
  { image: '/images/home/local-area-busway.png', category: 'Bus Station', title: 'Halte Bus Gondangdia', range: '500 M' },
  { image: '/images/home/local-area-mrt.png', category: 'MRT Station', title: 'Stasiun MRT Bundaran HI', range: '4 KM' },
  { image: '/images/home/local-area-2.png', category: 'Mall', title: 'Sarinah', range: '2 KM' },
];

export const imageMeeting = [
  { name: '/images/gallery/meeting/meeting1.png', category: 'Meeting' },
  { name: '/images/gallery/meeting/meeting3_new.jpg', category: 'Meeting' },
];

export const imageCoworking = [
  { name: '/images/plans/banner_virtualoffices.png', category: 'Coworking' },
  { name: '/images/plans/banner_monthly.png', category: 'Coworking' },
  { name: '/images/gallery/meeting/meeting5.png', category: 'Coworking' },
];

export const imageEvent = [
  { name: '/images/gallery/event/event1.png', category: 'Event' },
  { name: '/images/gallery/event/event2.png', category: 'Event' },
  { name: '/images/gallery/event/event3.png', category: 'Event' },
];

export const imagePrivate = [{ name: '/images/gallery/private/private1.png', category: 'Private' }];

export const imageAll = [...imageMeeting, ...imagePrivate, ...imageEvent, ...imageCoworking];
