interface Oveja {
	name: string,
	color: string,
}

const ovejas: Oveja[] = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' },
	{ name: 'AAAAAaaaaa', color: 'rojo' },
	{ name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas: Oveja[]) {
	return ovejas.filter((oveja) => {
		return oveja.color === 'rojo' && oveja.name.match((/(na)+/gi))
	})
}

console.log(contarOvejas(ovejas));