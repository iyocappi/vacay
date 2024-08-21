async function handleSearch() {
  const query = document.getElementById("searchBox").value;
  const response = await fetch(`/search?name=${encodeURIComponent(query)}`);
  const filteredData = await response.json();

  console.log("filteredData", filteredData);

  const container = document.getElementById("results-container");
  container.innerHTML = ""; // Clear previous results

  if (filteredData.length === 0) {
    container.textContent = "No results found.";
  } else {
    filteredData?.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("result-item"); // Optional: Add a class for styling

      // Create an image element
      const img = document.createElement("img");
      img.src = item.imageUrl; // Assuming your API provides an imageUrl
      img.alt = `${item.name}`;
      img.classList.add("result-image"); // Optional: Add a class for styling

      // Create a text element
      const text = document.createElement("p");
      text.textContent = `${item.name} - ${item.job}`;
      text.classList.add("result-text"); // Optional: Add a class for styling

      // Append the image and text to the div
      div.appendChild(img);
      div.appendChild(text);

      // Append the div to the container
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
