function getNumberInput() {
    let number;
    while (true) {
        let input = prompt("Please enter a number:");
        if (!isNaN(input) && input.trim() !== "") {
            number = parseInt(input);
            break;
        } else {
            alert("Invalid input. Please enter a numerical value.");
        }
    }
    return number;
}

function generateShape(number) {
    let output = "Number inputted: " + number + "<br>";
    if (number % 2 === 1) {
       
        for (let i = number; i >= 1; i--) {
            for (let j = 0; j < number; j++) {
                output += i + " ";
            }
            output += "<br>";
        }
    } else {
        
        for (let i = number; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
                output += i + " ";
            }
            output += "<br>";
        }
    }
    return output;
}

	const userNumber = getNumberInput();
	const shape = generateShape(userNumber);
	document.getElementById("output").innerHTML = shape;
