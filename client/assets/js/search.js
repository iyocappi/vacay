const searchButton = document.getElementById("searchButton");
async function handleSearch() {
  const query = document.getElementById("searchBox").value;
  const response = await fetch(`/search?name=${encodeURIComponent(query)}`);
  const filteredData = await response.json();

  // console.log("filteredData", filteredData);

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
      const textName = document.createElement("h2");
      textName.textContent = `${item.name}`;
      textName.classList.add("result-text-name"); // Optional: Add a class for styling

      const textAbout = document.createElement("p");
      textAbout.textContent = `${item.about}`;
      textName.classList.add("result-text-about");

      // Append the image and text to the div
      div.appendChild(img);
      div.appendChild(textName);
      div.appendChild(textAbout);

      // Append the div to the container
      container.appendChild(div);
      proceedLink.textContent = "";
      const proceedLink = document.createElement("a");
      proceedLink.href = "./apply-for-leave.html#apply-form";
      proceedLink.textContent = "Proceed to Apply";

      searchButton.appendChild(proceedLink);
    });
  }
}

// Attach event listener to the search button
searchButton.addEventListener("click", handleSearch);

// Optionally, trigger the search when the user presses Enter
document.getElementById("searchBox").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
