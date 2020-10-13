const questions = ['First', 'Second', 'Third', 'OneMore'];
const taskToFind = 'Second';

// const findQ = function (allQuestions, randomize) {
//     console.log(allQuestions);
//     console.log(randomize);

//     for (const quest of questions) {
//         if (randomize === quest) {
//             return `we found question for you`;
//         }
//     }

//     return 'You got to next level';
// };

const findQ = function (allQuestions, randomize) {
    const isAnAnswer = allQuestions.includes(randomize);

    return isAnAnswer ? `we found question for you` : 'You got to next level';
}

const f1 = findQ(questions, 'First');
console.log(f1);

const f2 = findQ(questions, 'Fouth');
console.log(f2);

//------

const answers = [23, 83, 19, 3, 74, 13];
let smallestnumber = answers[0];

for (let i = 0; i < answers.length; i += 1) {
   // console.log(answers[i]);

    if (answers[i] < smallestnumber) {
        smallestnumber = answers[i];
    }
}

console.log(`smallest score is: `, smallestnumber);

//---removing Question;

const removeQuestion = function (allQuestions, questionToRemove) {
    let index = questions.indexOf(questionToRemove);

    if (index === -1) {
        console.log(`this question has never been used`);
        return;
}

    allQuestions.splice(index, 1);
}

removeQuestion(questions, 'First');
console.log(`rest of questions`, questions);

const addQuestion = function (allQuestions, questionToAdd, index) {
 allQuestions.splice(index, 0, questionToAdd);
};

addQuestion(questions, 'Sixth', 2);
console.log(questions);
//---- Todo

//---adding tag's (can be used to mark answered question)

const tag = '#usedOne';
const questionsWithTag = [];
for (let quest of questions) {
    questionsWithTag.push(`${tag}-${quest}`);
}

console.log(questionsWithTag);

