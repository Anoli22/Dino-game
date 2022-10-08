
let move = 0;
let result = '';
const area = document.getElementById('area');
const content = document.getElementById('content');
const modal = document.getElementById('modal-result');
const over = document.getElementById('over');
const close = document.getElementById('close');

area.addEventListener('click', e=> {
    if(e.target.className = 'box'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    console.log(boxes);
    const bx = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
        for(i = 0; i < bx.length; i++) {
            if(
                boxes[bx[i][0]].innerHTML == 'X' && boxes[bx[i][1]].innerHTML == 'X' && boxes[bx[i][2]].innerHTML == 'X'
                ) {
                    result = 'хрестики';
                    prepareResult(result)


                } else if (
                    boxes[bx[i][0]].innerHTML == '0' && boxes[bx[i][1]].innerHTML == '0' && boxes[bx[i][2]].innerHTML == '0'
                    )
                    {
                        result = 'нулики';
                        prepareResult(result)
                    }
       
            }
           
}
        const prepareResult = winner => {
            content.innerHTML = `Перемогли  ${winner} !`;
            modal.style.display = 'block';
        }

