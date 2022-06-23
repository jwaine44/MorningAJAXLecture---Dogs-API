function retrieveDogInfo(event){
    event.preventDefault();
    const num = document.querySelector("#num").value;
    const URL = `https://dog.ceo/api/breeds/image/random/${num}`;

    const settings = {
        method: 'GET',
    };

    fetch(URL, settings)
        .then(function(response){
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            const results = document.querySelector('.results');
            results.innerHTML = "";

            for(let i = 0; i < data.message.length; i++){
                results.innerHTML += `
                    <div class="dogImageContainer">
                        <img src="${data.message[i]}" class="dogImage" />
                    </div>
                `;
            }
        });
}

function init(){
    let dogForm = document.querySelector("#dogForm");
    dogForm.addEventListener("submit", retrieveDogInfo);
}

init();