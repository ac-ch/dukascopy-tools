const config = {
  instrument: 'eurusd',
  dates: { start: '2019-02-04', end: '2019-02-06' },
  timeframe: 'h1',
  volumes: true,
  utcOffset: 0
};

const expectedOutput = [
  [1549238400000, 1.14543, 1.14597, 1.14529, 1.14555, 8461.1602],
  [1549242000000, 1.14555, 1.1459, 1.1454, 1.14581, 6976.1201],
  [1549245600000, 1.14582, 1.14603, 1.14529, 1.14534, 6508.71],
  [1549249200000, 1.14535, 1.14545, 1.14461, 1.14484, 7484.6001],
  [1549252800000, 1.14485, 1.14491, 1.14412, 1.14424, 7980.6299],
  [1549256400000, 1.14424, 1.14461, 1.14424, 1.14434, 6174],
  [1549260000000, 1.14436, 1.14444, 1.14395, 1.14442, 8094.8799],
  [1549263600000, 1.14441, 1.14453, 1.14379, 1.14424, 17706.2207],
  [1549267200000, 1.14425, 1.14533, 1.14386, 1.14508, 27671.7305],
  [1549270800000, 1.14509, 1.14534, 1.1444, 1.14453, 25673.5293],
  [1549274400000, 1.14452, 1.14482, 1.14406, 1.14465, 24749.8906],
  [1549278000000, 1.14466, 1.14542, 1.14449, 1.14518, 20980.8008],
  [1549281600000, 1.14518, 1.14526, 1.14413, 1.14477, 21617.2109],
  [1549285200000, 1.14475, 1.14511, 1.14429, 1.14488, 21869.1992],
  [1549288800000, 1.14488, 1.14504, 1.14248, 1.14262, 27261.3906],
  [1549292400000, 1.14263, 1.14375, 1.14254, 1.14287, 28460.9297],
  [1549296000000, 1.14286, 1.14378, 1.14244, 1.14376, 24519.3906],
  [1549299600000, 1.14376, 1.14399, 1.14296, 1.14312, 18367.6406],
  [1549303200000, 1.14312, 1.14347, 1.14264, 1.14322, 16084.6699],
  [1549306800000, 1.14321, 1.14357, 1.14305, 1.14312, 13005.2305],
  [1549310400000, 1.14311, 1.1435, 1.14311, 1.14343, 13736.4404],
  [1549314000000, 1.14344, 1.14372, 1.14335, 1.14353, 4759.6802],
  [1549317600000, 1.14353, 1.14375, 1.14343, 1.1435, 3163.1499],
  [1549321200000, 1.14352, 1.14385, 1.14344, 1.14349, 5834.7798],
  [1549324800000, 1.14348, 1.14391, 1.14328, 1.14357, 6869.02],
  [1549328400000, 1.14357, 1.14395, 1.14353, 1.1438, 5077.5601],
  [1549332000000, 1.1438, 1.14404, 1.14372, 1.1439, 4676.8301],
  [1549335600000, 1.1439, 1.1439, 1.14319, 1.14329, 6978.6099],
  [1549339200000, 1.14331, 1.14347, 1.14305, 1.1432, 7213.4199],
  [1549342800000, 1.14321, 1.14356, 1.14306, 1.14341, 7474.3398],
  [1549346400000, 1.14339, 1.1434, 1.14289, 1.14327, 6784.02],
  [1549350000000, 1.14326, 1.14326, 1.14211, 1.1425, 14131.7998],
  [1549353600000, 1.1425, 1.14255, 1.14114, 1.14135, 25317.4102],
  [1549357200000, 1.14134, 1.14254, 1.14134, 1.14193, 21515.3008],
  [1549360800000, 1.14192, 1.14226, 1.14165, 1.14173, 17364.1094],
  [1549364400000, 1.14173, 1.14221, 1.14125, 1.14213, 17940.4609],
  [1549368000000, 1.14213, 1.14295, 1.14191, 1.14205, 21082.0996],
  [1549371600000, 1.14205, 1.14332, 1.14167, 1.14288, 25003.3008],
  [1549375200000, 1.14288, 1.14337, 1.14115, 1.14142, 23565.7891],
  [1549378800000, 1.14146, 1.1418, 1.14049, 1.14065, 28053.6094],
  [1549382400000, 1.14066, 1.14106, 1.14011, 1.1405, 22143.9492],
  [1549386000000, 1.14052, 1.14119, 1.14017, 1.14092, 14681.1504],
  [1549389600000, 1.14092, 1.14171, 1.14092, 1.14125, 13853.1201],
  [1549393200000, 1.14125, 1.14132, 1.1409, 1.14092, 12414.7598],
  [1549396800000, 1.14094, 1.14129, 1.14086, 1.14127, 14182.9004],
  [1549400400000, 1.14126, 1.14136, 1.14012, 1.14054, 8428.71],
  [1549404000000, 1.14054, 1.14064, 1.14021, 1.1404, 2241.4099],
  [1549407600000, 1.1404, 1.14094, 1.1404, 1.14087, 4778.2998]
];

export { config, expectedOutput };
