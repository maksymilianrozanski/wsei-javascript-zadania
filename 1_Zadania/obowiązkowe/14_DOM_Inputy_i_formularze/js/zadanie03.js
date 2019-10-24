document.addEventListener("DOMContentLoaded", () => {

    let form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", (ev) => {
        addRowToScoreBoard();
        ev.preventDefault()
    });

    function addRowToScoreBoard() {
        if (isInputValid()) {
            let scoreboard = document.getElementsByClassName("table table-bordered")[0];
            let newRow = document.createElement("tr");

            let team1Data = document.createElement("td");
            team1Data.innerHTML = document.getElementById("team1").value;
            newRow.appendChild(team1Data);

            let team2Data = document.createElement("td");
            team2Data.innerHTML = document.getElementById("team2").value;
            newRow.appendChild(team2Data);

            let scoreData = document.createElement("td");
            scoreData.innerHTML = document.getElementById("points1").value + " - "
                + document.getElementById("points2").value;
            newRow.appendChild(scoreData);

            scoreboard.appendChild(newRow)
        }
        return false;
    }

    function isInputValid() {
        let team1Text = document.getElementById("team1").value;
        let team2Text = document.getElementById("team2").value;
        let team1Score = document.getElementById("points1").value;
        let team2Score = document.getElementById("points2").value;
        return (team1Text !== team2Text && team1Score >= 0 && team2Score >= 0)
    }
});
