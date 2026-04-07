$(document).ready(function(){

    // Alert ทุก 30 วินาที
    setInterval(function(){
        alert("Please, use me...");
    }, 30000);

    // ดัก submit ฟอร์ม
    $('#calculator').submit(function(e){
        e.preventDefault();

        // ดึงค่าแบบ jQuery
        let left = $('#left_member').val();
        let right = $('#right_member').val();
        let op   = $('#operator').val();

        let numLeft  = parseInt(left, 10);
        let numRight = parseInt(right, 10);

        // ตรวจสอบตัวเลข
        if(isNaN(numLeft) || isNaN(numRight) || numLeft < 0 || numRight < 0){
            alert("Error: (");
            return;
        }

        // หาร / mod หารด้วย 0
        if( (op === '/' || op === '%') && numRight === 0 ){
            let msg = "It's over 9000!";
            alert(msg);
            console.log(msg);
            return;
        }

        let result;
        switch(op){
            case '+': result = numLeft + numRight; break;
            case '-': result = numLeft - numRight; break;
            case '*': result = numLeft * numRight; break;
            case '/': result = numLeft / numRight; break;
            case '%': result = numLeft % numRight; break;
        }

        alert(result);
        console.log(result);
    });

});
