let correct = 0;

function render(){
    document.getElementById('counter').innerHTML = correct;
};

function checkName() {
    let charList = document.getElementById('char-list');
    let input = document.getElementById('input').value;
    if (names.includes(input)){
        charList.innerHTML += `<p>${input}</p>`
        correct++;
        render();
    }else{
        console.log('no')
    }
}