export function formatPrice(price) {
	return price.toLocaleString('EUR', {
		style: 'currency',
		currency: 'EUR'
	})
}

export const foodItems = [
	{
		name: 'Cheese Pizza',
		img: '/img/pizza.png',
		section: 'Pizza',
		price: 12
	},
	{
		name: 'Pepperoni Pizza',
		img: '/img/pizza2-min.jpeg',
		section: 'Pizza',
		price: 15
	},
	{
		name: 'Chicken Pizza',
		img: '/img/chicken-pizza-min.jpeg',
		section: 'Pizza',
		price: 17
	},
	{
		img: '/img/healthy-pizza-min.jpeg',
		name: 'Veggie Pizza',
		section: 'Pizza',
		price: 16
	},
	{
		img: '/img/burger-min.jpeg',
		name: 'Burger',
		section: 'Sandwich',
		price: 7
	},
	{ img: '/img/gyro-min.jpeg', name: 'Gyro', section: 'Sandwich', price: 4.5 },
	{
		img: '/img/sandwich-min.jpeg',
		name: 'Shrimp PoBoy',
		section: 'Sandwich',
		price: 6
	},
	{
		img: '/img/fries-min.jpeg',
		name: 'Fries',
		section: 'Sides',
		price: 3
	},
	{
    img: '/img/drinks-min.jpg',
    price: 2.5,
		name: 'Soda',
		section: 'Drinks',
		choices: ['Coke', 'Sprite', 'Root Beer']
	}
]

export const foods = foodItems.reduce((res, food) => {
	if (!res[food.section]) {
		res[food.section] = []
	}
	res[food.section].push(food)
	return res
}, {})
