function salary() {
    let Hours = document.getElementById('Hours').value
    let Days = document.getElementById('Days').value
    let SalaryForHours = document.getElementById('SalaryForHours').value
    let Prize = document.getElementById('Prize').value
    document.getElementById('sum').innerText = (+Hours * +Days * +SalaryForHours  *4 + +Prize )
    }