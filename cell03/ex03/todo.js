document.addEventListener('DOMContentLoaded', (event) => {
    const ft_list = document.getElementById('ft_list');
    const newTodoBtn = document.getElementById('newTodoBtn');

    // Function to create a new TO DO element
    function createTodoElement(text) {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = text;
        todoDiv.onclick = function() {
            if (confirm("Do you want to remove this TO DO?")) {
                todoDiv.remove();
                saveTodos();
            }
        };
        return todoDiv;
    }

    // Function to save TO DOs to a cookie
    function saveTodos() {
        const todos = [];
        ft_list.querySelectorAll('div').forEach(div => {
            todos.push(div.textContent);
        });
        // Save as JSON string in a cookie named 'todos'
        document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
    }

    // Function to load TO DOs from a cookie
    function loadTodos() {
        const name = "todos=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                const todos = JSON.parse(c.substring(name.length, c.length));
                todos.reverse().forEach(text => { // Reverse to maintain order as new items go to top
                    ft_list.insertBefore(createTodoElement(text), ft_list.firstChild);
                });
            }
        }
    }

    // 'New' button click handler
    newTodoBtn.onclick = function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
            const newTodo = createTodoElement(todoText.trim());
            ft_list.insertBefore(newTodo, ft_list.firstChild); // Place at the top
            saveTodos();
        }
    };

    // Load existing TO DOs on page load
    loadTodos();
});