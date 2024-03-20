const Monsters = [
  {
    id: 1,
    name: "タマネギカボモン",
    src: "/monsters/tamanegi.png",
    feature:
      "このモンスターは日中、太陽光で充電し、夜になると光る玉ねぎの香りを放ちます。夢を育む不思議な生き物です。",
    status: {
      hp: { jp: "体力", value: 87700 },
      def: { jp: "防御力", value: 22800 },
      att: { jp: "攻撃力", value: 87700 },
      special: { jp: "玉ねぎくささ", value: 93500 },
    },
  },
  {
    id: 2,
    name: "ヤキニクカボモン",
    src: "/monsters/yakiniku.png",
    feature:
      "このモンスターは焼き肉の夢を見るたびに香ばしい煙をふわりと出します。なんともいえない焼き肉の匂いが持ち味です。",
    status: {
      hp: { jp: "体力", value: 58800 },
      def: { jp: "防御力", value: 71600 },
      att: { jp: "攻撃力", value: 44600 },
      special: { jp: "おいしさ", value: 34100 },
    },
  },
  {
    id: 3,
    name: "カーリングカボモン",
    src: "/monsters/carling.png",
    feature: "冷静にスライドしながら環境を守る、一つ目のエコ戦士、ゼロカーボン・カーリングモンスター",
    src: "/monsters/carling.png",
    status: {
      hp: { jp: "体力", value: 45000 },
      def: { jp: "防御力", value: 99999 },
      att: { jp: "攻撃力", value: 21100 },
      special: { jp: "つるつるさ", value: 68000 },
    },
  },
];


export default Monsters;
