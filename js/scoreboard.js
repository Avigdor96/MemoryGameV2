// document.addEventListener('DOMContentLoaded', ()=>{
window.onload =()=>{
    const scoreboard = document.getElementById('scoreboard').getElementsByTagName('tbody')[0]
    const users = JSON.parse(localStorage.getItem('users')) || {}
    for(const player in users){
        const row = scoreboard.insertRow()
        const cellPlayer = row.insertCell(0)
        const cellScore = row.insertCell(1)
        const cellCorrect = row.insertCell(2)
        const cellUnCorrect= row.insertCell(3)
        cellPlayer.textContent = player
        cellScore.textContent = users[player].score
        cellCorrect.textContent = users[player].correct
        cellUnCorrect.textContent = users[player].uncorrect
    }
};