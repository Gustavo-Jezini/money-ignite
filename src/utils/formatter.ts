export const formatterDate = new Intl.DateTimeFormat('pt-BR')

export const formatterPrice = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
