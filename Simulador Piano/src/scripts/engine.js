const pianoKeys = document.querySelectorAll(".key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedkeys = [];

let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}"]`) /*toda vez que passa um $ e {}, é para pegar uma variável dinamicamente*/
    clickedkey.classList.add("active")
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150); /*a cada 150 milissegundos a classe será removida*/
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", ()=> playTune(key.dataset.key)); /*evento que fica escutando o click */
    mapedkeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => { /*colocar para funcionar pelo teclado*/
    if(mapedkeys.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys) /*evento para sumir com as letras do teclado quando acionar o botão 'teclas'*/

