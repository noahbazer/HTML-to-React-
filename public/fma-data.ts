type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

const data: Character[] = [
  {
    name: "Alfonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "https://static.wikia.nocookie.net/universe-of-smash-bros-lawl/images/1/19/Alphonse_Elric_Fullmetal_Alchemist.png/revision/latest?cb=20201121115928",
  },
  {
    name: "Edward Elrich",
    nickName: "Fullmetal Alchemist",
    skillset: ["Human Transmutation", "Alchemy", "Being Short"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Loyal AF", "Sniper"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
      "https://static.wikia.nocookie.net/fma/images/2/26/Riza-profile.png/revision/latest?cb=20200710231139",
  },
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl: "https://static.wikia.nocookie.net/moviemorgue/images/a/ae/Nina_alexander.jpg/revision/latest?cb=20160524214723",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Delivering Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl: "https://static.wikia.nocookie.net/thejusticeworld/images/8/85/800-by-600-366874-20090424144049.jpg/revision/latest?cb=20120415225041",
  },
];
