const hVal = document.getElementById("h-value");
const sVal = document.getElementById("s-value");
const lVal = document.getElementById("l-value");
const hRange = document.getElementById("h-range");
const sRange = document.getElementById("s-range");
const lRange = document.getElementById("l-range");
const background = document.getElementById("hsl-display");

const setBackground = () => {
    const h = hRange.value;
    const s = sRange.value;
    const l = lRange.value;

    background.style.backgroundColor = `hsl(${h}deg, ${s}%, ${l}%)`;
};

setBackground();

const updateValue = (val, range) => {
    val.innerText = range.value;
    setBackground();
}

hRange.addEventListener(
    "input", () => {
        updateValue(hVal, hRange);
    },
    false
);

sRange.addEventListener(
    "input", () => {
        updateValue(sVal, sRange);
    },
    false
);

lRange.addEventListener(
    "input", () => {
        updateValue(lVal, lRange);
    },
    false
);