$(document).ready(function(){

    const $ftList = $('#ft_list');
    const $newBtn = $('#newTodoBtn');

    // สร้าง item todo
    function createTodoElement(text){
        let $div = $('<div></div>').text(text);

        $div.click(function(){
            if(confirm("Do you want to remove this TO DO?")){
                $(this).remove();
                saveTodos();
            }
        });
        return $div;
    }

    // บันทึกลง cookie
    function saveTodos(){
        let arr = [];
        $('#ft_list > div').each(function(){
            arr.push($(this).text());
        });
        document.cookie = "todos=" + JSON.stringify(arr) + "; path=/";
    }

    // โหลดจาก cookie
    function loadTodos(){
        let name = "todos=";
        let decode = decodeURIComponent(document.cookie);
        let parts = decode.split(';');

        for(let i = 0; i < parts.length; i++){
            let c = parts[i].trim();
            if(c.indexOf(name) === 0){
                let json = c.substring(name.length);
                let todos = JSON.parse(json);
                todos.reverse().forEach(txt => {
                    $ftList.prepend(createTodoElement(txt));
                });
            }
        }
    }

    // กดปุ่ม New
    $newBtn.click(function(){
        let txt = prompt("Enter a new TO DO:");
        if(txt && txt.trim() !== ""){
            let $item = createTodoElement(txt.trim());
            $ftList.prepend($item);
            saveTodos();
        }
    });

    // โหลดรายการเก่าตอนเปิดหน้า
    loadTodos();

});
