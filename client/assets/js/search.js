const searchButton = document.getElementById("searchButton");
const container = document.getElementById("results-container");
const div = document.createElement("div");
const searchBtnContainer = document.getElementById("searchBtnContainer");
const proceedLink = document.createElement("a");
const resetButton = document.getElementById("resetButton");

async function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchBox").value;
  const response = await fetch(
    `http://localhost:3000/search?name=${encodeURIComponent(query)}`
  );
  const filteredData = await response.json();

  // console.log("filteredData", filteredData);

  container.innerHTML = ""; // Clear previous results

  if (filteredData.length === 0) {
    container.textContent = "No results found.";
  } else {
    filteredData?.forEach((item) => {
      div.classList.add("result-item"); // Optional: Add a class for styling

      // Create an image element
      const img = document.createElement("img");
      img.src = item.imageUrl; // Assuming your API provides an imageUrl
      img.alt = `${item.name}`;
      img.classList.add("result-image");

      // Create a text element
      const textName = document.createElement("h2");
      textName.classList.add("result-text-name");
      textName.textContent = `${item.name}`;

      const textAbout = document.createElement("p");
      textAbout.textContent = `${item.about}`;

      // Array of items to add to the list

      // Create the <ul> element
      const ul = document.createElement("ul");

      // Add a CSS class to the <ul> element
      ul.classList.add("dynamic-list");

      ul.innerHTML = `
      <li>Age: <b>${item.details.age}</b></li>
      <li>D.O.B: <b>${item.details.dob}</b></li>
      <li>Rank: <b>${item.details.rank}</b></li>
      <li>Eye Color: <b>${item.details.eyeColor}</b></li>
      <li>Hair Color: <b> ${item.details.hairColor}</b></li>
      <li>Height: <b>${item.details.height}</b></li>
      `;

      // Append the image and text to the div
      div.appendChild(img);
      div.appendChild(textName);
      div.appendChild(textAbout);
      div.appendChild(ul);

      // Append the div to the container
      container.appendChild(div);
      searchButton.textContent = "";

      proceedLink.href = "./apply-for-leave.html#apply-form";
      proceedLink.target = "_blank";
      proceedLink.textContent = "Proceed to Apply";
      searchButton.removeEventListener("click", handleSearch);

      searchBtnContainer.style.display = "flex";
      searchBtnContainer.style.justifyContent = "center";
      searchButton.classList.add("next");
      searchButton.appendChild(proceedLink);
    });
  }
}

const resetForm = () => {
  document.getElementById("about-main").reset();
  if (searchButton.contains(proceedLink)) {
    searchButton.removeChild(proceedLink);
  }
  searchBtnContainer.style.justifyContent = "";
  searchButton.textContent = "Search";
  div.remove();
};

// Attach event listener to the search button
searchButton.addEventListener("click", handleSearch);

// Optionally, trigger the search when the user presses Enter
document.getElementById("searchBox").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
