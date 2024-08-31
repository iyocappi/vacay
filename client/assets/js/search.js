const searchButton = document.getElementById("searchButton");
const container = document.getElementById("results-container");
const div = document.createElement("div");
const searchBtnContainer = document.getElementById("searchBtnContainer");
const proceedLink = document.createElement("a");
const resetButton = document.getElementById("resetButton");
import { createClient } from "https://esm.sh/@sanity/client";

const client = createClient({
  projectId: "zyxj6mrs",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// const data = await client.fetch(`count(*)`);

// console.log(`Number of documents: ${data}`);

async function handleSearch(event) {
  event.preventDefault();

  const mosQueryValue = document.getElementById("searchBox").value.trim();

  if (!mosQueryValue) {
    alert("Please enter a search term.");
    return;
  }

  // GROQ query to filter results by the 'mos' field
  const sanityQuery = `*[_type == "profile" && details.mos match $mos]{
    name,
    about,
    "imageUrl": image.asset->url,
    details
  }`;

  const filteredData = await client.fetch(sanityQuery, {
    mos: `${mosQueryValue}*`,
  });
  // console.log("filteredData", filteredData);

  container.innerHTML = ""; // Clear previous results

  try {
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
  } catch (err) {
    console.log(err);
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

// Attach event listener to the search button
resetButton.addEventListener("click", resetForm);

// Optionally, trigger the search when the user presses Enter
document.getElementById("searchBox").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
