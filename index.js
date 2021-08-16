// definindo score de cada questão
let score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let meioPonto = false;

function atualizarScore() {
    let somaScore = 0;

    for (let i = 0; i < score.length; i++) {
        somaScore += score[i];
    }

    idScore.innerHTML = somaScore;
}

function addPonto(index) {
    if (meioPonto) {
            score[index] = 62.5 / 2;
            meioPonto = false;
        } else {
            score[index] = 62.5;
        }
        atualizarScore();
}

function removeQuestionBox(n) {
    let box = document.querySelector("#idQuestionBox" + n);
    box.setAttribute("class", "question-box no-margin hide");
}

atualizarScore();

// questão 1
function btnQuestion1() {
    if (inputQuestion1.value.toUpperCase() == "CPU") {

        // exibindo resposta correta
        l15c8.innerHTML = "C";
        l16c8.innerHTML = "P";
        l17c8.innerHTML = "U";

        // alterando cores para verde
        l14c8.setAttribute("class", "green");
        l15c8.setAttribute("class", "square sq-green");
        l16c8.setAttribute("class", "square sq-green");
        l17c8.setAttribute("class", "square sq-green");
        idQuestionBox1.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(0);
        removeQuestionBox(1);
    } else {
        meioPonto = true;
        idQuestionBox1.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 2
function btnQuestion2() {
    if (inputQuestion2.value.toUpperCase() == "ULA") {

        // exibindo resposta correta
        l17c8.innerHTML = "U";
        l17c9.innerHTML = "L";
        l17c10.innerHTML = "A";

        // alterando cores para verde
        l17c7.setAttribute("class", "green");
        l17c8.setAttribute("class", "square sq-green");
        l17c9.setAttribute("class", "square sq-green");
        l17c10.setAttribute("class", "square sq-green");
        idQuestionBox2.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(1);
        removeQuestionBox(2);
    } else {
        meioPonto = true;
        idQuestionBox2.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 3
function btnQuestion3() {
    if (inputQuestion3.value.toUpperCase() == "REGISTRADORES") {

        // exibindo resposta correta
        l11c9.innerHTML = "R";
        l11c10.innerHTML = "E";
        l11c11.innerHTML = "G";
        l11c12.innerHTML = "I";
        l11c13.innerHTML = "S";
        l11c14.innerHTML = "T";
        l11c15.innerHTML = "R";
        l11c16.innerHTML = "A";
        l11c17.innerHTML = "D";
        l11c18.innerHTML = "O";
        l11c19.innerHTML = "R";
        l11c20.innerHTML = "E";
        l11c21.innerHTML = "S";

        // alterando cores para verde
        l11c8.setAttribute("class", "green");
        l11c9.setAttribute("class", "square sq-green");
        l11c10.setAttribute("class", "square sq-green");
        l11c11.setAttribute("class", "square sq-green");
        l11c12.setAttribute("class", "square sq-green");
        l11c13.setAttribute("class", "square sq-green");
        l11c14.setAttribute("class", "square sq-green");
        l11c15.setAttribute("class", "square sq-green");
        l11c16.setAttribute("class", "square sq-green");
        l11c17.setAttribute("class", "square sq-green");
        l11c18.setAttribute("class", "square sq-green");
        l11c19.setAttribute("class", "square sq-green");
        l11c20.setAttribute("class", "square sq-green");
        l11c21.setAttribute("class", "square sq-green");
        idQuestionBox3.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(2);
        removeQuestionBox(3);
    } else {
        meioPonto = true;
        idQuestionBox3.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 4
function btnQuestion4() {
    if (inputQuestion4.value.toUpperCase() == "RAM") {

        // exibindo resposta correta
        l13c8.innerHTML = "R";
        l13c9.innerHTML = "A";
        l13c10.innerHTML = "M";

        // alterando cores para verde
        l13c7.setAttribute("class", "green");
        l13c8.setAttribute("class", "square sq-green");
        l13c9.setAttribute("class", "square sq-green");
        l13c10.setAttribute("class", "square sq-green");
        idQuestionBox4.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(3);
        removeQuestionBox(4);
    } else {
        meioPonto = true;
        idQuestionBox4.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 5
function btnQuestion5() {
    if (inputQuestion5.value.toUpperCase() == "ROM") {
        // exibindo resposta correta
        l10c18.innerHTML = "R";
        l11c18.innerHTML = "O";
        l12c18.innerHTML = "M";

        // alterando cores para verde
        l9c18.setAttribute("class", "green");
        l10c18.setAttribute("class", "square sq-green");
        l11c18.setAttribute("class", "square sq-green");
        l12c18.setAttribute("class", "square sq-green");
        idQuestionBox5.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(4);
        removeQuestionBox(5);
    } else {
        meioPonto = true;
        idQuestionBox5.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 6
function btnQuestion6() {
    if (inputQuestion6.value.toUpperCase() == "EPROM") {
        // exibindo resposta correta
        l11c20.innerHTML = "E";
        l12c20.innerHTML = "P";
        l13c20.innerHTML = "R";
        l14c20.innerHTML = "O";
        l15c20.innerHTML = "M";

        // alterando cores para verde
        l10c20.setAttribute("class", "green");
        l11c20.setAttribute("class", "square sq-green");
        l12c20.setAttribute("class", "square sq-green");
        l13c20.setAttribute("class", "square sq-green");
        l14c20.setAttribute("class", "square sq-green");
        l15c20.setAttribute("class", "square sq-green");
        idQuestionBox6.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(5);
        removeQuestionBox(6);
    } else {
        meioPonto = true;
        idQuestionBox6.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 7
function btnQuestion7() {
    if (inputQuestion7.value.toUpperCase() == "FLASH") {

        // exibindo resposta correta
        l8c8.innerHTML = "F";
        l8c9.innerHTML = "L";
        l8c10.innerHTML = "A";
        l8c11.innerHTML = "S";
        l8c12.innerHTML = "H";

        // alterando cores para verde
        l8c7.setAttribute("class", "green");
        l8c8.setAttribute("class", "square sq-green");
        l8c9.setAttribute("class", "square sq-green");
        l8c10.setAttribute("class", "square sq-green");
        l8c11.setAttribute("class", "square sq-green");
        l8c12.setAttribute("class", "square sq-green");
        idQuestionBox7.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(6);
        removeQuestionBox(7);
    } else {
        meioPonto = true;
        idQuestionBox7.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 8
function btnQuestion8() {
    if (inputQuestion8.value.toUpperCase() == "MEMÓRIA DE MASSA") {
        
        // exibindo resposta correta
        l2c10.innerHTML = "M";
        l3c10.innerHTML = "E";
        l4c10.innerHTML = "M";
        l5c10.innerHTML = "Ó";
        l6c10.innerHTML = "R";
        l7c10.innerHTML = "I";
        l8c10.innerHTML = "A";
        l9c10.innerHTML = "";
        l10c10.innerHTML = "D";
        l11c10.innerHTML = "E";
        l12c10.innerHTML = "";
        l13c10.innerHTML = "M";
        l14c10.innerHTML = "A";
        l15c10.innerHTML = "S";
        l16c10.innerHTML = "S";
        l17c10.innerHTML = "A";

        // alterando cores para verde
        l1c10.setAttribute("class", "green");
        l2c10.setAttribute("class", "square sq-green");
        l3c10.setAttribute("class", "square sq-green");
        l4c10.setAttribute("class", "square sq-green");
        l5c10.setAttribute("class", "square sq-green");
        l6c10.setAttribute("class", "square sq-green");
        l7c10.setAttribute("class", "square sq-green");
        l8c10.setAttribute("class", "square sq-green");
        l9c10.setAttribute("class", "square sq-green bg-green");
        l10c10.setAttribute("class", "square sq-green");
        l11c10.setAttribute("class", "square sq-green");
        l12c10.setAttribute("class", "square sq-green bg-green");
        l13c10.setAttribute("class", "square sq-green");
        l14c10.setAttribute("class", "square sq-green");
        l15c10.setAttribute("class", "square sq-green");
        l16c10.setAttribute("class", "square sq-green");
        l17c10.setAttribute("class", "square sq-green");
        idQuestionBox8.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(7);
        removeQuestionBox(8);
    } else {
        meioPonto = true;
        idQuestionBox8.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 9
function btnQuestion9() {
    if (inputQuestion9.value.toUpperCase() == "DMA") {

        // exibindo resposta correta
        l4c9.innerHTML = "D";
        l4c10.innerHTML = "M";
        l4c11.innerHTML = "A";

        // alterando cores para verde
        l4c8.setAttribute("class", "green");
        l4c9.setAttribute("class", "square sq-green");
        l4c10.setAttribute("class", "square sq-green");
        l4c11.setAttribute("class", "square sq-green");
        idQuestionBox9.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(8);
        removeQuestionBox(9);
    } else {
        meioPonto = true;
        idQuestionBox9.setAttribute("class", "question-box wrong-answer-box");
    }
}

// questão 10 
function btnQuestion10() {
    if (inputQuestion10.value.toUpperCase() == "CS") {

        // exibindo resposta correta
        l10c21.innerHTML = "C";
        l11c21.innerHTML = "S";

        // alterando cores para verde
        l9c21.setAttribute("class", "green");
        l10c21.setAttribute("class", "square sq-green");
        l11c21.setAttribute("class", "square sq-green");
        idQuestionBox10.setAttribute("class", "question-box correct-answer-box");
        // atualizando score
        addPonto(9);
        removeQuestionBox(10);
    } else {
        meioPonto = true;
        idQuestionBox10.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 11
function btnQuestion11() {
    if (inputQuestion11.value.toUpperCase() == "ADDRESS BUS") {

        // exibindo resposta correta
        l3c6.innerHTML = "A";
        l3c7.innerHTML = "D";
        l3c8.innerHTML = "D"
        l3c9.innerHTML = "R";
        l3c10.innerHTML = "E";
        l3c11.innerHTML = "S";
        l3c12.innerHTML = "S";
        l3c14.innerHTML = "B";
        l3c15.innerHTML = "U";
        l3c16.innerHTML = "S";

        // alterando cores para verde
        l3c5.setAttribute("class", "green");
        l3c6.setAttribute("class", "square sq-green");
        l3c7.setAttribute("class", "square sq-green");
        l3c8.setAttribute("class", "square sq-green");
        l3c9.setAttribute("class", "square sq-green");
        l3c10.setAttribute("class", "square sq-green");
        l3c11.setAttribute("class", "square sq-green");
        l3c12.setAttribute("class", "square sq-green");
        l3c13.setAttribute("class", "square bg-green");
        l3c14.setAttribute("class", "square sq-green");
        l3c15.setAttribute("class", "square sq-green");
        l3c16.setAttribute("class", "square sq-green");
        idQuestionBox11.setAttribute("class", "question-box correct-answer-box");
        // atualizando score
        addPonto(10);
        removeQuestionBox(11);
    } else {
        meioPonto = true;
        idQuestionBox11.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 12
function btnQuestion12() {
    if (inputQuestion12.value.toUpperCase() == "DATA BUS") {

        // exibindo resposta correta
        l6c6.innerHTML = "D";
        l7c6.innerHTML = "A";
        l8c6.innerHTML = "T";
        l9c6.innerHTML = "A";
        l11c6.innerHTML = "B";
        l12c6.innerHTML = "U";
        l13c6.innerHTML = "S";

        // alterando cores para verde
        l5c6.setAttribute("class", "green");
        l6c6.setAttribute("class", "square sq-green");
        l7c6.setAttribute("class", "square sq-green");
        l8c6.setAttribute("class", "square sq-green");
        l9c6.setAttribute("class", "square sq-green");
        l10c6.setAttribute("class", "square bg-green");
        l11c6.setAttribute("class", "square sq-green");
        l12c6.setAttribute("class", "square sq-green");
        l13c6.setAttribute("class", "square sq-green");
        idQuestionBox12.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(11);
        removeQuestionBox(12);
    } else {
        meioPonto = true;
        idQuestionBox12.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 13
function btnQuestion13() {
    if (inputQuestion13.value.toUpperCase() == "I5") {

        // exibindo resposta correta
        l7c10.innerHTML = "I";
        l7c11.innerHTML = "5";

        // alterando cores para verde
        l7c9.setAttribute("class", "green");
        l7c10.setAttribute("class", "square sq-green");
        l7c11.setAttribute("class", "square sq-green");
        
        idQuestionBox13.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(12);
        removeQuestionBox(13);
    } else {
        meioPonto = true;
        idQuestionBox13.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 14
function btnQuestion14() {
    if (inputQuestion14.value.toUpperCase() == "I7") {

        // exibindo resposta correta
        l11c12.innerHTML = "I";
        l12c12.innerHTML = "7";

        // alterando cores para verde
        l10c12.setAttribute("class", "green");
        l11c12.setAttribute("class", "square sq-green");
        l12c12.setAttribute("class", "square sq-green");
        
        idQuestionBox14.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(13);
        removeQuestionBox(14);
    } else {
        meioPonto = true;
        idQuestionBox14.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 15
function btnQuestion15() {
    if (inputQuestion15.value.toUpperCase() == "DUAL CORE") {

        // exibindo resposta correta
        l14c14.innerHTML = "D";
        l14c15.innerHTML = "U";
        l14c16.innerHTML = "A";
        l14c17.innerHTML = "L";
        // l14c18.innerHTML = " ";
        l14c19.innerHTML = "C";
        l14c20.innerHTML = "O";
        l14c21.innerHTML = "R";
        l14c22.innerHTML = "E";

        // alterando cores para verde
        l14c13.setAttribute("class", "green");
        l14c14.setAttribute("class", "square sq-green")
        l14c15.setAttribute("class", "square sq-green")
        l14c16.setAttribute("class", "square sq-green")
        l14c17.setAttribute("class", "square sq-green")
        l14c18.setAttribute("class", "square bg-green")
        l14c19.setAttribute("class", "square sq-green")
        l14c20.setAttribute("class", "square sq-green")
        l14c21.setAttribute("class", "square sq-green")
        l14c22.setAttribute("class", "square sq-green")
        
        
        idQuestionBox15.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(14);
        removeQuestionBox(15);
    } else {
        meioPonto = true;
        idQuestionBox15.setAttribute("class", "question-box wrong-answer-box");
    }
}

// Questão 16
function btnQuestion16() {
    if (inputQuestion16.value.toUpperCase() == "QUAD CORE") {

        // exibindo resposta correta
        l6c3.innerHTML = "Q";
        l6c4.innerHTML = "U";
        l6c5.innerHTML = "A";
        l6c6.innerHTML = "D";
        l6c8.innerHTML = "C";
        l6c9.innerHTML = "O";
        l6c10.innerHTML = "R";
        l6c11.innerHTML = "E";

        // alterando cores para verde
        l6c2.setAttribute("class", "green");
        l6c3.setAttribute("class", "square sq-green");
        l6c4.setAttribute("class", "square sq-green");
        l6c5.setAttribute("class", "square sq-green");
        l6c6.setAttribute("class", "square sq-green");
        l6c7.setAttribute("class", "square bg-green");
        l6c8.setAttribute("class", "square sq-green");
        l6c9.setAttribute("class", "square sq-green");
        l6c10.setAttribute("class", "square sq-green");
        l6c11.setAttribute("class", "square sq-green");
        
        
        idQuestionBox16.setAttribute("class", "question-box correct-answer-box");

        // atualizando score
        addPonto(15);
        removeQuestionBox(16);
    } else {
        meioPonto = true;
        idQuestionBox16.setAttribute("class", "question-box wrong-answer-box");
    }
}