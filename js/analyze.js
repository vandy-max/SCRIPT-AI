function analyzeScript(){

    const score = Math.floor(Math.random() * 100);

    let prediction = "";
    let suggestion = "";

    if(score >= 80){
        prediction = "High Viral Potential 🚀";
        suggestion = "Excellent hook and engagement!";
    }

    else if(score >= 50){
        prediction = "Moderate Potential 📈";
        suggestion = "Improve pacing and emotional impact.";
    }

    else{
        prediction = "Low Potential ⚠️";
        suggestion = "Add stronger hooks and reduce filler.";
    }

    document.getElementById("score").innerText = score + "%";

    document.getElementById("prediction").innerText = prediction;

    document.getElementById("suggestion").innerText = suggestion;

}
