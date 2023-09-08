function isVegetable(value) {
  if (value && typeof(value) == "string") {

    if (value.toUpperCase() === "TURNIP") {
      return true;
    }
    if (value.toUpperCase() === "RADISH") {
      return true;
    }
    if (value.toUpperCase() === "CABBAGE") {
        return true;
    }
    if (value.toUpperCase() === "KALE") {
        return true;
    }
    if (value.toUpperCase() === "POTATO") {
        return true;
    }
    if (value.toUpperCase() === "LETTUCE") {
        return true;
    }
    if (value.toUpperCase() === "ASPARAGUS") {
            return true;
    }
    if (value.toUpperCase() === "BROCCOLI") {
            return true;
    }
  }
  return false;
}

module.exports = isVegetable