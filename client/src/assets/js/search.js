async function handleSearch() {
  const query = document.getElementById("searchBox").value;
  const response = await fetch(
    `http://localhost:3000/search?name=${encodeURIComponent(query)}`
  );
  const filteredData = await response.json();

  console.log("filteredData", filteredData);

  const container = document.getElementById("results");
  container.innerHTML = ""; // Clear previous results

  if (filteredData.length === 0) {
    container.textContent = "No results found.";
  } else {
    filteredData.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - ${item.job}`;
      container.appendChild(div);
    });
  }
}

// Attach event listener to the search button
document.getElementById("searchButton").addEventListener("click", handleSearch);

// Optionally, trigger the search when the user presses Enter
document.getElementById("searchBox").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
