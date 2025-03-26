document.addEventListener("DOMContentLoaded", function () {
            function addRecommendation() {
                let recommendationText = document.getElementById("newRecommendation").value;
                let recommenderName = document.getElementById("recommenderName").value;

                if (recommendationText.trim() === "" || recommenderName.trim() === "") {
                    alert("Please fill in all fields.");
                    return;
                }

                // Create a new recommendation div
                let newRec = document.createElement("div");
                newRec.classList.add("recommendation");

                // Add content to the new recommendation
                newRec.innerHTML = `<p>"${recommendationText}"</p><h4>- ${recommenderName}</h4>`;

                // Append to recommendations list
                document.getElementById("recommendationsList").appendChild(newRec);

                // Clear input fields
                document.getElementById("newRecommendation").value = "";
                document.getElementById("recommenderName").value = "";

                // Show pop-up confirmation
                document.getElementById("popup").style.display = "block";
            }

            function closePopup() {
                document.getElementById("popup").style.display = "";
            }

            // Attach function to the button
            document.getElementById("submitRecommendationBtn").addEventListener("click", addRecommendation);
            document.getElementById("popup-close-btn").addEventListener("click", closePopup);
        });