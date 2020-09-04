class Questions {
    constructor(initialQuestions) {
      this._questions = initialQuestions.map(i => {
        i.uid = this.uid();
        i.answers = i.answers.map(a => {
            a.uid = this.uid();
            return a;
        });
        return i;
    });
    }
    // Getters
    get questions() {
        return this._questions;
      }
    // Setters
    set questions(newQuestions){
        const questions = newQuestions.map(i => {
            i.uid = this.uid();
            i.answers = i.answers.map(a => {
                a.uid = this.uid();
                return a;
            });
            return i;
        })
        this._questions = questions;
    }
    // Methods
    uid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
}


const questions = new Questions([
    {
        sort: 1,
        text: "Ich weiß, wie ich Dateien auf meinem Computer organisieren kann.",
        answers: [
            {
                sort: 1,
                text: "ja , das weiß ich!",
                items: [],
                points: 10
            },
            {
                sort: 2,
                text: "Nein, aber ich werde es googlen oder dem Link folgen.",
                items: [],
                points: 0 
            }
        ]
    },
    {
        sort: 2,
        text: "Ich kenne die Ordnerstruktur meines Betriebssystems (User-Verzeichnis, Desktop, Downloads etc.).",
        answers: [
            {
                sort: 1,
                text: "ja , das weiß ich!",
                items: [],
                points: 10
            },
            {
                sort: 2,
                text: "Nein, aber ich werde es googlen oder dem Link folgen.",
                items: [
                    {
                        name: "Operating System Structure",
                        url: "https://www.tutorialspoint.com/Operating-System-Structure",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ], 
                points: 0
            }
        ]
    },
    {
        sort: 3,
        text: "Ich weiß, was es bedeutet, dass Dateien hierarchisch organisiert sind.",
        answers: [
            {
                sort: 1,
                text: "ja , das weiß ich!",
                items: [],
                points: 10
            },
            {
                sort: 2,
                text: "Nein, aber ich werde es googlen oder dem Link folgen.",
                items: [
                    {
                        name: "Get Organized and Clean Out your Computer",
                        url: "https://www.techlicious.com/tip/get-organized-and-clean-out-your-computer/",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    }

]);



