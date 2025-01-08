export const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export const getRandomIntWithRound = (
  min: number,
  max: number,
  roundNumber: number
) => Math.round(getRandomInt(min, max) / roundNumber) * roundNumber;
