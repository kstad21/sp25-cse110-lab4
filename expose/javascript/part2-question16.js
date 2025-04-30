for (let property in statistics) {
  let currValue = statistics[property];
  if (property.substring(0, 1).toLowerCase() == 'r' || currValue % 2 == 1) {
    console.log(currValue);
  };
};
