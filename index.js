module.exports = (config) => {
  const package = require("./package.json");
  config.backend.features = config.backend.features || [];
  config.backend.features.push({
    name: package.name,
    version: package.version,
  });
};
