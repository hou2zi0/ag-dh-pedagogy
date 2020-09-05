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
    },
    {
        sort: 4,
        text: "Ich kann Dateien auf meinem Computer wiederfinden, kopieren, ausschneiden, (um)benennen, sortieren, löschen. Ich weiß, was es bedeutet, dass Dateien hierarchisch organisiert sind.",
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
        sort: 5,
        text: "Ich weiß, was Dateierweiterungen sind und was sie bedeuten.",
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
                        name: "File Name Extensions",
                        url: "https://support.microsoft.com/de-at/help/4479981/windows-10-common-file-name-extensions",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 6,
        text: "Ich kann Archivdateien (.zip, .rar, .7z, .tar etc.) erstellen und entpacken.",
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
                        name: "7-Zip zum Packen/Entpacken",
                        url: "https://www.youtube.com/watch?v=QKEHXEOPXUQ",
                        type: "video",
                        note: "Lorem ipsum"
                    },
                    {
                        name: "Packen und Entpacken",
                        url: "https://netzmechanik.de/wasteland/wp/?tag=compress-2",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 7,
        text: "Ich kann Programme auf meinem Computer installieren, ausführen und wieder deinstallieren.",
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
        sort: 8,
        text: "Ich weiß, was ein Webbrowser ist und kenne die wichtigsten Funktionen: Dateien herunterladen, Seite über einen URL öffnen, Cache löschen, in der Seite suchen, Webseite neu laden.",
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
                        name: "WikiHow – Wort Suchen",
                        url: "https://de.wikihow.com/Ein-bestimmtes-Wort-auf-einer-Webseite-suchen",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    },
                    {
                        name: "Browser-Cache leeren",
                        url: "https://www.ionos.at/digitalguide/server/konfiguration/so-leeren-sie-ihren-cache/",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 9,
        text: "Ich kenne den Unterschied zwischen lokalem Speicher und Cloud-Speicher.",
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
                        name: "What is Cloud Storage?",
                        url: "https://azure.microsoft.com/de-de/overview/what-is-cloud-storage/",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    },
                    {
                        name: "Google Drive",
                        url: "https://support.google.com/drive/answer/2424384?co=GENIE.Platform%3DDesktop&hl=de",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 10,
        text: "Ich kann eine WLAN/Internet Verbindung auf meinem Computer einrichten.",
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
                        name: "WLAN einrichten",
                        url: "https://it.uni-graz.at/de/anleitungen/?tx_news_pi1%5BoverwriteDemand%5D%5Bcategories%5D%5B%5D=422,436",
                        type: "tutorial",
                        note: "Lorem ipsum"
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 11,
        text: "Ich weiß welche Gründe es geben kann, wenn eine Webseite nicht geladen wird:",
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
                        name: "Computer Disasters (Gründe wenn Webseite nicht lädt)",
                        url: "https://lifehacker.com/top-10-computer-disasters-and-how-to-deal-with-them-1701627195",
                        type: "tutorial",
                        note: "Möglichkeiten sind u.a. der Server antwortet nicht oder meine Internetverbindung ist unterbrochen."
                    }
                ],
                points: 0 
            }
        ]
    },
    {
        sort: 12,
        text: "Ich weiß was zu tun ist, wenn eine Webseite nicht geladen wird:",
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
                        name: "Copmuter Disasters (was tun wenn Webseite nicht lädt)",
                        url: "https://lifehacker.com/top-10-computer-disasters-and-how-to-deal-with-them-1701627195",
                        type: "tutorial",
                        note: "Möglichkeiten sind u.a. Seite aktualisieren/Webseite neu laden und Internetverbindung überprüfen."
                    }
                ],
                points: 0 
            }
        ]
    }

]);



