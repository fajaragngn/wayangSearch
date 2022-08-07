### Built With


* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Programmable Search Engine](https://programmablesearchengine.google.com/about/)
* [Yarn](https://yarnpkg.com/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This are things you need to use the web app and how to install them.
* yarn
  ```sh
  npm install --global yarn 
  yarn dev   // to run local server
### Installation

1. Get a free API_KEY at [https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key](https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key)
   Get ( Search engine ID ) CONTEXT_KEY at https://cse.google.com/cse/create/new


3. Clone the repo
   ```sh
   git clone https://github.com/fajaragngn/wayangSearch.git
   ```
   
4. Add Next
   ```sh
   yarn add next react react-dom
5. Install all dependencies
   ```sh
   yarn 
6. Create a .env.local file to store your api keys
   ```js
   API_KEY = ' ' //API Key  https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
   CONTEXT_KEY = ' ' // Context Key  https://cse.google.com/cse/create/new ( Search engine ID )
7. Use dummy data for testing
  `const  useDummyData  =  false;`
  //true for development testing (mock results) change it in search.js
  (Free version of google search api has a quota of 100 search results per day  use dummy data so that you don't exhaust the quota)
8. To run on local host use
   ```sh
   yarn dev //starts a local server

