module.exports = function (str, args) {
  return str.replace(/{([^{}]*)}/g, function (match, arg) {
    return args[arg];
  });
};
