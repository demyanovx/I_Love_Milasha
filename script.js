function createStars() {
	const starsContainer = document.getElementById('stars-container')
	const numStars = 100
	const colors = ['#ffffff', '#ffdddd', '#ddddff', '#ffcc00', '#00ccff']

	for (let i = 0; i < numStars; i++) 
	{	const star = document.createElement('div')
		star.classList.add('star')
		star.style.left = `${Math.random() * 100}%`
		star.style.top = `${Math.random() * 100}%`
		star.style.animationDelay = `${Math.random() * 2}s`
		star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
		starsContainer.appendChild(star)
	}
}

createStars()

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
	const heart = document.createElement('div')
	heart.classList.add('heart-fall')
	heart.innerHTML = '❤️'

	heart.style.left = `${Math.random() * 100}%`

	const duration = Math.random() * 10 + 5
	heart.style.animationDuration = `${duration}s`

	const size = Math.random() * 24 + 16 // От 16px до 40px
	heart.style.fontSize = `${size}px`

	heartsContainer.appendChild(heart)

	setTimeout(() => {
		heart.remove()
	}, duration * 1000)
}

function startHearts() {
    setInterval(createHeart, 500);
}

document.getElementById('start-button').addEventListener('click', function () {
	const music = document.getElementById('music')
	music.play()

	const text = document.getElementById('text')
	let position = 90
	const scrollSpeed = 0.05

	function scroll() {
		if (position > -text.clientHeight) {
			position -= scrollSpeed
			text.style.top = position + '%'
			requestAnimationFrame(scroll)
		}
	}

	scroll()

	showPhoto()
	startHearts()
})

document
	.getElementById('start-button')
	.addEventListener('transitionend', function (event) {
		if (event.propertyName === 'opacity') {
			setTimeout(() => {
				this.style.display = 'none'
			}, 1)
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
]

const photosContainer = document.getElementById('photos-container')
let photoIndex = 0

function showPhoto() {
	const photo = document.createElement('img')
	photo.classList.add('photo')
	photo.src = photos[photoIndex]

	photo.style.left = `${Math.random() * (window.innerWidth - 150)}px`
	photo.style.top = `${Math.random() * (window.innerHeight - 150)}px`

	photosContainer.appendChild(photo)

	setTimeout(() => {
		photo.remove()
	}, 7000)

	photoIndex = (photoIndex + 1) % photos.length

	setTimeout(showPhoto, Math.random() * 2000 + 3000)
}