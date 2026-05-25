let chart;
      datasets:[{

        label:'Daya (kW)',

        data:[
          daya*0.4,
          daya*0.6,
          daya*0.8,
          daya,
          daya*1.2
        ],

        borderColor:'#29b6f6',

        backgroundColor:'rgba(41,182,246,0.2)',

        tension:0.4,

        fill:true

      }]

    

    options:{

      responsive:true,

      plugins;{
        legend:{
          labels:{
            color:'white'
          }
        }
      }

      scales:{

        x:{
          ticks:{
            color:'white'
          }
        }

        y:{
          ticks:{
            color:'white'
          }
        }

      }

    }

  ;
