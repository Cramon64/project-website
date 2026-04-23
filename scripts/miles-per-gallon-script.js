let $ = function(id) {
    return document.getElementById(id);
};

const milesInput = $("miles");
const gallonsInput = $("gallons");
const mpgOutput = $("mpg");
const calculateBtn = $("calculate");

function calculateMPG(miles, gallons) {
        return miles / gallons;
    }

calculateBtn.addEventListener('click', () => {
    let miles = Number(milesInput.value);
    let gallons = Number(gallonsInput.value);

    let result = calculateMPG(miles, gallons);

    mpgOutput.value = result;
});

