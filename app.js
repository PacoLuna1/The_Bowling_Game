document.getElementById('button').addEventListener('click',function(){
  let array=[];
  var Tiro=0;
  var resultado=0;
  var position=1;


    for(var i=1; i<=21;i++){
      Tiro = parseFloat(document.getElementById(`Tiro${i}`).value);
      if(Tiro<0 || Tiro>10 || isNaN(Tiro)){
        alert("Error: la cantidad de pinos tirados por ronda NO puede ser mayor 10, menor a 0 o Nulo ");
        i=22;
        array=[];
      }else{
        array.push(Tiro);
      }
    }


  for(let i=0;i<=21;i+=2){

      switch (position<=21) {

        case SumaNormal(i)<10:
          resultado+=SumaNormal(i);
          document.getElementById(`resultado${position}`).value=resultado;
        break;

        case array[i]+array[i+1]==10 && array[i]!=0 && array[i+1]!=0:
          resultado+=SumaSpare(i);
          document.getElementById(`resultado${position}`).value=resultado;//spare
        break;

        //strikes
        case array[i]+array[i+1]==10 && array[i]==0 || array[i+1]==0:
          resultado+=SumaStrike(i);
          document.getElementById(`resultado${position}`).value=resultado;
        break;

        case array[19]+array[20]==10:
          resultado+=SumaExtra(i);
          document.getElementById(`resultado${position}`).value=resultado;
        break;

        case array[i]+array[i+1]>10:
        alert("Error: la suma de los dos tiros NO puede ser mayor a 10 ");
        i=22;
        break;


      }
    position++;
  }

  function SumaNormal(i){
    return array[i]+array[i+1];
  }

  function SumaStrike(i){
    switch (position<=21) {
      case array[i+2]+array[i+3]==10 && (array[i+2]==0 || array[i+3]==0):
        if (array[i+4]!=0 && array[i+5]!=0){
          return SumaNormal(i)+array[i+2]+array[i+3]+array[i+4];
        }else if(array[i+4]+array[i+5]==10 && (array[i+4]==0 || array[i+5]==0)){
          return  SumaNormal(i)+array[i+2]+array[i+3]+array[i+4]+array[i+5];
        }
      break;
      default:
        return SumaNormal(i)+array[i+2]+array[i+3];
      break;
    }
  }

  function SumaSpare(i){
    if(array[i+2]+array[i+3]==10 && array[i+2]==0 || array[i+3]==0 ){
      return SumaNormal(i)+array[i+2]+array[i+3]
    }else{
      return SumaNormal(i)+array[i+2]
    }
  }

  function SumaExtra(i){
    return SumaNormal(i)+array[i+1]
  }

});
