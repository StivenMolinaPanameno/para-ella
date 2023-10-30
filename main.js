import './style.css'

const audio = new window.Audio('./assets/fixyou.mp3');

 function reproducir () {
  audio.play();
  audio.loop = true;
}


const sobre = document.querySelector('.sobre');
const img = document.querySelector('img');
const p = document.querySelector('p');
const video  = document.querySelector('video');





sobre.addEventListener('click', ()=>{
  img.remove();  
  p.remove();

  reproducir();


  const carta = document.createElement('p');
  carta.classList.add('carta');

  carta.innerHTML = `Para ella.<br><br>
  Nos encontramos nuevamente en este patio de letras y muchos sentimientos, donde cada palabra brota con amor y sinceridad, expresándome a ti con el corazón casi fuera del pecho.<br><br>
  Tengo que destacar que, en los susurros de la noche, cuando el mundo se sumerge en un apacible arrullo y el compás de los latidos de los demás parece encontrar su propia melodía, cuando más te pienso, cuando nos escribimos y haces notar tus experiencias de la vida. No es una obsesión desmedida lo que siento, sino en una devoción que tiñe de magia cada pensamiento, construyendo un espacio en mi corazón donde encuentro paz y calma, gracias a ti.<br><br>
  Siento en lo más profundo que tu presencia es la luz que disipa las sombras en mi mente, iluminando cada rincón oscuro y convirtiéndolo en un lugar lleno de vida y esperanza.<br><br>
  Tu forma de pensar, querida Nathalie Carbajal, es un tesoro. Cada idea, cada perspectiva, es una ventana a un mundo maravilloso y único que solo tú eres capaz de crear. Recuerdo aquella noche cuando me preguntaste sobre la posibilidad de encontrar a alguien con supuestas "mejores cualidades". Pero, aquí está la verdad: cada día, te vuelves una mujer más hermosa a mis ojos. Es un proceso mágico, una transformación que solo el tiempo y la gracia pueden esculpir.
  Se que las circunstancias que nos unieron son realmente sombrías, pero al igual que Spider-Man, estamos en constante evolución y crecimiento, soy firme y sólidamente creyente de que las cosas se pueden ver mejor si las trabajamos de manera conjunta, pero dándonos nuestro espacio cuando sea necesario y es lo que quiero contigo.<br><br><br
  Estos no son halagos ni palabras vacías, son verdades que llevan el peso de mi admiración y respeto por la increíble persona que eres. Tu valor es incalculable y que tú lo reconozcas es solo un pequeño reflejo de lo que mereces. `
  
  sobre.appendChild(carta);

}, { once: true })





