let CURRENTOP = '';

let display = document.querySelector('.output');

let buttons = Array.from(document.querySelectorAll('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        switch (e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '⇤':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})