type Champion = {
  allytips: string[];
  blurbs: string;
  enemytips: string[];
  id: string;
  image: {};
  info: {};
  key: string;
  lore: string;
  name: string;
  partype: string;
  passive: {};
  recommended: [];
  skins: Object[];
  spells: Object[];
  stats: {};
  tags: string[];
  title: string;
};

type User = {
  user: {
    user: {
      email: string;
      name: string;
      image: string;
    };
  };
};
