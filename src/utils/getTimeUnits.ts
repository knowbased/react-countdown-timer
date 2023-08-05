export const getTimeUnits = (time: number): [number, number, number, number] => {
  const days: number = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes: number = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds: number = Math.floor((time % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
