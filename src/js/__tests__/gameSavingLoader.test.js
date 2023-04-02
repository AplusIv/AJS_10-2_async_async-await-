import GameSavingLoader from '../gameSavingLoader';

test('should parse object with requested data or throw error', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  await expect(GameSavingLoader.load()).resolves.toEqual(expected);
});
