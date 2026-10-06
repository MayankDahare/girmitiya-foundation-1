/**
 * Single source of truth for the Foundation's photographic archive.
 *
 * Both the "From Roots to Reunion" scroll story and the "A Living Heritage"
 * dome gallery read from here, so swapping a photograph is a one-line change
 * and no component holds its own copy of an image path.
 */

import fijiRemembrance from "../assets/images/hero 1 (1).jpg";
import mahotsav2025 from "../assets/images/hero 2.jpg";
import ancestralLandBihar from "../assets/images/hero 3.jpg";
import schoolKits from "../assets/images/hero 4.webp";
import villageWelcome from "../assets/images/hero 5.jpg";
import schoolThanks from "../assets/images/hero 6.jpg";
import mahotsav2023 from "../assets/images/img.webp";
import ancestralHome from "../assets/images/img1.webp";
import learningCircle from "../assets/images/img2.webp";
import howrahChildren from "../assets/images/img3.webp";
import villageClassroom from "../assets/images/img4.webp";
import laptopDonation from "../assets/images/img5.webp";
import pressClipping from "../assets/images/img6.webp";
import girlsSchool from "../assets/images/img7.webp";
import mahotsav2024 from "../assets/images/img8.webp";

export const archive = {
  fijiRemembrance,
  mahotsav2025,
  ancestralLandBihar,
  schoolKits,
  villageWelcome,
  schoolThanks,
  mahotsav2023,
  ancestralHome,
  learningCircle,
  howrahChildren,
  villageClassroom,
  laptopDonation,
  pressClipping,
  girlsSchool,
  mahotsav2024,
};

/**
 * The scroll story. Order matters: `story` photographs assemble first, the
 * `reunion` photograph becomes the focal point at the end of the section.
 *
 * `place` values are percentages of the collage stage, so replacing an image
 * never breaks the composition.
 */
export const rootsStory = [
  {
    id: "remembrance",
    src: fijiRemembrance,
    alt: "Children performing at the 143rd Girmit Remembrance Day of Fiji, hosted with the Girmitiya Foundation in New Delhi",
    caption: "Girmit Remembrance Day",
    from: "top",
    place: { left: "3%", top: "4%", width: "27%" },
    tilt: -3.1,
  },
  {
    id: "press",
    src: pressClipping,
    alt: "Hindi newspaper report on the Foundation's work recording Girmitiya family histories",
    caption: "The record keeps growing",
    from: "left",
    place: { left: "0%", top: "50%", width: "25%" },
    tilt: 2.6,
  },
  {
    id: "mahotsav",
    src: mahotsav2023,
    alt: "Girmitiya Mahotsav 2023, held beneath the flags of the Girmitiya nations",
    caption: "Girmitiya Mahotsav",
    from: "right",
    place: { left: "70%", top: "2%", width: "28%" },
    tilt: 3.4,
  },
  {
    id: "homecoming",
    src: villageWelcome,
    alt: "Descendants of Girmitiya families walking garlanded through their ancestral village in Bihar",
    caption: "Walking the village again",
    from: "right",
    place: { left: "72%", top: "52%", width: "27%" },
    tilt: -2.4,
  },
];

export const rootsReunion = {
  id: "reunion",
  src: ancestralLandBihar,
  alt: "A Girmitiya descendant welcomed back to his ancestral land in Bihar, families holding signs reading 'Welcome to your Ancestral Land' and 'Reconnect to your Roots'",
  caption: "Welcome to your ancestral land",
  place: { left: "27%", top: "26%", width: "44%" },
  tilt: -0.8,
};

/**
 * The dome gallery pool. Chosen for square-crop tolerance — every frame keeps
 * its subject near the centre. The press clipping is deliberately left out:
 * it only reads at full width, and it already carries the story above.
 */
export const galleryArchive = [
  { src: mahotsav2024, alt: "Girmitiya Mahotsav 2024 — delegates and performers from across the diaspora" },
  { src: ancestralHome, alt: "A family reunited inside their ancestral home in India" },
  { src: girlsSchool, alt: "Schoolgirls with the Foundation's president after a scholarship programme" },
  { src: fijiRemembrance, alt: "143rd Girmit Remembrance Day of Fiji, held with the High Commission of Fiji" },
  { src: learningCircle, alt: "An open-air learning circle run by the Foundation" },
  { src: laptopDonation, alt: "Laptops handed to students under the Foundation's education programme" },
  { src: ancestralLandBihar, alt: "A homecoming welcome in Bihar — 'Reconnect to your Roots'" },
  { src: howrahChildren, alt: "Children at a Foundation outreach camp in Howrah, West Bengal" },
  { src: mahotsav2025, alt: "Girmitiya Mahotsav 2025 on stage in New Delhi" },
  { src: schoolKits, alt: "School kits distributed to children by the Foundation" },
  { src: villageClassroom, alt: "A village classroom supported by the Foundation" },
  { src: villageWelcome, alt: "Diaspora visitors welcomed through an ancestral village" },
  { src: mahotsav2023, alt: "Girmitiya Mahotsav 2023 beneath the flags of the Girmitiya nations" },
  { src: schoolThanks, alt: "Students thanking the Girmitiya Foundation for its support of their school" },
];
