function isVegetable(value) {
    const fs = require('fs');

    if (value && typeof(value) == "string") {
        const vegetables = fs.readFileSync('vegetables.txt', 'utf-8');

        return vegetables.split(/\r?\n/)
            .map(vegetable => vegetable.toUpperCase())
            .includes(value.toUpperCase());
    }
    return false;
}

module.exports = isVegetable