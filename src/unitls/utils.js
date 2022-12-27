export const indonesianCurrencyFormat = (num) => {
  return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
};
