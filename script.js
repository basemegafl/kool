function showsection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('study').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    
    document.getElementById(sectionId).style.display = 'block';
}

function checkAnswer(selectedNumber) {
    let resultElement = document.getElementById('result');
    
    if (selectedNumber === '68') {
        resultElement.style.color = '#34d399';
        resultElement.innerHTML = 'إجابة صحيحة! الصحراء الغربية تبلغ مساحتها 68%.';
    } else {
        resultElement.style.color = '#f87171';
        resultElement.innerHTML = 'إجابة خاطئة، حاول مرة أخرى!';
    }
}