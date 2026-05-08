import React from "react";
import { Link } from "react-router-dom";
import havoc from "../gifs/brlcad.gif";

function BRLCAD() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="flex flex-col justify-start items-center min-h-screen w-full">
        <div className="max-w-[600px] w-full mx-auto pt-0 pr-1 pl-1 pb-0 mt-[30px] mb-[60px]">
          <div className="flex flex-row items-center gap-2 pt-2 px-2 justify-between">
            <Link
              to="/"
              className=" underline hover:no-underline text-sm md:text-[0.80rem] lg:text-[0.85rem]"
            >
              back
            </Link>
            <div className="flex-shrink-0">
              <a href="https://github.com/RyanKerstetter/BRLCADVisualizer">
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

          <div className="space-y-2 px-2 py-1">
            <div className="text-base md:text-[1rem] lg:text-[1.2rem] font-bold text-left">
              BRL-CAD raytracing visualizer
            </div>
            <img
              src={havoc}
              height="600"
              width="600"
              alt="Gif of havoc helicopter being rotated around"
            />

            <p className="text-sm md:text-[0.85rem] lg:text-[0.9rem] py-1">
              BRL-CAD is a CAD system for creating custom geometric models. the
              tool ray traces
              <sup id="footnote1">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("section1")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  [1]
                </a>
              </sup>{" "}
              BRL-CAD geometry by integrating with BRL-CAD's built-in ray
              tracing function, (<em>rt_shootray()</em>). a custom intel ospray
              <sup id="footnote2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("section2")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  [2]
                </a>
              </sup>{" "}
              module interfaces with the BRL-CAD geometry to render the scene.
              when an ospray ray intersects the bounding volume of a BRL-CAD
              model, the ray is converted into a BRL-CAD-compatible format and
              passed to
              <em> rt_shootray()</em>. BRL-CAD performs the constructive solid
              geometry (CSG) intersection calculations and returns the
              intersection results to ospray for rendering.
            </p>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 560 565"
                width="100%"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
              >
                <rect x="10" y="15" width="500" height="28" />
                <text
                  x="260"
                  y="33"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  user moves camera
                </text>

                <line x1="260" y1="43" x2="260" y2="65" />
                <polygon
                  points="254,65 266,65 260,71"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="71" width="500" height="28" />
                <text
                  x="260"
                  y="89"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  ospray fires rays
                </text>

                <line x1="260" y1="99" x2="260" y2="121" />
                <polygon
                  points="254,121 266,121 260,127"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="127" width="500" height="28" />
                <text
                  x="260"
                  y="145"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  embree narrows candidate geometry
                </text>

                <line x1="260" y1="155" x2="260" y2="177" />
                <polygon
                  points="254,177 266,177 260,183"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="183" width="500" height="28" />
                <text
                  x="260"
                  y="201"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  ray hits BRL-CAD AABB? (brlcadBounds checked)
                </text>

                <line x1="260" y1="211" x2="260" y2="233" />
                <polygon
                  points="254,233 266,233 260,239"
                  fill="currentColor"
                  stroke="none"
                />
                <text
                  x="272"
                  y="225"
                  fill="currentColor"
                  stroke="none"
                  fontSize="9"
                >
                  yes
                </text>

                <rect x="10" y="239" width="500" height="28" />
                <text
                  x="260"
                  y="257"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  call brlcadIntersect() callback
                </text>

                <line x1="260" y1="267" x2="260" y2="289" />
                <polygon
                  points="254,289 266,289 260,295"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="295" width="500" height="28" />
                <text
                  x="260"
                  y="313"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  traceRay() converts embree ray to BRL-CAD format
                </text>

                <line x1="260" y1="323" x2="260" y2="345" />
                <polygon
                  points="254,345 266,345 260,351"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="351" width="500" height="28" />
                <text
                  x="260"
                  y="369"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  rt_shootray() does exact CSG intersection
                </text>

                <line x1="260" y1="379" x2="260" y2="401" />
                <polygon
                  points="254,401 266,401 260,407"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="407" width="500" height="28" />
                <text
                  x="260"
                  y="425"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  hitCallback writes distance + normal back
                </text>

                <line x1="260" y1="435" x2="260" y2="457" />
                <polygon
                  points="254,457 266,457 260,463"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="463" width="500" height="28" />
                <text
                  x="260"
                  y="481"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  ospray shades pixel using hit info
                </text>

                <line x1="260" y1="491" x2="260" y2="513" />
                <polygon
                  points="254,513 266,513 260,519"
                  fill="currentColor"
                  stroke="none"
                />

                <rect x="10" y="519" width="500" height="28" />
                <text
                  x="260"
                  y="537"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="11"
                >
                  display updated frame
                </text>

                <path
                  d="M510,533 L540,533 L540,29 L516,29"
                  fill="none"
                  strokeWidth="0.75"
                />
                <polygon
                  points="516,23 516,35 510,29"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            <hr></hr>
            <p
              className="text-sm md:text-[0.85rem] lg:text-[0.9rem] py-1"
              id="section1"
            >
              [1] {""}
              <a
                href="https://en.wikipedia.org/wiki/Ray_tracing_(graphics)"
                className="underline hover:no-underline"
              >
                Ray tracing
              </a>
              {""} is a rendering technique in computer graphics that simulates
              the physical behavior of light to generate highly realistic images{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("footnote1")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                ↩
              </a>
            </p>

            <p
              className="text-sm md:text-[0.85rem] lg:text-[0.9rem] py-1"
              id="section2"
            >
              [2] {""}
              <a
                href="https://www.ospray.org/"
                className="underline hover:no-underline"
              >
                Intel® OSPRay
              </a>
              {""} is an open source, scalable, and portable ray tracing engine
              for high-performance and high-fidelity visualization{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("footnote2")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                ↩
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BRLCAD;
