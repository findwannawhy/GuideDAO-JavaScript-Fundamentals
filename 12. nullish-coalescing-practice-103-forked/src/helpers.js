import prices from "./prices.js";

export const getPrice = (currency) => {
  console.log(prices);
  console.log(currency);
  return prices.ethereum?.[currency] ?? "Нет данных";
};
