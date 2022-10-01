function contains(store, product) {
  let result = false;
  Object.keys(store).forEach(key => {
      if (typeof store[key] === 'object') {
          result = contains(store[key], product);
      } else {
          Object.values(store).includes(product) ? result = true : result = false
      }
  })
  return result;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
console.log(contains(almacen, 'camiseta')) // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
console.log(contains(otroAlmacen, 'gameboy')) // false