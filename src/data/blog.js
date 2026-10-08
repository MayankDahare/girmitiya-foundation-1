/* Blog content, from the "Your Story" posts on girmitiyafoundation.org.
   Posts are a list of blocks so the article page can lay them out:
   p (paragraph), h (section heading), quote (pull quote), image, timeline. */

import villageGathering from "../assets/blog/village-gathering.webp";
import withElder from "../assets/blog/with-elder.webp";
import garlandedWelcome from "../assets/blog/garlanded-welcome.webp";
import archivePortrait from "../assets/blog/archive-portrait.webp";
import pressFourthGeneration from "../assets/blog/press-fourth-generation.webp";

export const posts = [
  {
    slug: "the-girmitiya-legacy",
    href: "/blog/the-girmitiya-legacy",
    category: "Your Story",
    title: "The Girmitiya Legacy: My Personal Journey Back to My Roots",
    titleLines: ["My journey", "back to my"],
    titleAccent: "roots",
    author: "Swasti Bolay Bheekha",
    authorNote: "Born in Mauritius, living in Switzerland since 1984",
    date: "January 8, 2025",
    readTime: "3 min read",
    excerpt:
      "For years, when people asked where in India I was from, my answer was always “I don’t know.” That no longer felt right — so I decided to find out.",
    cover: garlandedWelcome,
    coverCaption: "Welcomed home to Dehowa village, Ballia",
    body: [
      { type: "h", text: "My journey to discover my roots" },
      {
        type: "p",
        text: "My name is Swasti Bolay Bheekha. I am settled in Switzerland, but my story begins in Riv des Anguilles / Savannes, Mauritius, where I was born into a large family. My father had five brothers, and together with their children, we grew up surrounded by a big, close-knit family.",
      },
      {
        type: "p",
        text: "My Grand Uncle (Chacha), whom we lovingly called Barka Pitaji, was a well-known Pandit in the South of Mauritius. He played a major role in keeping our traditions alive. Every evening we would do Sandhya at home, and he would teach us about our culture and sanskar. No Hawan ceremony, wedding or festival ended without soulful bhajans and his heartfelt advice on how to preserve and respect our heritage.",
      },
      {
        type: "p",
        text: "Mataji has also been deeply rooted in devotion. When we moved from the South to Port-Louis (Ste Croix), where most of the community is Christian, she and some ladies founded a Mahila Samaj, with Hawans and bhajans every Sunday and Bhaitka sessions for children during the week. Wherever she went she carried her Hawan book and Bhajan book. Even though we were very poor, she instilled in us two great values: love and forgiveness.",
      },
      { type: "image", src: archivePortrait, caption: "From the archive", tall: true },
      { type: "h", text: "Life in Switzerland" },
      {
        type: "p",
        text: "I have been living in Switzerland since 1984. The culture here is very different from Mauritius. Still, whenever I visit Mauritius, I make it a point to perform a Hawan, which keeps me strongly connected to my roots.",
      },
      {
        type: "p",
        text: "For a long time I was content with this connection and never felt the need to search for my ancestral land. When asked where I was from, I would simply say, “I am Mauritian, Indian.” But last year, something stirred within me.",
      },
      { type: "quote", text: "Where exactly did I come from? Who were my grandparents? Where is my ancestors’ motherland?" },
      { type: "h", text: "Beginning the search" },
      {
        type: "p",
        text: "Through a distant relative living in Italy, I learned more about our family history and our ancestors. His research inspired me to go deeper.",
      },
      {
        type: "timeline",
        items: [
          { when: "November 2018", text: "My first visit to India, for business. On the very first day, someone shared the incredible yet painful history of our ancestors’ immigration to Mauritius." },
          { when: "March 2019", text: "I returned with a clear purpose: to find my ancestral homeland, visiting villages and government offices with an Indian friend." },
          { when: "Calcutta Port", text: "Where thousands of our ancestors began their difficult journey overseas. Standing there, I could feel what they left behind." },
          { when: "Dehowa village, Ballia", text: "Where my search finally led me." },
        ],
      },
      { type: "image", src: villageGathering, caption: "Speaking to the village" },
      { type: "h", text: "The emotional discovery" },
      {
        type: "p",
        text: "We were warmly welcomed by the head teacher, Mr. Raksh Singh, who introduced us to his father and many elders of the village. Their memory of history, knowledge of the community and hospitality left me deeply impressed. Everywhere we went, people welcomed us with chai and open hearts.",
      },
      {
        type: "p",
        text: "People were touched that, even after so many years, the descendants of Girmitiyas still cherish their culture and language — that in different corners of the world, descendants of India still celebrate Hindu festivals, speak Hindi, and build little “Indias” with mandirs in their new homelands.",
      },
      { type: "image", src: withElder, caption: "With the elders of Dehowa" },
      { type: "h", text: "A deep sense of belonging" },
      {
        type: "p",
        text: "Being in my ancestors’ village was a profoundly emotional experience. For the first time, I truly felt a sense of belonging — the connection with my motherland. I never once felt like a stranger in India. People told me, “You belong to India,” and I could feel it in my heart.",
      },
      { type: "quote", text: "Yes, I am from here." },
      {
        type: "p",
        text: "I returned to Switzerland with immense gratitude and a promise: to come back with my family and introduce them to our ancestral village and the wonderful people who welcomed me. A heartfelt thank you to everyone who helped me discover my ancestors’ bhoomi.",
      },
      { type: "image", src: pressFourthGeneration, caption: "The reunion in the local press" },
    ],
  },
];
