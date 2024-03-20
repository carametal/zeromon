export default mergeMonsters = [
  {
    name: "グリーンウィンディア",
    src: "../public/monsters/tamanegiFuryoku.png",
    feature:
      "オニオン頭の小さな風車がチョコチョコ回る、エコなにっこり発電モンスター。",
    status: {
      hp: { jp: "体力", value: 3400 },
      def: { jp: "防御力", value: 2600 },
      att: { jp: "攻撃力", value: 1900 },
      special: { jp: "玉ねぎくささ", value: 87000 },
    },
    mixup: {
      parent: "タマネギカボモン",
      word: "風力発電"
    },
  },
];
