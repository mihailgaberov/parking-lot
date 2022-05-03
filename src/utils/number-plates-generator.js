const generateNumberPlate = () => {
  const r = (x) => ~~(Math.random() * x) + "";
  const l = (x) => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

  return r(10) + r(10) + r(10) + "-" + l() + l() + l();
};

export default generateNumberPlate;
