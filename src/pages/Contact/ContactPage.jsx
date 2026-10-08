import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RootsBorder from "../../components/RootsBorder/RootsBorder";
import { Eyebrow, FadeUp, MaskLines } from "../../components/About/AboutKit";
import { contact } from "../../data/contact";
import "./ContactPage.css";

const ease = [0.22, 1, 0.36, 1];

function useNow(intervalMs = 30000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

const timeIn = (now, zone) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: zone }).format(now);

/* ---- Hero ------------------------------------------------------------- */

function ContactHero() {
  const reduceMotion = useReducedMotion();
  const now = useNow();
  const word = "Let’s";
  return (
    <section className="ct-hero">
      <div className="content-container relative z-10 pb-14 pt-36 sm:pb-20 sm:pt-44">
        <motion.p
          className="t-eyebrow text-[#E5B869]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Contact
        </motion.p>
        <h1 className="ct-title" aria-label="Let’s talk.">
          <span className="ct-title-row" aria-hidden="true">
            {word.split("").map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: reduceMotion ? 0 : "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.05, ease }}
                >
                  {ch}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="ct-title-row ct-title-accent" aria-hidden="true">
            <span className="inline-block overflow-hidden align-bottom pr-[0.1em]">
              <motion.span
                className="inline-block"
                initial={{ y: reduceMotion ? 0 : "110%", rotate: reduceMotion ? 0 : 6 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease }}
              >
                talk.
              </motion.span>
            </span>
          </span>
        </h1>

        <div className="ct-hero-foot">
          <motion.p
            className="t-lead max-w-md text-white/70"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            Your feedback and support help us grow stronger — connect with us today.
          </motion.p>
          <motion.ul
            className="ct-clocks"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
            aria-label="Local time at our offices"
          >
            {contact.phones.map((phone) => (
              <li key={phone.zone}>
                <span className="ct-clock-dot" aria-hidden="true" />
                <span className="t-eyebrow text-white/50">{phone.label}</span>
                <time className="ct-clock-time tabular">{timeIn(now, phone.zone)}</time>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---- Channels --------------------------------------------------------- */

function useCopy() {
  const [copied, setCopied] = useState(null);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(null), 1600);
    } catch {
      /* Clipboard blocked: the row itself is still a working link. */
    }
  };
  return [copied, copy];
}

function Channel({ icon: Icon, label, value, href, copyValue, copied, onCopy, index, external = false }) {
  const reduceMotion = useReducedMotion();
  const isCopied = copied === label;
  return (
    <motion.li
      className="ct-channel"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
    >
      <a
        href={href}
        className="ct-channel-link group"
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        <span className="ct-channel-icon" aria-hidden="true"><Icon /></span>
        <span className="ct-channel-text">
          <span className="t-eyebrow text-[#6B7280]">{label}</span>
          <span className="ct-channel-value">
            {value.includes("@") ? (
              <>{value.split("@")[0]}<wbr />@{value.split("@")[1]}</>
            ) : value}
          </span>
        </span>
        <span className="ct-channel-arrow" aria-hidden="true"><ArrowUpRight /></span>
      </a>
      {copyValue && (
        <button type="button" className={`ct-copy ${isCopied ? "is-copied" : ""}`} onClick={() => onCopy(label, copyValue)} aria-label={`Copy ${label}`}>
          {isCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        </button>
      )}
    </motion.li>
  );
}

/* ---- Form ------------------------------------------------------------- */

function Field({ id, label, type = "text", textarea = false, value, onChange, error, autoComplete }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className={`ct-field ${value ? "has-value" : ""} ${error ? "has-error" : ""} ${textarea ? "ct-field--area" : ""}`}>
      <Tag
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder=" "
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label htmlFor={id}>{label}</label>
      <span className="ct-field-line" aria-hidden="true" />
      <AnimatePresence>
        {error && (
          <motion.span
            id={`${id}-error`}
            className="ct-field-error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ first: "", last: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (id, value) => {
    setValues((v) => ({ ...v, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (!values.first.trim()) next.first = "Please add your first name";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please add a valid email";
    if (!values.message.trim()) next.message = "Please write a short message";
    setErrors(next);
    if (Object.keys(next).length) return;

    const name = `${values.first} ${values.last}`.trim();
    const body = [values.message, "", `— ${name}`, values.email, values.phone].filter(Boolean).join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate>
      <div className="grid gap-x-6 sm:grid-cols-2">
        <Field id="first" label="First name" value={values.first} onChange={onChange} error={errors.first} autoComplete="given-name" />
        <Field id="last" label="Last name" value={values.last} onChange={onChange} autoComplete="family-name" />
        <Field id="email" label="Email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
        <Field id="phone" label="Phone (optional)" type="tel" value={values.phone} onChange={onChange} autoComplete="tel" />
      </div>
      <Field id="message" label="Your message" textarea value={values.message} onChange={onChange} error={errors.message} />

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button type="submit" className="ct-submit group">
          <span className="ct-submit-fill" aria-hidden="true" />
          <span className="relative flex items-center gap-2">
            {sent ? "Opening your email…" : "Send message"}
            {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />}
          </span>
        </button>
        <p className="text-sm text-[#6B7280]">Opens your email app with the message ready to send.</p>
      </div>
    </form>
  );
}

/* ---- Page ------------------------------------------------------------- */

export default function ContactPage() {
  const [copied, copy] = useCopy();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.oneLine)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=15&output=embed`;

  useEffect(() => {
    document.title = "Contact | Girmitiya Foundation";
  }, []);

  const channels = [
    ...contact.phones.map((phone) => ({
      icon: Phone,
      label: `Call · ${phone.label}`,
      value: phone.display,
      href: `tel:${phone.tel}`,
      copyValue: phone.display,
    })),
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, copyValue: contact.email },
    { icon: MapPin, label: "Visit", value: contact.address.lines.join(", "), href: mapsUrl, copyValue: contact.address.oneLine, external: true },
  ];

  return (
    <>
      <RootsBorder />
      <Navbar />
      <main>
        <ContactHero />

        <section className="bg-[#FAF7F2] py-20 sm:py-28">
          <div className="content-container grid gap-16 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Eyebrow>Reach us directly</Eyebrow>
              <ul className="mt-8 border-t border-[#18181B]/12">
                {channels.map((channel, i) => (
                  <Channel key={channel.label} {...channel} index={i} copied={copied} onCopy={copy} />
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>Or write to us</Eyebrow>
              <MaskLines lines={["Tell us about"]} accent="your search" className="t-h2 mt-5 text-[#18181B]" />
              <FadeUp delay={0.1}>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="ct-map" aria-label="Map">
          <iframe title="Map showing Girmitiya Foundation, Mayur Vihar Phase 1, New Delhi" src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <FadeUp className="ct-map-card">
            <p className="t-eyebrow text-[#E5B869]">Find us</p>
            <address className="mt-3 not-italic">
              {contact.address.lines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="ct-map-link">
              Open in Google Maps <ArrowUpRight aria-hidden="true" />
            </a>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
