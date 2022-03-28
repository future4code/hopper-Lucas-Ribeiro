```function calculaPrecoTotal(quantidade) {
  let valor
  if(quantidade < 12){
    valor = 1.30
    
  }else if(quantidade >= 12){
    valor = 1.00
  }
  let custoTotal = quantidade * valor
  return custoTotal
}
```