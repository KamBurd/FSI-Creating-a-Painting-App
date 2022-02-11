let selectedColor = 'blue'
const painting = document.querySelector('.painting')

painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = selectedColor 
})

const colorChoices = document.querySelectorAll('.color-choice')
for(let x = 0; x < colorChoices.length; x ++){
	colorChoices[x].addEventListener('click', function(){
		selectedColor = colorChoices[x].id
	})
}