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
        })
        container.appendChild(evaluate_button);
    }
    
  }


const q = new Questionaire("self-assessment-questions");
q.setup(questions.questions);
