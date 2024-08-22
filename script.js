document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('itemInput');
    const itemValue = input.value.trim();
    
    if (itemValue === '') {
        return; 
    }
    
    const ul = document.getElementById('itemList');
    const li = document.createElement('li');
    li.textContent = itemValue;
    ul.appendChild(li);
    
    input.value = '';
});