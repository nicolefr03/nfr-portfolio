// src/data/content.js
// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE ONLY FILE YOU NEED TO EDIT.
// Change the text between the "quotes" and save. The site updates instantly.
// Don't delete the commas, brackets, or curly braces.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Nicole Frossard-Reis",
  initials: "NFR",
  role: "Aspiring Sports Journalist",
  tagline:
    "Media & Communications student at Florida State University. Covering soccer, Formula 1, beauty and the stories in between.",
  location: "Tallahassee, FL",
  email: "nicolefrossardreis03@gmail.com",

  // ↓↓↓ PASTE YOUR REAL LINKEDIN URL HERE ↓↓↓
  linkedin: "https://www.linkedin.com/in/nicole-frossard-reis",

  // Photo lives at: public/nfr.jpeg  → written as "/nfr.jpeg" (no "/public")
  photo: "/nfr.jpeg",
};

// The three numbers in the hero, styled like a race timing board.
export const stats = [
  { value: "14K+", label: "Views on short-form video", unit: "reach" },
  { value: "04", label: "Languages spoken", unit: "fluency" },
  { value: "2027", label: "Expected BA, FSU", unit: "grid start" },
];

// Your bio. Each item in this list becomes its own paragraph.
export const bio = [
  `Nicole Frossard-Reis is a junior writer and social media team member at Her Campus, FSU chapter. Nicole — or as her little brother calls her, "Ni" — was born in Coral Springs in 2003. When she was 5 she moved to her family's home country, Brazil. As a good Brazilian, futebol, Formula 1 and pão de queijo are some of her passions.`,
  `Majoring in Media/Communications Studies, she received her Associate degree from Tallahassee State College in May 2025, and transferred to Florida State University to finish her Bachelor's degree in May 2027.`,
  `Nicole enjoys learning new things. She is fluent in English, Portuguese and Spanish, and entry level in Italian. Her goal is to pursue a career in Sports Journalism — traveling the world, covering soccer matches and cars going "vroom vroom" on tracks with weird circle shapes.`,
];

// Education + experience. Newest first.
export const timeline = [
  {
    org: "Florida State University",
    title: "BA, Media / Communications Studies",
    date: "Aug 2025 — May 2027",
  },
  {
    org: "Her Campus at FSU",
    title: "Staff Writer & Social Media Team",
    date: "Aug 2025 — Present",
  },
  {
    org: "Tallahassee State College",
    title: "AA Degree · Talon Newspaper Staff",
    date: "Aug 2023 — May 2025",
  },
];

// Skills. "icon" names come from lucide.dev — browse there to swap any of them.
export const skills = [
  { icon: "pen-line", label: "Copywriting" },
  { icon: "book-open", label: "Storytelling" },
  { icon: "clapperboard", label: "Short-form video & editing" },
  { icon: "mic", label: "Reporting" },
  { icon: "video", label: "On-camera experience" },
  { icon: "megaphone", label: "Communications" },
  { icon: "users", label: "Leadership" },
  { icon: "puzzle", label: "Problem solving" },
  { icon: "timer", label: "Time management" },
  { icon: "scan-eye", label: "Detail oriented" },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Portuguese", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
  { name: "Italian", level: "Entry level" },
];

// The three "Selected Work" cards.
export const work = [
  {
    no: "01",
    title: "Her Campus at FSU — Social",
    kicker: "Instagram & X (Twitter)",
    body: "I script, create, film and edit short-form video for the Instagram page — over 14K views. On X, I write copy promoting Her Campus' published articles throughout the week.",
    icon: "clapperboard",
  },
  {
    no: "02",
    title: "Articles Published",
    kicker: "Culture · Lifestyle · Campus",
    body: "Contributing writer to Her Campus at FSU, published across the Culture, Lifestyle and Campus rotations — from Formula 1 and beauty to campus life.",
    icon: "newspaper",
  },
  {
    no: "03",
    title: "Brand Events",
    kicker: "Clinique · NYX · Jo Malone",
    body: "Attended and collaborated on brand activations around campus, creating coverage and content on-site for Her Campus at FSU.",
    icon: "sparkles",
  },
];

// Published articles. Replace each "#" with the real Her Campus link.
// To add another, copy a whole line and change the details.
export const articles = [
  {
    title: "Beauty Is Racing Into Formula 1",
    date: "October 28, 2025",
    tag: "Culture",
    url: "#",
  },
  {
    title:
      "Too Old for Trick-or-Treat but Too Broke for the Bar? Here's How to Have Halloween Fun on Campus",
    date: "October 13, 2025",
    tag: "Campus",
    url: "#",
  },
  {
    title: "From Blemishes to Brilliance: Skincare Tips Every Girly Girl Needs",
    date: "October 2, 2025",
    tag: "Lifestyle",
    url: "#",
  },
  {
    title: "Is That an Emotional Support Kangaroo? How AI Changes Media Trust",
    date: "September 19, 2025",
    tag: "Culture",
    url: "#",
  },
];

export const brands = [

  "Her Campus",
  "Talon Newspaper",
];

export const quote =
  "I am passionate about sports, storytelling and beauty. Writing for Her Campus is a way for me to share my voice and pull people into this world.";

// The scrolling banner under the hero.
export const marqueeWords = [
  "Sports Journalism",
  "Formula 1",
  "Storytelling",
  "Beauty",
  "Social Media",
  "Copywriting",
  "Futebol",
  "On-camera",
];
