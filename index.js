import datas from "/data.json" assert {type:'json'};
const spendPercent = document.getElementById('spend-percent');
render();

function render() {
  let highPrice = 0;
  for (let index = 0; index < datas.length; index++) 
      highPrice=highPrice>datas[index].amount?highPrice:datas[index].amount
    datas.forEach(element => {
      spendPercent.innerHTML+=
      `
      <span style='
      height:calc(${element.amount}px * 2.75);
      background-color:${element.amount===highPrice?'hsl(186, 34%, 60%)':'hsl(10, 79%, 65%)'};'>
      </span>
      `
  });
}

console.log("javascript")

