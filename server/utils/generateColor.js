const generateColor = () => {
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

module.exports = { generateColor };
