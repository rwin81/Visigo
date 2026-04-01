export interface Content {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    image: string;
    imagePosition?: string;
  };
  problems: {
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
    solution: {
      title: string;
      desc: string;
    };
  };
  services: {
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  howItWorks: {
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  why: {
    title: string;
    desc: string;
    images: string[];
    imagePositions?: string[];
    highlight: {
      title: string;
      desc: string;
    };
    items: { title: string; desc: string }[];
  };
  testimonials: {
    title: string;
    desc: string;
    items: { name: string; city: string; text: string; avatar: string }[];
  };
  coverage: {
    title: string;
    desc: string;
    cities: string[];
  };
  cta: {
    title: string;
    desc: string;
  };
  googleSheetUrl?: string;
  logoUrl?: string;
  whatsappNumber: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}
