´´´function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui let resultado = (ex+(p1*2)+(p2*3))/6
  
  if(resultado >= 9.0){
    return "A"
  }else if(resultado >= 7.5){
    return "B"
  }else if(resultado >= 6){
    return "C"
  }else{
    return "D"
  }
  ´´´