$(document).ready(function(){

    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    function changeColor(reverse = false) {
        if (reverse) {
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        $('#balloon').css('background-color', colors[colorIndex]);
    }

    // คลิกเพิ่มขนาด + เปลี่ยนสี
    $('#balloon').click(function(){
        size += 10;
        if (size > 420) {
            size = 200;
        } else {
            changeColor();
        }
        $('#balloon').css({
            width: size + 'px',
            height: size + 'px'
        });
    });

    // เมาส์ออก ลดขนาด + ย้อนสี
    $('#balloon').mouseleave(function(){
        if (size > 200) {
            size -= 5;
            changeColor(true);
            $('#balloon').css({
                width: size + 'px',
                height: size + 'px'
            });
        }
    });

});
