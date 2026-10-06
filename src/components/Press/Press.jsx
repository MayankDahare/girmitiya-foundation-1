import "./Press.css";

// Logos published on girmitiyafoundation.org ("Global Media Trusts Us" and
// "Organizations Standing with Us").
import p01 from "../../assets/press/press-01.png";
import p02 from "../../assets/press/press-02.png";
import p03 from "../../assets/press/press-03.png";
import p04 from "../../assets/press/press-04.png";
import p05 from "../../assets/press/press-05.png";
import p06 from "../../assets/press/press-06.png";
import p07 from "../../assets/press/press-07.png";
import p08 from "../../assets/press/press-08.png";
import p09 from "../../assets/press/press-09.png";
import p10 from "../../assets/press/press-10.png";
import p11 from "../../assets/press/press-11.png";
import p12 from "../../assets/press/press-12.png";
import a01 from "../../assets/partners/partner-01.png";
import a02 from "../../assets/partners/partner-02.png";
import a03 from "../../assets/partners/partner-03.png";
import a04 from "../../assets/partners/partner-04.png";

const media = [
  { src: p01, name: "France Network Times" },
  { src: p02, name: "Toronto Sun Times" },
  { src: p03, name: "British News Network" },
  { src: p04, name: "England News Portal" },
  { src: p05, name: "Indian News Network" },
  { src: p06, name: "ThePrint" },
  { src: p07, name: "ANI" },
  { src: p08, name: "ZEE5" },
  { src: p09, name: "mid-day" },
  { src: p10, name: "Hindustan Times" },
  { src: p11, name: "The Tribune" },
  { src: p12, name: "Dailyhunt" },
];

const partners = [
  { src: a01, name: "Zyro" },
  { src: a02, name: "Mr. Choice" },
  { src: a03, name: "Vasta Biotech" },
  { src: a04, name: "MC360" },
];

export default function Press() {
  return (
    <section className="pr" aria-labelledby="press-heading">
      <div className="pr-head content-container">
        <p className="t-eyebrow pr-eyebrow">In the news</p>
        <h2 id="press-heading" className="t-h2 pr-title">
          Global media <span className="t-accent">trusts</span> us
        </h2>
      </div>

      <div className="pr-marquee">
        <ul className="pr-track">
          {[0, 1].map((copy) =>
            media.map((m) => (
              <li key={`${copy}-${m.name}`} className="pr-logo" aria-hidden={copy === 1 ? "true" : undefined}>
                <img src={m.src} alt={copy === 0 ? m.name : ""} loading="lazy" decoding="async" />
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="pr-partners content-container">
        <p className="t-eyebrow pr-partners-label">Organizations standing with us</p>
        <ul className="pr-partners-list">
          {partners.map((p) => (
            <li key={p.name} className="pr-logo pr-logo--partner">
              <img src={p.src} alt={p.name} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
