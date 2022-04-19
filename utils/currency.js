const currencyFormatter = (money) => {
  if (money != undefined) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });

    return formatter.format(money).slice(0, -3);
  } else {
    console.error("Paramater is undefined or null. parameter val: ", money);
  }
};

export default currencyFormatter;
