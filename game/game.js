document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        // TECHNOLOGY (14 Questions)
        {
            question: "Which protocol is used for securely accessing a remote computer over a network?",
            choices: ["FTP", "SSH", "HTTP", "SMTP"],
            answer: "SSH"
        },

        {
            question: "Filipino Programmer responsible for the I Love You Virus",
            choices: ['Valerio Malabanan','Sofia Fyang Smith','Onel De Guzman','Rodrigo Duterte'],
            answer: 'Onel De Guzman'
        },
        {
            question: "What is the primary function of a firewall?",
            choices: ["To store data", "To block unauthorized network traffic", "To increase internet speed", "To connect networks"],
            answer: "To block unauthorized network traffic"
        },
        {
            question: "Which database model organizes data in tables with rows and columns?",
            choices: ["Hierarchical", "Relational", "NoSQL", "Graph"],
            answer: "Relational"
        },
        {
            question: "What does the acronym SQL stand for?",
            choices: ["Structured Query Language", "Simple Query Logic", "Standard Queue List", "System Query Label"],
            answer: "Structured Query Language"
        },
     
        {
            question: "Which programming language is commonly used for developing embedded systems?",
            choices: ["Python", "C", "JavaScript", "Ruby"],
            answer: "C"
        },
        {
            question: "What is the main advantage of using an SSD over an HDD?",
            choices: ["Lower cost", "Faster data access", "More moving parts", "Higher power consumption"],
            answer: "Faster data access"
        },
        {
            question: "Which of the following describes IPv6?",
            choices: ["Uses 32-bit addresses", "Uses 128-bit addresses", "Limited to private networks", "Incompatible with the internet"],
            answer: "Uses 128-bit addresses"
        },
        {
            question: "What is the purpose of an API (Application Programming Interface)?",
            choices: ["To connect software applications", "To store large data sets", "To secure a network", "To manage hardware resources"],
            answer: "To connect software applications"
        },
        {
            question: "Which cybersecurity attack involves sending fraudulent emails to trick users into revealing personal information?",
            choices: ["Phishing", "DDoS", "Man-in-the-middle", "Ransomware"],
            answer: "Phishing"
        },
        {
            question: "Which of the following is a key advantage of using Virtual Machines (VMs)?",
            choices: ["Increases power consumption", "Requires separate hardware for each OS", "Allows multiple OS to run on one host", "Reduces the number of CPU cores available"],
            answer: "Allows multiple OS to run on one host"
        },

        {
                question: "Which flower is most commonly given on valentine's day in the Philippines?",
                choices: ["Roses", "Sunflower", "Tulips", "Daisy"],
                answer : "Roses"

        },

        {
            question: "Ïn the Philippines, what famous landmark is known for romantic walks and couples visiting on Valentines'Day?",
            choices: ["Luneta Park", "Intramuros", "Rizal Park", "Baguio City"],
            answer : "Luneta Park"
        },

      
   
        {
            question: "Which sensor is most commonly used in IoT applications to measure temperature?",
            choices: ["LDR", "Thermistor", "Microphone", "Accelerometer"],
            answer: "Thermistor"
        },

        {
            question: "Which of the following is the most appropriate description of an NDA?",
            choices: [
                "It is a specialized organization that monitors and analyzes threats to the information systems in a company.",
                "It is a contract that makes the contracting parties agree to hold and maintain in confidence the confidential information of the other party.",
                "It is an agreement of an objective quality standard that is concluded between a service provider and the user concerning the service provided.",
                "It is a hierarchical decomposition of the tasks to be implemented in a project."
            ],
            answer: "It is a contract that makes the contracting parties agree to hold and maintain in confidence the confidential information of the other party."
        },

        {
            question: "Which logic gate produces an output of 1 only when all inputs are 1?",
            choices: ["AND", "OR", "XOR", "NAND"],
            answer: "AND"
        },
    
        // MANAGEMENT (13 Questions)
        {
            question: "Which software development model is based on iterative and incremental development?",
            choices: ["Waterfall", "V-Model", "Agile", "Spiral"],
            answer: "Agile"
        },
        {
            question: "Which phase of the Software Development Life Cycle (SDLC) focuses on identifying system requirements?",
            choices: ["Design", "Implementation", "Requirements Analysis", "Testing"],
            answer: "Requirements Analysis"
        },
        {
            question: "What is the purpose of a Gantt chart in project management?",
            choices: ["To define network security policies", "To track project schedules and tasks", "To optimize database performance", "To organize programming code"],
            answer: "To track project schedules and tasks"
        },
        {
            question: "Which of the following is a key function of IT Service Management (ITSM)?",
            choices: ["Developing marketing strategies", "Managing IT infrastructure and services", "Designing electrical circuits", "Optimizing website SEO"],
            answer: "Managing IT infrastructure and services"
        },
        {
            question: "Which of the following is a key principle of risk management?",
            choices: ["Avoid all risks", "Identify, assess, and mitigate risks", "Only react to risks after they occur", "Ignore risks with low probability"],
            answer: "Identify, assess, and mitigate risks"
        },
        {
            question: "What is the primary function of an ERP (Enterprise Resource Planning) system?",
            choices: ["Managing core business processes", "Improving search engine rankings", "Developing machine learning models", "Managing cybersecurity threats"],
            answer: "Managing core business processes"
        },
  
        {
            question: "What is the main purpose of a KPI (Key Performance Indicator)?",
            choices: ["To measure progress towards business goals", "To define software architecture", "To analyze cybersecurity threats", "To determine internet speed"],
            answer: "To measure progress towards business goals"
        },
        {
            question: "Which tool is commonly used for version control in software development?",
            choices: ["Excel", "Git", "Photoshop", "Windows Explorer"],
            answer: "Git"
        },
       
        {
            question: "What is a major advantage of using cloud-based project management tools?",
            choices: ["Limited collaboration features", "High dependency on physical servers", "Remote accessibility and real-time updates", "High upfront costs"],
            answer: "Remote accessibility and real-time updates"
        },

        {
            question: "It means Error Proofing in Japanese",
            choices: ["Kaizen", "Poka Yoke", "Kanban", "Six Sigma"],
            answer: "Poka Yoke"
        },

        {
            question: "Which methodology uses a Kanban board for workflow visualization?",
            choices: ["Waterfall", "Scrum", "Kanban", "Six Sigma"],
            answer: "Kanban"
        },
        {
            question: "What is an essential factor in maintaining data integrity in a database?",
            choices: ["Using redundant data", "Proper normalization", "Removing all foreign keys", "Allowing duplicate entries"],
            answer: "Proper normalization"
        },
    
        // STRATEGY (13 Questions)
        {
            question: "What is the main purpose of Business Continuity Planning (BCP)?",
            choices: ["To ensure a company can continue operations during a disaster", "To maximize profit", "To improve software speed", "To reduce employee workload"],
            answer: "To ensure a company can continue operations during a disaster"
        },
        {
            question: "Globally Recogized Standard for Quality Management?",
            choices: ["ISO 9001:2015", "ISO 27001", "ISO 14001", "ISO/IEC 27001"],
            answer: "ISO 9001:2015"
        },
        {
            question: "Which of the following are international development targets that are composed of 17 objectives set by the United Nations in order to achieve a sustainable world? ",
            choices: ["Sustainable Development Goals", "Millennium Development Goals", "Global Goals", "World Goals"],
            answer: "Sustainable Development Goals"
        }
    ];
    

    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let timer;
    let timeLeft = 15;

    function startGame() {
        // Select 5 random questions
        selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
        currentQuestionIndex = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= selectedQuestions.length) {
            Swal.fire({
                title: "Congratulations!",
                text: "You answered all questions correctly! You win!",
                icon: "success",
                confirmButtonText: "Play Again",
            }).then(() => {
                window.location.href = "../index.html";
            });
            return;
        }
    
        const questionObj = selectedQuestions[currentQuestionIndex];
        document.getElementById("question-text").innerText = questionObj.question;
    
        const choicesContainer = document.getElementById("choices-container");
        choicesContainer.innerHTML = ""; // Clear previous choices
    
        questionObj.choices.forEach((choice) => {
            const button = document.createElement("button");
            button.classList.add("btn", "btn-primary", "m-2", "choice-btn");
            button.innerText = choice;
            button.addEventListener("click", () => checkAnswer(choice)); // Attach event listener
            choicesContainer.appendChild(button);
        });
    
        resetTimer();
    }
    

    function checkAnswer(selectedChoice) {
        const correctAnswer = selectedQuestions[currentQuestionIndex].answer;

        if (selectedChoice === correctAnswer) {
            Swal.fire({
                title: "Correct!",
                text: "Great job! Next question...",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                currentQuestionIndex++;
                showQuestion();
            });
        } else {
            Swal.fire({
                title: "Game Over!",
                text: "Oops! That was incorrect.",
                icon: "error",
                confirmButtonText: "Return Home",
                timer: 1500,
            }).then(() => {
                window.location.href = "../index.html";
            });
        }
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 20;
        document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;

        timer = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                Swal.fire({
                    title: "Time's Up!",
                    text: "You ran out of time. Game Over!",
                    icon: "error",
                    confirmButtonText: "Try Again",
                }).then(() => {
                    window.location.href = "../index.html";
                });
            }
        }, 1000);
    }

    startGame();
});
