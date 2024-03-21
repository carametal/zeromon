const mergeMonsters = [
  {
    id: 4,
    name: "グリーンウィンディア",
    src: "/monsters/tamanegiFuryoku.png",
    feature:
      "オニオン頭の小さな風車がチョコチョコ回る、エコなにっこり発電モンスター。",
    status: {
      hp: { jp: "体力", value: 3400 },
      def: { jp: "防御力", value: 2600 },
      att: { jp: "攻撃力", value: 1900 },
      special: { jp: "エネルギー再生力", value: 87000 },
    },
    mixup: {
      parent: "タマネギカボモン",
      word: "風力発電",
    },
  },
  {
    id: 5,
    name: "エナジーバーナー",
    src: "/monsters/energyburner.png",
    feature:
      "焼き肉のパワー全開！蓄電池体でエネルギー満タン、充電中のハイボルテージ・グリルビースト！",
    status: {
      hp: { jp: "体力", value: 63000 },
      def: { jp: "防御力", value: 41000 },
      att: { jp: "攻撃力", value: 58000 },
      special: { jp: "エネルギー容量", value: 95000 },
    },
    mixup: {
      parent: "ヤキニクカボモン",
      word: "蓄電池",
    },
  },
  {
    id: 6,
    name: "リサイクリングストン",
    src: "/monsters/recyclingston.png",
    feature:
      "リサイクル愛溢れるガラクタ体のキュートストーン、地球を守るスマイルがチャームポイント！",
    status: {
      hp: { jp: "体力", value: 48300 },
      def: { jp: "防御力", value: 77900 },
      att: { jp: "攻撃力", value: 21500 },
      special: { jp: "資源回復力", value: 89200 },
    },
    mixup: {
      parent: "カーリングカボモン",
      word: "リサイクル",
    },
  },
];

export default mergeMonsters;
