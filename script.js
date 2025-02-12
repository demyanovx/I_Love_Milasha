// Создаём звёзды
function createStars() {
	const starsContainer = document.getElementById('stars-container')
	const numStars = 200 // Увеличиваем количество звёзд
	const colors = ['#ffffff', '#ffdddd', '#ddddff', '#ffcc00', '#00ccff'] // Разные цвета звёзд

	for (let i = 0; i < numStars; i++) 
	{	const star = document.createElement('div')
		star.classList.add('star')
		star.style.left = `${Math.random() * 100}%` // Случайная позиция по X
		star.style.top = `${Math.random() * 100}%` // Случайная позиция по Y
		star.style.animationDelay = `${Math.random() * 2}s` // Случайная задержка анимации
		star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] // Случайный цвет
		starsContainer.appendChild(star)
	}
}

// Создаём звёзды при загрузке страницы
createStars()

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
	const heart = document.createElement('div')
	heart.classList.add('heart-fall')
	heart.innerHTML = '❤️' // Сердечко

	// Случайная позиция по горизонтали
	heart.style.left = `${Math.random() * 100}%`

	// Случайная скорость падения (от 5 до 15 секунд)
	const duration = Math.random() * 10 + 5
	heart.style.animationDuration = `${duration}s`

	// Случайный размер сердечка
	const size = Math.random() * 24 + 16 // От 16px до 40px
	heart.style.fontSize = `${size}px`

	heartsContainer.appendChild(heart)

	// Удаляем сердечко после завершения анимации
	setTimeout(() => {
		heart.remove()
	}, duration * 1000)
}

// Создаём сердечки каждые 0.5 секунды
function startHearts() {
    setInterval(createHeart, 500);
}

document.getElementById('start-button').addEventListener('click', function () {
	// Запускаем музыку
	const music = document.getElementById('music')
	music.play()

	// Прокручиваем текст
	const text = document.getElementById('text')
	let position = 90 // Начальная позиция текста
	const scrollSpeed = 0.05 // Скорость прокрутки

	function scroll() {
		if (position > -text.clientHeight) {
			position -= scrollSpeed
			text.style.top = position + '%'
			requestAnimationFrame(scroll)
		}
	}

	scroll()

	// Начинаем показ фотографий
	showPhoto()
	// Запускаем падающие сердечки
	startHearts()
})

// Обработчик для плавного исчезновения кнопки
document
	.getElementById('start-button')
	.addEventListener('transitionend', function (event) {
		if (event.propertyName === 'opacity') {
			// Проверяем, что анимация opacity завершена
			setTimeout(() => {
				this.style.display = 'none' // Скрываем кнопку после завершения анимации
			}, 1) // Задержка перед скрытием (2 секунды)
		}
	})

const photos = [
	'photo1.jpg',
	'photo2.jpg',
	'photo3.jpg',
	'photo4.jpg',
	'photo5.jpg',
	'photo6.jpg',
	'photo7.jpg',
	'photo8.jpg',
	'photo9.jpg',
	'photo10.jpg',
] // Замени на свои фотографии

const photosContainer = document.getElementById('photos-container')
let photoIndex = 0 // Индекс текущей фотографии

function showPhoto() {
	const photo = document.createElement('img')
	photo.classList.add('photo')
	photo.src = photos[photoIndex] // Берём фотографию по индексу

	// Случайная позиция на экране
	photo.style.left = `${Math.random() * (window.innerWidth - 150)}px`
	photo.style.top = `${Math.random() * (window.innerHeight - 150)}px`

	photosContainer.appendChild(photo)

	// Удаляем фотографию через 7 секунд (5 секунд показа + 2 секунды анимации исчезновения)
	setTimeout(() => {
		photo.remove()
	}, 7000)

	// Переходим к следующей фотографии (или к первой, если дошли до конца)
	photoIndex = (photoIndex + 1) % photos.length

	// Показываем следующую фотографию через случайный интервал (например, 3-5 секунд)
	setTimeout(showPhoto, Math.random() * 2000 + 3000)
}