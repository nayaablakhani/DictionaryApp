const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const search_box = document.getElementById("search-box");
const result = document.getElementById("result"); 
const sound = document.getElementById("sound");

const search_btn = document.getElementById("search-btn"); 
search_btn.addEventListener("click",()=>{
    let inpWord = document.getElementById("inp-word").value;
    // console.log(inpWord);
    fetch(`${url}${inpWord}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    result.innerHTML = `
    <div id="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fa fa-volume-up"></i>
                </button>
            </div>

            <div id="details">

              <p>${data[0].meanings[0].partOfSpeech}/</p>
            <p>/${data[0].phonetics[0]}/</p>

            </div>
        </div>

        <p id="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>

        <p id="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>
    `
    sound.setAttribute("src",`http${data[0].phonetics[0].audio}`);
    // console.log(sound);
    });
});
function playSound(){
    sound.play();
    }

