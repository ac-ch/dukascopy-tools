const config = {
  instrument: 'eurusd',
  dates: { start: '2019-02-05 13:30', end: '2019-02-05 19:30' },
  timeframe: 'm30',
  volumes: true,
  utcOffset: 0
};

const expectedOutput = [
  [1549373400000, 1.14204, 1.14332, 1.14193, 1.14288, 13401.61],
  [1549375200000, 1.14288, 1.14337, 1.14251, 1.14257, 11632.53],
  [1549377000000, 1.14256, 1.14279, 1.14115, 1.14142, 11933.26],
  [1549378800000, 1.14146, 1.1418, 1.14049, 1.14096, 14924.18],
  [1549380600000, 1.14098, 1.14158, 1.14065, 1.14065, 13129.43],
  [1549382400000, 1.14066, 1.14106, 1.14011, 1.14056, 14344.55],
  [1549384200000, 1.14057, 1.14102, 1.14028, 1.1405, 7799.4],
  [1549386000000, 1.14052, 1.14092, 1.14017, 1.14089, 8484.32],
  [1549387800000, 1.14089, 1.14119, 1.14068, 1.14092, 6196.83],
  [1549389600000, 1.14092, 1.14171, 1.14092, 1.14155, 7389.1],
  [1549391400000, 1.14157, 1.14171, 1.1411, 1.14125, 6464.02],
  [1549393200000, 1.14125, 1.14126, 1.141, 1.14116, 5461.92]
];

export { config, expectedOutput };
