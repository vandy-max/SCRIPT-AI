document
.getElementById("signupForm")

.addEventListener("submit", async function(e){

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const creatorType =
        document.getElementById("creatorType").value;

    const vision =
        document.getElementById("vision").value;

    try{

        const response = await fetch(
            "https://ai-scriptbuddy-mwps.onrender.com/signup",
            {
                method: "POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({
                    username,
                    email,
                    password,
                    creatorType,
                    vision
                })
            }
        );

        const data = await response.json();

        console.log(data);

        alert("Account Created Successfully 🚀");

        window.location.href = "login.html";

    }

    catch(error){

        console.error(error);

        alert("Signup Failed ❌");
    }

});
