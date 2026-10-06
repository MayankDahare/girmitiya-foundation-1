import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe2, Plane, Play } from "lucide-react";
import archiveRoots from "../../assets/moments/archive-roots.webp";
import villageOutreach from "../../assets/moments/village-outreach.webp";

function GlobeArtwork({ reduceMotion }) {
  return (
    <motion.div
      className="gf-globe-stage"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gf-globe-halo" />
      <div className="gf-globe">
        <svg className="gf-globe-routes" viewBox="0 0 620 500" aria-hidden="true">
          <defs>
            <clipPath id="gf-globe-clip"><circle cx="310" cy="250" r="205" /></clipPath>
          </defs>
          <g clipPath="url(#gf-globe-clip)">
            <path className="gf-latitude" d="M80 250 Q310 125 540 250 Q310 375 80 250Z" />
            <path className="gf-latitude" d="M120 155 Q310 80 500 155 Q310 230 120 155Z" />
            <path className="gf-latitude" d="M120 345 Q310 420 500 345 Q310 270 120 345Z" />
            <path className="gf-longitude" d="M310 45 Q175 250 310 455 Q445 250 310 45Z" />
            <path className="gf-longitude" d="M310 45 Q250 250 310 455" />
            <path className="gf-longitude" d="M310 45 Q370 250 310 455" />
            <path className="gf-land" d="M178 128l34-20 38 12 18 31-17 30-31 8-19 32-25-13-12-38zM270 202l39-13 28 21-8 29-23 17 5 42-24 50-28-12-10-50-22-30 22-29zM367 130l48-15 42 25-16 31-25 9-9 36-29-13-22-32zM390 258l37-22 34 19-7 39-29 15-4 54-34 38-22-41 16-43zM480 330l39 3 32 29-9 38-39-3-22-26z" />
            <path className="gf-land" d="M236 82l31-15 20 17-12 29-29 6zM115 248l27-10 26 19-14 25-28-4z" />
            <g className="gf-route-group">
              <path id="gf-route-one" className="gf-route route-one" d="M145 120 Q230 70 365 224" />
              <path id="gf-route-two" className="gf-route route-two" d="M126 178 Q228 180 365 224" />
              <path id="gf-route-three" className="gf-route route-three" d="M220 328 Q294 265 365 224" />
              <path id="gf-route-four" className="gf-route route-four" d="M440 145 Q407 183 365 224" />
              <path id="gf-route-five" className="gf-route route-five" d="M375 342 Q367 276 365 224" />
              <path id="gf-route-six" className="gf-route route-six" d="M516 226 Q438 210 365 224" />
              <path id="gf-route-seven" className="gf-route route-seven" d="M480 370 Q426 290 365 224" />
            </g>
            {!reduceMotion && (
              <g className="gf-route-pulses">
                <circle r="4" className="gf-route-pulse"><animateMotion dur="4.8s" begin="1.3s" repeatCount="indefinite" path="M145 120 Q230 70 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="5.2s" begin="2.1s" repeatCount="indefinite" path="M126 178 Q228 180 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="4.4s" begin="2.8s" repeatCount="indefinite" path="M220 328 Q294 265 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="4.1s" begin="3.4s" repeatCount="indefinite" path="M440 145 Q407 183 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="3.8s" begin="4s" repeatCount="indefinite" path="M375 342 Q367 276 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="5.4s" begin="4.6s" repeatCount="indefinite" path="M516 226 Q438 210 365 224" /></circle>
                <circle r="3.5" className="gf-route-pulse"><animateMotion dur="4.9s" begin="5.2s" repeatCount="indefinite" path="M480 370 Q426 290 365 224" /></circle>
              </g>
            )}
            <g className="gf-locations">
              <g className="gf-location location-canada" transform="translate(145 120)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-17" y="-34" width="68" height="18" rx="4" /><text x="-10" y="-22">Canada</text></g>
              <g className="gf-location location-usa" transform="translate(126 178)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-16" y="13" width="47" height="18" rx="4" /><text x="-9" y="25">USA</text></g>
              <g className="gf-location location-south-africa" transform="translate(220 328)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-22" y="14" width="90" height="18" rx="4" /><text x="-15" y="26">South Africa</text></g>
              <g className="gf-location location-uk" transform="translate(440 145)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-12" y="-34" width="35" height="18" rx="4" /><text x="-5" y="-22">UK</text></g>
              <g className="gf-location location-mauritius" transform="translate(375 342)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-19" y="14" width="72" height="18" rx="4" /><text x="-12" y="26">Mauritius</text></g>
              <g className="gf-location location-fiji" transform="translate(516 226)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-12" y="-34" width="34" height="18" rx="4" /><text x="-5" y="-22">Fiji</text></g>
              <g className="gf-location location-australia" transform="translate(480 370)"><circle className="gf-location-ring" r="13" /><circle className="gf-location-dot" r="5" /><rect x="-16" y="14" width="68" height="18" rx="4" /><text x="-9" y="26">Australia</text></g>
            </g>
            <circle className="gf-india" cx="365" cy="224" r="17" />
            <circle className="gf-india-core" cx="365" cy="224" r="7" />
          </g>
        </svg>
      </div>
      <div className="gf-globe-caption">Our Family<br /><em>Across Continents</em></div>
      <div className="gf-stamp"><span>PEOPLE</span><span>PLACES</span><span>STORIES</span><b>ONE FAMILY</b></div>
      <div className="gf-photo gf-photo-main"><img src={archiveRoots} alt="Archival photograph of Girmitiya families" /><span>New Shores</span></div>
      <div className="gf-photo gf-photo-small"><img src={villageOutreach} alt="Girmitiya Foundation meeting families in an ancestral village" /><span>Same Dreams</span></div>
      <Plane className="gf-plane" aria-hidden="true" />
    </motion.div>
  );
}

export default function GlobalFamily() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const handlePointerMove = (event) => {
    if (reduceMotion || !sectionRef.current || event.pointerType === "touch") return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    sectionRef.current.style.setProperty("--gf-mx", `${x * 4}px`);
    sectionRef.current.style.setProperty("--gf-my", `${y * 3}px`);
  };

  return (
    <section id="chapter" ref={sectionRef} onPointerMove={handlePointerMove} className="gf-section">
      <style>{`
        .gf-section { --gf-mx: 0px; --gf-my: 0px; position: relative; overflow: hidden; min-height: 720px; background: #f7f1e5; color: #102238; }
        .gf-section::before { content: ""; position: absolute; inset: 0; opacity: .34; background: radial-gradient(circle at 70% 45%, rgba(255,255,255,.9), transparent 38%), linear-gradient(115deg, rgba(255,255,255,.4), transparent 55%); pointer-events: none; }
        .gf-inner { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(310px, .78fr) minmax(560px, 1.22fr); align-items: center; gap: 1rem; width: min(1440px, 100%); min-height: 720px; margin: auto; padding: 4.5rem 4.5rem 4rem 7.8rem; }
        .gf-copy { position: relative; z-index: 3; max-width: 500px; }
        .gf-eyebrow { display: inline-flex; align-items: center; gap: .7rem; padding: .72rem 1.2rem; border: 1px solid rgba(185,135,58,.24); border-radius: 2rem; background: rgba(255,255,255,.3); color: #b47d1e; font: 500 var(--text-eyebrow)/1 var(--font-mono); letter-spacing: .14em; }
        .gf-eyebrow svg { width: 1.08rem; height: 1.08rem; }
        .gf-heading { margin: 2.2rem 0 1.25rem; font: 600 var(--text-h1)/1.02 var(--font-display); letter-spacing: -.04em; }
        .gf-heading span { display: block; color: #c18714; font-family: var(--font-serif); font-style: italic; font-weight: 400; font-size: 1.08em; letter-spacing: -.015em; }
        .gf-support { max-width: 435px; color: #465b6c; font: 400 var(--text-lead)/1.6 var(--font-sans); }
        .gf-cta { display: inline-flex; align-items: center; gap: .8rem; margin-top: 2rem; padding: 1rem 1.35rem; border-radius: 4px; background: #c78b12; color: #fffaf0; font: 600 .9rem/1 var(--font-sans); box-shadow: 0 12px 24px rgba(116,75,10,.13); transition: transform 300ms ease, background 300ms ease, box-shadow 300ms ease; }
        .gf-cta:hover { transform: translateY(-3px); background: #b47708; box-shadow: 0 17px 28px rgba(116,75,10,.22); }
        .gf-cta svg { transition: transform 300ms ease; }
        .gf-cta:hover svg { transform: translateX(4px); }
        .gf-journey { display: inline-flex; align-items: center; gap: .55rem; margin: 1.15rem 0 0 1rem; color: #263849; font: 500 .9rem/1 var(--font-sans); }
        .gf-journey span { display: grid; place-items: center; width: 2rem; height: 2rem; border: 1px solid #263849; border-radius: 50%; }
        .gf-quote { margin-top: 2rem; color: #314759; font: italic 400 1.35rem/1.35 var(--font-serif); }
        .gf-quote::after { content: ""; display: block; width: 130px; height: 1px; margin-top: 1rem; background: #c29136; }
        .gf-globe-stage { position: relative; min-height: 630px; transform: translate(var(--gf-mx), var(--gf-my)); transition: transform 180ms ease-out; }
        .gf-globe-halo { position: absolute; top: 5%; left: 8%; width: 78%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(215,170,75,.28), rgba(225,198,142,.1) 47%, transparent 68%); filter: blur(18px); }
        .gf-globe { position: absolute; top: 3%; left: 5%; width: 80%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 35% 25%, #fffdf5 0 8%, #f5e9cb 35%, #d9bf86 70%, #bea064 100%); box-shadow: inset -30px -20px 55px rgba(117,79,21,.22), inset 24px 18px 40px rgba(255,255,255,.72), 0 22px 40px rgba(92,64,22,.2); overflow: hidden; }
        .gf-globe::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(circle at 25% 20%, rgba(255,255,255,.52), transparent 26%), linear-gradient(110deg, transparent 58%, rgba(99,68,25,.13)); }
        .gf-globe-routes { position: absolute; inset: 0; width: 100%; height: 100%; }
        .gf-latitude, .gf-longitude { fill: none; stroke: #fff9eb; stroke-width: 1.5; opacity: .32; }
        .gf-land { fill: #d5b36a; opacity: .7; stroke: #f7e9c7; stroke-width: 2; }
        .gf-route { fill: none; stroke: #d39112; stroke-width: 2; stroke-dasharray: 5 6; opacity: 0; animation: gf-route-draw 1.6s .7s ease-out forwards; }
        .route-two { animation-delay: .85s; }.route-three { animation-delay: 1s; }.route-four { animation-delay: 1.15s; }.route-five { animation-delay: 1.3s; }.route-six { animation-delay: 1.45s; }.route-seven { animation-delay: 1.6s; }
        .gf-route-pulse { fill: #fff9e8; stroke: #d39112; stroke-width: 2; filter: drop-shadow(0 0 4px rgba(255,210,86,.95)); }
        .gf-location { cursor: pointer; transform-box: fill-box; transform-origin: center; opacity: 0; animation: gf-marker-in .65s cubic-bezier(.22,1,.36,1) forwards; }
        .location-canada { animation-delay: 1.15s; }.location-usa { animation-delay: 1.3s; }.location-south-africa { animation-delay: 1.45s; }.location-uk { animation-delay: 1.6s; }.location-mauritius { animation-delay: 1.75s; }.location-fiji { animation-delay: 1.9s; }.location-australia { animation-delay: 2.05s; }
        .gf-location:hover { transform: scale(1.12); }.gf-location-ring { fill: rgba(207,143,18,.18); stroke: #d39112; stroke-width: 1.5; }.gf-location-dot { fill: #fffaf0; stroke: #b87808; stroke-width: 2; }.gf-location rect { fill: rgba(255,252,241,.94); stroke: rgba(160,113,35,.35); stroke-width: 1; filter: drop-shadow(0 3px 3px rgba(75,52,18,.14)); }.gf-location text { fill: #253545; font: 600 10px var(--font-sans); }
        .gf-location-ring { animation: gf-marker-pulse 2.8s ease-out infinite; }
        .gf-india { fill: #d28c08; opacity: .9; }.gf-india-core { fill: #fffaf0; }
        .gf-globe-caption { position: absolute; right: 0; top: 35%; color: #b38a53; font: italic 400 2rem/1.15 var(--font-serif); transform: rotate(-6deg); }
        .gf-globe-caption em { font-size: .92em; }
        .gf-stamp { position: absolute; top: 0; right: 3%; display: grid; place-items: center; gap: .08rem; width: 112px; height: 112px; padding: 1rem; border: 2px solid rgba(166,126,68,.7); border-radius: 50%; color: #a77b40; font: 700 .63rem/1.4 var(--font-sans); letter-spacing: .09em; transform: rotate(-10deg); }
        .gf-stamp b { font-size: .48rem; letter-spacing: .12em; }
        .gf-photo { position: absolute; z-index: 2; padding: .55rem .55rem .8rem; background: #faf7ed; box-shadow: 0 12px 18px rgba(55,43,24,.2); color: #3d3b34; font: italic 400 1.1rem/1 var(--font-serif); }
        .gf-photo img { display: block; width: 100%; height: 100%; object-fit: cover; filter: sepia(.7) grayscale(.8) contrast(.9); }
        .gf-photo span { display: block; padding-top: .55rem; }
        .gf-photo-main { bottom: 3%; left: 8%; width: 190px; height: 170px; transform: rotate(-9deg); }.gf-photo-main img { height: 125px; }
        .gf-photo-small { bottom: 2%; left: 27%; width: 160px; height: 148px; transform: rotate(8deg); }.gf-photo-small img { height: 105px; }
        .gf-plane { position: absolute; bottom: 18%; left: 1%; width: 1.8rem; color: #ae7818; transform: rotate(-35deg); }
        @keyframes gf-route-draw { from { opacity: 0; stroke-dashoffset: 60; } to { opacity: .72; stroke-dashoffset: 0; } }
        @keyframes gf-marker-in { from { opacity: 0; transform: scale(.5); } to { opacity: 1; transform: scale(1); } }
        @keyframes gf-marker-pulse { 0%, 58%, 100% { opacity: .35; transform: scale(1); } 26% { opacity: .9; transform: scale(1.22); } }
        @media (max-width: 1024px) { .gf-inner { padding-left: 3.5rem; padding-right: 2.5rem; grid-template-columns: .8fr 1.2fr; }.gf-heading { font-size: 3.7rem; }.gf-globe-stage { min-height: 540px; } }
        @media (max-width: 760px) { .gf-section, .gf-inner { min-height: 0; }.gf-inner { display: block; padding: 5rem 1.35rem 3rem; }.gf-copy { max-width: none; }.gf-heading { margin-top: 2rem; }.gf-support { max-width: 28rem; }.gf-journey { margin-left: 0; }.gf-globe-stage { min-height: 520px; margin-top: 2rem; transform: none; }.gf-globe { top: 8%; left: 3%; width: 96%; }.gf-globe-halo { top: 10%; left: 3%; width: 94%; }.gf-globe-caption { right: 1%; top: 43%; font-size: 1.25rem; }.gf-stamp { right: 0; width: 86px; height: 86px; font-size: .48rem; }.gf-photo-main { left: 1%; bottom: 1%; width: 145px; height: 132px; }.gf-photo-main img { height: 95px; }.gf-photo-small { left: 26%; bottom: 0; width: 125px; height: 118px; }.gf-photo-small img { height: 80px; } }
        @media (prefers-reduced-motion: reduce) { .gf-section * { animation: none !important; transition: none !important; } }
      `}</style>
      <div className="gf-inner">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="gf-copy"
        >
          <p className="gf-eyebrow"><Globe2 aria-hidden="true" /> GIRMITIYA FOUNDATION</p>
          <h2 className="gf-heading">
            Connecting
            <span>A Global Family</span>
          </h2>
          <p className="gf-support">
            Bridging Continents, Reconnecting Generations, Upholding Heritage
          </p>
          <a href="#chapter" className="gf-cta">
            Our Global Presence <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href="#chapter" className="gf-journey"><span><Play aria-hidden="true" className="h-3 w-3 fill-current" /></span> Our Journey (2 Min)</a>
          <p className="gf-quote">“Different Lands. Same Roots. Always a Family.”</p>
        </motion.div>

        <GlobeArtwork reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
