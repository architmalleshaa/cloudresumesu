async function fetchVisitCount() {
  try {
    const apiUrl = "https://bsv7u1opwc.execute-api.us-east-1.amazonaws.com/Prod";

    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    // Parse the nested body string if present
    const parsedBody = typeof data.body === "string" ? JSON.parse(data.body) : data;

    document.getElementById("visit-counter").textContent = parsedBody.visit_count;
  } catch (error) {
    console.error("Error fetching visit count:", error);
    document.getElementById("visit-counter").textContent = "N/A";
  }
}

window.onload = fetchVisitCount;
