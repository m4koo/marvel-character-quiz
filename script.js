let correct = 0;
let lowerNames = [];

function render(){
    if (correct == 0){
        lowerNames = names.map(name => name.toLowerCase());
    }
    document.getElementById('counter').innerHTML = correct;
    document.getElementById('input').value = ''
};

function checkName() {
    let charList = document.getElementById('char-list');
    let input = document.getElementById('input').value;

    let index = lowerNames.findIndex(name => removeHyphens(name.toLowerCase()) === removeHyphens(input.toLowerCase()));
    
    if (index !== -1) {
        let foundName = lowerNames[index];
        lowerNames.splice(index, 1);

        let parts = foundName.split('-');
        let name = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-');
        
        charList.innerHTML += `<p class="bg-secondary">${name}</p>`;
        correct++;
        render();
    } else {
        console.log('no');
        animateIncorrectAnswer();
        render();
    }
}

function removeHyphens(str) {
    return str.replace(/-/g, '').replace(/\s/g, '');
}

function enterPress(event) {
    if (event.keyCode === 13) {
        checkName();
    }
}

function animateIncorrectAnswer() {
    let mainDiv = document.getElementById('main');
    mainDiv.classList.add("shake");
            
    // Timeout, um die Animation zurückzusetzen
    setTimeout(function() {
        mainDiv.classList.remove("shake");
    }, 100); // Nach 1 Sekunde die Animation zurücksetzen
}