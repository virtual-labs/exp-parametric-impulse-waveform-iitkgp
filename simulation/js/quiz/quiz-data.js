/*
 * 
 * Author: Subir Sekhar
 * Co-Author: P. K. Jana
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        
        /*
        {// Question 1 - Multiple Choice, Single True Answer
            "q": " A standard lightning impulse current is characterized by",
            "a": [
                {"option": "1/20 micro second pulse", "correct": false},
                {"option": " 4/10 micro second pulse", "correct": false},
                {"option": "8/20 micro second pulse", "correct": false},
                {"option": " all of the above", "correct": true} // no comma here
            ]
            ,
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Relations between the circuit parameters for producing over damped and under damped oscillatory waves in a series RLC circuit are",
            "a": [
                {"option": "R<sub>2</sub>/L > (4/C) and R<sub>2</sub>/L < (4/C)", "correct": true},
                {"option": " R<sub>2</sub>/L < (4/C) and R<sub>2</sub>/L > (4/C)", "correct": false},
                {"option": "R<sub>2</sub>*L > (4*C) and R<sub>2</sub>*L < (4*C)", "correct": false},
                {"option": " R<sub>2</sub>*L < (4/C) and R<sub>2</sub>*L > (4*C)", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
            
         
//            ,
//            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
//            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  For producing large values of impulse currents, a number of capacitors are charged in  ",
            "a": [
                {"option": " Parallel and discharged in series", "correct": false},
                {"option": " Parallel and discharged in parallel", "correct": true},
                {"option": " Series and discharged in series", "correct": false},
                {"option": "Series and discharged in parallel", "correct":false } // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
//            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        {// Question 4
            "q": "An impulse current generator has a total capacitance of 8 micro Farad, with a charging voltage is 25 kV. If generator has to give an output current of 10 kA with 8/20 micro second waveform, total resistance and inductance in the circuit, respectively",
            "a": [
                {"option": " 1.40 Ohm, 4.0 micro Henry", "correct": false},
                {"option": "1.40 Ohm, 8.125 micro Henry", "correct": false},
                {"option": "0.87 Ohm, 8.125 micro Henry", "correct": true},
                {"option": "cannot be determined", "correct":false }
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
//            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        {// Question 5
            "q": " The undershoot in the output current waveform is mainly due to",
            "a": [
                {"option": "total inductance (reactance) is higher as compared to total impedance of a circuit", "correct": false},
                {"option": "ratio 4/(Cg*R) is greater than the ratio R/L", "correct":false },
                {"option": "depends on surrounding conditions", "correct": false},
                {"option": "both (a) and (b)", "correct": true} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here

        },
        */
        {// Question 6
            "q": " Type of spark-gaps preferred in impulse current generation are-",
            "a": [
                {"option": "hollow spheres with surface coating", "correct": false},
                {"option": "solid spheres or hemi-spheres", "correct": true},
                {"option": " hollow spheres", "correct":false },
                {"option": "all of the above ", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 7
            "q": " Measurement of Impulse Current needs ",
            "a": [
                {"option": "a resistive shunt of few KOhm  and a sensing device that should be capable of measuring the signal of small frequency band", "correct": false},
                {"option": " a resistive shunt range from 10 micro Ohm to few m? and a sensing device that should be capable of measuring the signal of low frequency band", "correct": false},
                {"option": "a resistive shunt range from 10 micro Ohm to few m? and a sensing device that should be capable of measuring the signal over a high frequency band", "correct": true},
                {"option": "none of the above", "correct":false } // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        
        {// Question 8
            "q": " For measuring  high Impulse Currents, the best type of shunt is: ",
            "a": [
                {"option": "squirrel cage", "correct": false},
                {"option": "Bifilar strip", "correct": false},
                {"option": "Disc", "correct": false},
                {"option": "Coaxial tubular", "correct":true } // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        
        {// Question 9
            "q": "  Impulse current generator output wave form is: ",
            "a": [
                {"option": "Critically damped wave", "correct": false},
                {"option": "Under damped oscillatory wave", "correct": true},
                {"option": "damped oscillatory wave", "correct": false},
                {"option": "Overdamped wave", "correct":false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        
        {// Question 10
            "q": "  To minimize the inductance in impulse current generator circuits: ",
            "a": [
                {"option": "Capacitors are connected in parallel", "correct": true},
                {"option": "Capacitors are connected in series", "correct": false},
                {"option": "Discharge path is made into a rectangular path", "correct": false},
                {"option": "Air core inductors are used in series", "correct": false} // no comma here
            ],
            "correct": "<p><span></span> </p>",
            "incorrect": "<p><span></span> </p>"
//            ,
//            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
//            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }
    ]
};