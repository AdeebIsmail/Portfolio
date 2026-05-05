import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors ">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] mx-auto pt-0 pr-1 pl-1 pb-0 mt-[30px] mb-[60px]">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 flex flex-row justify-between items-center px-2 pt-2 pb-0">
              <div className="text-3xl sm:text-[1.4rem] md:text-[1.5rem] lg:text-[2rem] font-bold">
                adeeb ismail
              </div>

              <div className="flex flex-row items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </button>
                <div className="z text-[clamp(0.7rem,3.2vw,0.875rem)] text-right">
                  <Link to="/books" className="hover:underline">
                    books
                  </Link>
                </div>
                <div className="z text-[clamp(0.7rem,3.2vw,0.875rem)] text-right">
                  <Link to="/biking" className="hover:underline">
                    biking
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-1 pb-0 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                hey@adeebismail.com |{" "}
                <a
                  href="https://www.linkedin.com/in/adeeb-m-ismail/"
                  className="hover:underline"
                >
                  linkedin
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/AdeebIsmail"
                  className="hover:underline"
                >
                  github
                </a>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-6 pb-1 text-base md:text-[1rem] lg:text-[1.2rem] font-bold text-left">
                experience
              </div>
            </div>

            <div className="col-span-12 space-y-4">
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    software engineering intern
                  </div>
                  <div className="text-xs whitespace-nowrap flex-shrink-0">
                    2024 - 2026
                  </div>
                </div>
                <div className="px-2 text-xs italic">lockheed martin</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  supporting the manufacturing execution system (MES) for the
                  f-35 lightning II program
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    undergraduate teaching assistant
                  </div>
                  <div className="text-xs whitespace-nowrap flex-shrink-0">
                    2023 - 2026
                  </div>
                </div>
                <div className="px-2 text-xs italic">texas a&amp;m</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  Teaching assistant for intro to python (engr 102) and
                  experimental physics lab (engr 216)
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    student researcher
                  </div>
                  <div className="text-xs whitespace-nowrap flex-shrink-0">
                    mar 2025 - may 2025
                  </div>
                </div>
                <div className="px-2 text-xs italic">texas a&amp;m</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  researched windows vulnerabilities and developed dynamic link
                  library (DLL) injection code
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    code sensei
                  </div>
                  <div className="text-xs whitespace-nowrap flex-shrink-0">
                    2021 - 2023
                  </div>
                </div>
                <div className="px-2 text-xs italic">code ninjas</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  taught programming fundamentals and assisted students across
                  multiple topics
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="px-2 pt-6 pb-1 text-base md:text-[1rem] lg:text-[1.2rem] font-bold text-left">
                projects
              </div>
            </div>

            <div className="col-span-12 space-y-2">
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    BRL-CAD raytracing visualizer
                  </div>
                </div>
                <div className="px-2 text-xs italic">C/C++, Intel OSPRay</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  tool for visualizing and interacting with BRL-CAD geometry
                  using ray tracing
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    minimal linux kernel
                  </div>
                </div>
                <div className="px-2 text-xs italic">C/C++</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  operating system with physical and virtual memory, threading,
                  a file system, etc
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    <a
                      href="https://github.com/AdeebIsmail/PiDisplay"
                      className="hover:underline"
                    >
                      e-ink display
                    </a>{" "}
                  </div>
                  <div className="flex-shrink-0">
                    <a href="https://github.com/AdeebIsmail/PiDisplay">
                      <svg
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 -0.5 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="px-2 text-xs italic">Python</div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  e-ink display that dynamically displays the song currently
                  playing on spotify
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    <a
                      href="https://github.com/AdeebIsmail/PandaExpressPOS"
                      className="hover:underline"
                    >
                      point of sales system
                    </a>{" "}
                  </div>
                  <div className="flex-shrink-0">
                    <a href="https://github.com/AdeebIsmail/PandaExpressPOS">
                      <svg
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 -0.5 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="px-2 text-xs italic">
                  Vue.js, Express.js, Node.js, PostgreSQL
                </div>

                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  POS system with self-checkout kiosk, cashier terminal, and
                  manager dashboard
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center px-2 gap-2">
                  <div className="font-medium text-[clamp(0.7rem,3.2vw,0.875rem)] text-left min-w-0">
                    <a
                      href="https://github.com/AdeebIsmail/route-map-generator"
                      className="hover:underline"
                    >
                      route map generator
                    </a>{" "}
                  </div>
                  <div className="flex-shrink-0">
                    <a href="https://github.com/AdeebIsmail/route-map-generator">
                      <svg
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 -0.5 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="px-2 text-xs italic">
                  React.js, Tailwind CSS
                </div>
                <div className="px-2 text-[clamp(0.7rem,3.2vw,0.875rem)] text-left">
                  custom map generator for creating and visualizing biking
                  routes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
