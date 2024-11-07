const screen=document.querySelector(".screen")
const btn=document.querySelectorAll(".button")

for (item of btn) {
    item.addEventListener('click', (e) => {
      const btnText = e.target.innerText;
  
      if (btnText === 'CE') {
        screen.value = '';
      } else if (btnText === 'AC') {
        screen.value = '';
      } else if (btnText === '=') {
        try {
          screen.value = eval(screen.value);
        } catch (error) {
          screen.value = 'Error';
        }
      } else if (btnText === '×') {
        screen.value += '*';
      } else if (btnText === '÷') {
        screen.value += '/';
      } 
      else if (btnText === '%') {
        screen.value = (eval(screen.value) / 100).toString();
      }
        else if (btnText === 'x^y') {
        screen.value += '**';
      } else if (btnText === '√') {
        screen.value = Math.sqrt(eval(screen.value));
      } else if (btnText === 'sin') {
        screen.value = Math.sin(eval(screen.value) * Math.PI / 180);
      } else if (btnText === 'cos') {
        screen.value = Math.cos(eval(screen.value) * Math.PI / 180);
      } else if (btnText === 'tan') {
        screen.value = Math.tan(eval(screen.value) * Math.PI / 180);
      } else if (btnText === 'log') {
        screen.value = Math.log10(eval(screen.value));
      } else if (btnText === 'e') {
        screen.value += 'e';
      } else if (btnText === 'pi') {
        screen.value += Math.PI;
      } else if(btnText==="DEL"){
        screen.value = screen.value.slice(0, -1);
      }
      else {
        screen.value += btnText;
      }
    });
  }
