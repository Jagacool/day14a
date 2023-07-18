

let display = document.getElementById("display");
let countDown = 10;
let message = "Happy Birthday";
setTimeout(() => {
  display.innerText = countDown;
  countDown--;
  setTimeout(() => {
    display.innerText = countDown;
    countDown--;
    setTimeout(() => {
      display.innerText = countDown;
      countDown--;
      setTimeout(() => {
        display.innerText = countDown;
        countDown--;
        setTimeout(() => {
          display.innerText = countDown;
          countDown--;
          setTimeout(() => {
            display.innerText = countDown;
            countDown--;
            setTimeout(() => {
              display.innerText = countDown;
              countDown--;
              setTimeout(() => {
                display.innerText = countDown;
                countDown--;
                setTimeout(() => {
                  display.innerText = countDown;
                  countDown--;
                  setTimeout(() => {
                    display.innerText = countDown;
                    countDown--;
                    setTimeout(() => {
                      display.innerText = message;
                      if (display.innerText == "Happy Birthday") {
                        display.classList.add("zoom");
                      }
                    }, 3000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);