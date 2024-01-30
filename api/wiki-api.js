const axios = require("axios");
const { JSDOM } = require("jsdom");

// Wikipedia API URL
const apiUrl = "https://en.wikipedia.org/w/api.php";

// Function to fetch and extract the content of a Wikipedia article
async function getWikipediaArticleContent(title) {
  try {
    // Make a request to the Wikipedia API
    const response = await axios.get(apiUrl, {
      params: {
        action: "query",
        format: "json",
        titles: title,
        prop: "extracts",
        exintro: true,
        explaintext: true,
      },
    });

    // Extract the article content
    const page = Object.values(response.data.query.pages)[0];
    const articleContent = page.extract;

    return articleContent;
  } catch (error) {
    console.error("Error fetching Wikipedia article:", error.message);
    return null;
  }
}

// Example: Fetch the content of the Wikipedia article for "JavaScript"
const articleTitle = "JavaScript";
getWikipediaArticleContent(articleTitle)
  .then((content) => {
    if (content) {
      // Create a DOM using jsdom to manipulate the content further if needed
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // Extract the body or perform additional operations as needed
      const bodyContent = document.body.textContent;
      console.log(bodyContent);
    }
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
