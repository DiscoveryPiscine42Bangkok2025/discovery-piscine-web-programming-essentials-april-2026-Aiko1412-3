window.onload = function() {
    setInterval(function() {
        alert("Please, use me...");
    }, 30000); // 30 seconds

    const form = document.getElementById('calculator');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const left = document.getElementById('left_member').value;
        const right = document.getElementById('right_member').value;
        const operator = document.getElementById('operator').value;

        const numLeft = parseInt(left, 10);
        const numRight = parseInt(right, 10);

        // Validation for positive integers
        if (isNaN(numLeft) || isNaN(numRight) || numLeft < 0 || numRight < 0) {
            alert("Error: (");
            return;
        }

        let result;
        if ((operator === '/' || operator === '%') && numRight === 0) {
            result = "It's over 9000!";
            alert(result);
            console.log(result);
            return;
        }

        switch (operator) {
            case '+':
                result = numLeft + numRight;
                break;
            case '-':
                result = numLeft - numRight;
                break;
            case '*':
                result = numLeft * numRight;
                break;
            case '/':
                result = numLeft / numRight;
                break;
            case '%':
                result = numLeft % numRight;
                break;
        }

        // Display result in alert and console
        alert(result);
        console.log(result);
    });
};