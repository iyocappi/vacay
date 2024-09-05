import { createClient } from "https://esm.sh/@sanity/client";

const client = createClient({
  projectId: "zyxj6mrs",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

// Fetch data from Sanity
async function fetchData() {
  const query = `*[_type == "militaryCarePackages"][0]{
      overview,
      militaryCarePackageList,
      miniCarePackage,
      airbourneCarePackage,
      premiumCarePackage
    }`;

  try {
    const data = await client.fetch(query);
    console.log("latest-query", query);
    return data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
  }
}

// Initialize the process
fetchData().then((data) => {
  if (data) {
    renderData(data);
  }
});

// Create a function to render the data
function renderData(data) {
  const container = document.getElementById("care-packages-container");

  // 1. Overview
  const overviewSection = `
      <article>
        <header class="major">
          <h1 class="about-title-main">${data.overview.title}</h1>
        </header>
        <p>${data.overview.description}</p>
      </article>
    `;

  // 2. Military Care Package List
  const packageListSection = `
      <article>
        <header class="major">
          <h3 class="about-title">${data.militaryCarePackageList.title}</h3>
        </header>
        <p>${data.militaryCarePackageList.description}</p>
        <ul>
          ${data.militaryCarePackageList.suggestions
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </article>
    `;

  // 3. Mini Care Package
  const miniCarePackageSection = `
      <article>
        <header class="major">
          <h3 class="about-title">${data.miniCarePackage.title}</h3>
          <ul>
            ${data.miniCarePackage.items
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
          <p>${data.miniCarePackage.price}</p>
        </header>
      </article>
    `;

  // 4. Airbourne Care Package
  const airbourneCarePackageSection = `
      <article>
        <header class="major">
          <h3 class="about-title">${data.airbourneCarePackage.title}</h3>
          <ul>
            ${data.airbourneCarePackage.items
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
          <p>${data.airbourneCarePackage.price}</p>
        </header>
      </article>
    `;

  // 5. Premium Care Package
  const premiumCarePackageSection = `
      <article>
        <header class="major">
          <h3 class="about-title">${data.premiumCarePackage.title}</h3>
          <ul>
            ${data.premiumCarePackage.items
              .map((item) => `<li>${item}</li>`)
              .join("")}
          </ul>
          <p>${data.premiumCarePackage.price}</p>
        </header>
      </article>
    `;

  // Combine all sections
  container.innerHTML = `
      ${overviewSection}
      ${packageListSection}
      ${miniCarePackageSection}
      ${airbourneCarePackageSection}
      ${premiumCarePackageSection}
    `;
}
