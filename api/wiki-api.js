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
const articleTitle = "JavaScript"; //CHANGE TO REQ QUEARY

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











  //funtion to get previous content

  

  

  // Wikipedia API URL
  const apiUrl_revision = "https://en.wikipedia.org/w/api.php";

  // Function to fetch and extract the content of the previous revision of a Wikipedia article
  async function getPreviousWikipediaArticleRevision(title) {
    try {
      // Make a request to the Wikipedia API to get the current revision
      const currentRevisionResponse = await axios.get(apiUrl_revision, {
        params: {
          action: "query",
          format: "json",
          titles: title,
          prop: "revisions",
          rvprop: "ids",
          rvlimit: 1,
        },
      });

      const currentRevisionId = Object.values(
        currentRevisionResponse.data.query.pages
      )[0].revisions[0].revid;

      // Make a request to the Wikipedia API to get the previous revision
      const previousRevisionResponse = await axios.get(apiUrl_revision, {
        params: {
          action: "query",
          format: "json",
          titles: title,
          prop: "revisions",
          rvprop: "content",
          rvdiffto: currentRevisionId,
        },
      });

      // Extract the article content from the previous revision
      const page = Object.values(previousRevisionResponse.data.query.pages)[0];
      const articleContent = page.revisions[0]["*"];

      return articleContent;
    } catch (error) {
      console.error(
        "Error fetching Wikipedia article revision:",
        error.message
      );
      return null;
    }
  }

  // Example: Fetch the content of the previous revision of the Wikipedia article for "JavaScript"
  const articleTitle_revision = "JavaScript";//CHANGE THIS TO WHAT QUEARY U WANT






  getPreviousWikipediaArticleRevision(articleTitle_revision)
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
