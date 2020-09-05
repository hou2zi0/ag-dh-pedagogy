console.log("Script loaded successfully.");
console.log(questions.questions);

class Questionaire {
    constructor(initialId) {
      this._id = initialId;
    }
    // Getters
    get id() {
      return this._id;
    }
    // Setters
    set id(newId){
        this._id = newId;
    }
    // Methods
    setup(questions){
        const container = document.getElementById(this.id);
        questions.forEach(question => {
            const div = document.createElement('div');
            div.classList.add("question");
            div.id = question.uid;
            const question_str = document.createElement('p');
            question_str.innerText = question.text;
            div.appendChild(question_str);
            question.answers.forEach(answer => {
                const container = document.createElement('p');
                const checkbox = document.createElement('input');
                checkbox.type = "radio"; 
                checkbox.name = question.uid;
                checkbox.classList.add('radio_button');
                checkbox.dataset.points = answer.points;
                checkbox.dataset.uid = answer.uid;
                if(answer.sort == 1){
                    checkbox.checked = true;
                    checkbox.classList.add('main_answer');
                }
                const label = document.createElement('label');
                label.innerText = answer.text;
                checkbox.addEventListener('change', event => {
                    if(document.getElementById("items_"+question.uid)){
                        document.getElementById("items_"+question.uid).remove();
                    }
                    console.log(event);
                    const item_container = document.createElement('div');
                    item_container.classList.add('items');
                    item_container.id = "items_"+question.uid;
                    answer.items.forEach(i => {
                        const item = document.createElement('blockquote');
                        item.innerHTML = `Check out <a href="${i.url}">${i.name}</a> (${i.type}).`;
                        switch (i.type) {
                            case "video":
                                const video_id = i.url.split('=').slice(-1);
                                item.innerHTML += `<br><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${video_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                                break;
                        
                            default:
                                break;
                        }
                        if(i.note){
                            item.innerHTML += `<br>${i.note}`;
                        }
                        item_container.appendChild(item);
                    })
                    div.appendChild(item_container);
                })
                container.appendChild(checkbox);
                container.appendChild(label);
                div.appendChild(container);
            })
            container.appendChild(div);
        });
        const evaluate_button = document.createElement('button');
        evaluate_button.id = "evaluate_button";
        evaluate_button.innerText = "Evaluate!";
        evaluate_button.addEventListener('click', event => {
            const points = Array.from(document.getElementsByClassName('radio_button')).filter((i) => i.checked).map((i) => parseInt(i.dataset.points)).reduce((accumulator, currentValue) => accumulator + currentValue);
            const max_points = Array.from(document.getElementsByClassName('main_answer')).map((i) => parseInt(i.dataset.points)).reduce((accumulator, currentValue) => accumulator + currentValue);
            //console.log(points);
            //console.log(max_points);
            const score = document.createElement('p');
            score.id = "score"
            if(document.getElementById('score')){
                document.getElementById('score').remove();
            }
            score.innerHTML = `You reached a score of ${points}/${max_points}.`;
            container.appendChild(score);
            const ids = Array.from(document.getElementsByClassName('radio_button')).filter((i) => i.checked && !i.classList.contains('main_answer')).map(i => i.name);
            // refactoring further reading aggregation 
            const further_reading = questions.filter(i => ids.includes(i.uid)).map(i => i.answers.filter(i => i.sort == 2 && i.items.length )).filter(i => i.length).map(i => i[0].items);
            // Build further reading section, maybe with print stylesheet.
            if(document.getElementById('further_reading')){
                document.getElementById('further_reading').remove();
            }
            if(further_reading.length){
                const further_reading_container = document.createElement('div');
                further_reading_container.innerHTML += `<h2>Was du dir noch einmal anschauen solltest:</h2>`;
                further_reading_container.id = 'further_reading';
                further_reading.forEach(i => {
                    i.forEach(i => {
                        further_reading_container.innerHTML += `<div class="further_reading_entry"><h3>${i.name}</h3><p><a href="${i.url}">${i.url}</a></p><p>${i.type}</p><p>${i.note}</p></div>`;
                    })
                })
                container.appendChild(further_reading_container);
                console.log(further_reading_container);
                further_reading_container.scrollIntoView({behavior: "smooth"});
            }
            console.log(further_reading);
        })
        container.appendChild(evaluate_button);
    }
    
  }


const q = new Questionaire("self-assessment-questions");
q.setup(questions.questions);
