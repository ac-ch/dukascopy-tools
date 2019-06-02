const config = {
  instrument: 'eurusd',
  dates: { from: '2019-02-04 05:00', to: '2019-02-04 11:00' },
  timeframe: 'm30',
  volumes: true,
  utcOffset: 120
};

const expectedOutput = [
  [1549263600000, 1.14441, 1.14452, 1.14409, 1.14428, 7343.22],
  [1549265400000, 1.14428, 1.14453, 1.14379, 1.14424, 10363],
  [1549267200000, 1.14425, 1.14533, 1.14386, 1.14448, 14986.6],
  [1549269000000, 1.14448, 1.14528, 1.1444, 1.14508, 12685.13],
  [1549270800000, 1.14509, 1.14534, 1.14446, 1.1445, 13532.93],
  [1549272600000, 1.1445, 1.14503, 1.1444, 1.14453, 12140.6],
  [1549274400000, 1.14452, 1.14455, 1.14406, 1.14423, 13249.59],
  [1549276200000, 1.14423, 1.14482, 1.14423, 1.14465, 11500.3],
  [1549278000000, 1.14466, 1.14517, 1.14463, 1.14464, 9931.03],
  [1549279800000, 1.14465, 1.14542, 1.14449, 1.14518, 11049.77],
  [1549281600000, 1.14518, 1.14526, 1.14488, 1.1449, 9231.79],
  [1549283400000, 1.1449, 1.14507, 1.14413, 1.14477, 12385.42]
];

export { config, expectedOutput };
