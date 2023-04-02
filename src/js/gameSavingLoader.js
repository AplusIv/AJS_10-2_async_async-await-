import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      const data = await read();
      const result = await json(data);
      return JSON.parse(result);
      /*  try {
        const data = await new Promise((resolve) => resolve(read()));
        const resultStr = await new Promise((resolve) => resolve(json(data)));
        const result = JSON.parse(resultStr);
        // console.log(JSON.parse(resultStr));
        return result; // ??? Здесь промис возвращается?
        // Ожидал объект в консоли, а там ничего не выводится
        // (просто пусто, будто ничего не отработало)
      } catch (err) {
        throw new Error(err);
      } */
    })();
  }
}
