function isVegetable(value) {
  if (value && typeof(value) == "string"){
    if (value.toUpperCase() === "TURNIP"){
      return true;
    }
    if (value.toUpperCase() === "RADISH"){
      return true;
    }
    if (value.toUpperCase() === "CABBAGE"){
        return true;
    }
  }
  return false;
}

module.exports = isVegetable