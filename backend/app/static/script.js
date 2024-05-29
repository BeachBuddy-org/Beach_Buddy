document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          document.getElementById("result").innerText = data.message;
          document.getElementById("error").innerText = "";
        } else if (data.error) {
          document.getElementById("error").innerText = data.error;
          document.getElementById("result").innerText = "";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("error").innerText = "Error registering user";
        document.getElementById("result").innerText = "";
      });
  });
