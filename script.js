let correct = 0;
let lowerNames = [];

function render(){
    if (correct == 0){
        lowerNames = names.map(name => name.toLowerCase());
    }
    document.getElementById('counter').innerHTML = correct;
};

// function checkName() {
//     let charList = document.getElementById('char-list');
//     let input = document.getElementById('input').value;
//     if (lowerNames.includes(input)){
//         let index = lowerNames.indexOf(input);
//         lowerNames.splice(index, 1);

//         let name = input.charAt(0).toUpperCase() + input.slice(1);
//         charList.innerHTML += `<p>${name}</p>`
//         correct++;
//         render();
//     }else{
//         console.log('no')
//     }
// }

function checkName() {
    let charList = document.getElementById('char-list');
    let input = document.getElementById('input').value;

    let index = lowerNames.findIndex(name => removeHyphens(name.toLowerCase()) === removeHyphens(input.toLowerCase()));
    
    if (index !== -1) {
        let foundName = lowerNames[index];
        lowerNames.splice(index, 1);

        let parts = foundName.split('-');
        let name = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('-');
        
        charList.innerHTML += `<p>${name}</p>`;
        correct++;
        render();
    } else {
        console.log('no');
    }
}

function removeHyphens(str) {
    return str.replace(/-/g, '');
}

