import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaTiktok } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function FooterId() {
  return (
    <section className="bg-primary-soft-blue-100 mt-[72px] md:mt-32">
      <div className="grid justify-items-stretch grid-flow-row md:grid-cols-12 top-footer py-12 gap-8 md:gap-0 w-11/12 mx-auto">
        {/* i-Hub Left Side */}
        <div className="w-full flex flex-col col-span-4 gap-8">
          <Link to="/" className="flex flex-col justify-self-center px-0 w-full">
            <img src="/images/logo/footer-logo.png" width={135} height={60} alt="i-Hub Logo" />
          </Link>
          <div>
            <p className="text-base font-normal leading-[160%] color-neutral-black-60 w-full md:w-9/12">The Most Strategic & Spacious Coworking Space in Jakarta</p>
            <p className="text-base font-normal leading-[160%] color-neutral-black-60 w-full md:w-9/12 mt-4">
              Jam Operasional <br />
              Senin-Jumat 09:00 - 18:00
            </p>
          </div>
        </div>

        {/* Contact Middle Side */}
        <div className="w-full flex flex-col col-span-3">
          <div className="header">
            <h3 className="text-[20px] leading-[160%] font-semibold color-neutral-black-100 mb-4">Kontak</h3>
            <ul className="flex flex-col gap-3">
              {/* Address 1 */}
              <li className="flex flex-row gap-3">
                <div>
                  <span className="material-icons color-primary-blue-100">location_on</span>
                </div>
                <div>
                  <p className="font-normal text-base leading-[160%] color-neutral-black-60">
                    Coworking Park Tower, 10-11/F
                    <br />
                    MNC Center Jalan Kebon Sirih, Kav. 17-19 <br />
                    Jakarta Pusat 10340, Indonesia
                  </p>
                </div>
              </li>

              {/* Address 2 */}
              <li className="flex flex-row gap-3">
                <div>
                  <span className="material-icons color-primary-blue-100">location_on</span>
                </div>
                <div>
                  <p className="font-normal text-base leading-[160%] color-neutral-black-60">
                    i-Hub Office, 7-8/F <br />
                    Jln. Wahid Hasyim No. 38, Menteng <br />
                    Jakarta Pusat, DKI Jakarta 10340
                  </p>
                </div>
              </li>

              {/* Phone Number */}
              <li className="flex flex-row gap-3">
                <div>
                  <span className="material-icons color-primary-blue-100">phone</span>
                </div>
                <div>
                  <p className="font-normal text-base leading-[160%] color-neutral-black-60">+62 21 311 80 600</p>
                </div>
              </li>

              {/* Whatsapp Number */}
              <li className="flex flex-row gap-3">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_720_1403)">
                      <path
                        d="M19 4.91C17.13 3.03 14.64 2 11.99 2C6.53 2 2.08 6.45 2.08 11.91C2.08 13.66 2.54 15.36 3.4 16.86L2 22L7.25 20.62C8.7 21.41 10.33 21.83 11.99 21.83C17.45 21.83 21.9 17.38 21.9 11.92C21.9 9.27 20.87 6.78 19 4.91ZM11.99 20.15C10.51 20.15 9.06 19.75 7.79 19L7.49 18.82L4.37 19.64L5.2 16.6L5 16.29C4.18 14.98 3.74 13.46 3.74 11.91C3.74 7.37 7.44 3.67 11.98 3.67C14.18 3.67 16.25 4.53 17.8 6.09C19.36 7.65 20.21 9.72 20.21 11.92C20.23 16.46 16.53 20.15 11.99 20.15ZM16.51 13.99C16.26 13.87 15.04 13.27 14.82 13.18C14.59 13.1 14.43 13.06 14.26 13.3C14.09 13.55 13.62 14.11 13.48 14.27C13.34 14.44 13.19 14.46 12.94 14.33C12.69 14.21 11.89 13.94 10.95 13.1C10.21 12.44 9.72 11.63 9.57 11.38C9.43 11.13 9.55 11 9.68 10.87C9.79 10.76 9.93 10.58 10.05 10.44C10.17 10.3 10.22 10.19 10.3 10.03C10.38 9.86 10.34 9.72 10.28 9.6C10.22 9.48 9.72 8.26 9.52 7.76C9.32 7.28 9.11 7.34 8.96 7.33C8.81 7.33 8.65 7.33 8.48 7.33C8.31 7.33 8.05 7.39 7.82 7.64C7.6 7.89 6.96 8.49 6.96 9.71C6.96 10.93 7.85 12.11 7.97 12.27C8.09 12.44 9.72 14.94 12.2 16.01C12.79 16.27 13.25 16.42 13.61 16.53C14.2 16.72 14.74 16.69 15.17 16.63C15.65 16.56 16.64 16.03 16.84 15.45C17.05 14.87 17.05 14.38 16.98 14.27C16.91 14.16 16.76 14.11 16.51 13.99Z"
                        fill="#213E7A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_720_1403">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <p className="font-normal text-base leading-[160%] color-neutral-black-60">+62 815 111 80 600</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex flex-row gap-3">
                <div>
                  <span className="material-icons color-primary-blue-100">mail</span>
                </div>
                <div>
                  <Link to="mailto:info@i-hub.co.id" target="_blank" rel="noopener noreferrer" className="font-normal text-base leading-[160%] color-neutral-black-60">
                    info@i-hub.co.id
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col col-span-3 px-0 md:px-12">
          <h3 className="text-[20px] leading-[160%] font-semibold color-neutral-black-100 mb-4 flex flex-col items-start">Media Sosial</h3>
          <ul className="flex flex-row items-center gap-4 list-none">
            <li className="text-base color-neutral-black-60">
              <Link to="https://instagram.com/ihubcoid">
                <div className=" hover:text-red-600">
                  <InstagramIcon fontSize="medium" />
                </div>
              </Link>
            </li>
            <li className="text-base color-neutral-black-60">
              <Link to="https://twitter.com/ihubcoid">
                <div className=" hover:text-black">
                  <XIcon fontSize="medium" />
                </div>
              </Link>
            </li>
            <li className="text-base color-neutral-black-60">
              <Link to="https://facebook.com/ihubcoid">
                <div className=" hover:text-blue-700">
                  <FacebookIcon fontSize="medium" />
                </div>
              </Link>
            </li>
            <li className="text-base color-neutral-black-60">
              <Link to="https://tiktok.com/@ihubcoid">
                <div className=" hover:text-black">
                  <FaTiktok className="text-xl" />
                </div>
              </Link>
            </li>
            <li className="text-base color-neutral-black-60">
              <Link to="https://www.youtube.com/@ihubcoid">
                <div className=" hover:text-red-500">
                  <YouTubeIcon fontSize="large" />
                </div>
              </Link>
            </li>
          </ul>
          <p className="font-normal text-base leading-[160%] color-neutral-black-60 mt-[10px]">@ihubcoid</p>
        </div>

        {/* Manage by BSR Right Side*/}
        <div className="w-full flex flex-col col-span-2">
          <div>
            <Link to="https://www.bsrindonesia.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2">
              <h3 className="text-[20px] leading-[160%] font-semibold color-neutral-black-100">Managed by</h3>
              <img src="/images/logo/logo-bsr.png" width={78} height={82} alt="BSR Logo" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-footer text-base font-normal leading-[160%] color-neutral-black-60 flex flex-col md:flex-row justify-between items-center gap-4 text-center py-6 border-neutral-black-10 px-[72px]">
        <div>
          <p>© 2023 MNC Land. All Rights Reserved.</p>
        </div>
        <Link to="https://mncland.com/" target="_blank" className="flex gap-2 items-center">
          <p>Member of</p>
          <img src="/images/logo/logo-mncland.png" width="86" alt="Logo MNC Land" />
        </Link>
      </div>
    </section>
  );
}
