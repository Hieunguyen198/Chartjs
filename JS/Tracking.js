$( document ).ready(function() {
    loadChart();
});
function loadChart(){

  const data = {
    xLabels:['456','123','213'],
    datasets: [{
      label: ['Chart'],
      data: [100,50,60],
      backgroundColor:[
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)',
        'rgb(255, 99, 132)'
      ],
      hoverOffset: 4
    }]
  };
  const config ={
    type:'doughnut',
    data,
    options:{}
  };
  var ctx =document.getElementById('learnChart');
  ctx=new Chart(ctx,config)
}