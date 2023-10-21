export type Language = {
  code: string;

  navbar: {
    [slug: string]: string;
  };

  blurb: {
    title: string;
    paragraph: string;
    cta: string;
    more: string;
  };

  about: {
    title: string;
    description: string[];
    status: {
      id: string;
      text: string;
    }[];
  };

  contact: {
    title: string;
    paragraph: string;
    cta: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    cancel: string;
  };

  projects: {
    subtitle: string;
    subtitleGitHub: string;
    url: string;
    source: string;
    seeMore: string;
    details: {
      [id: string]: string;
    };
  };

  email: string;
  skipToContent: string;

  alt: {
    logo: string;
    selfie: string;
    changeLanguage: string;
    langEn: string;
    langPt: string;
  };
};

// type KeyValue = {
//   key: string;
//   value: string;
// };

export type UsesThingSection = {
  title: string;
  items: {
    [item: string]: string;
  };
};
