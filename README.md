## Project description and reasons for technology selection
* The code repository is divided into two ends, client and server
* The reason why I don't choose isomorphic application.Because the project does not support server-side rendering, and there is no need to integrate front-end projects in the back-end applications. The server chooses the express framework to quickly build the server application, and the client chooses create-react-app to quickly complete the environment setup.



## How to run code

## client_side
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


## server_side

If you have installed nodemon, or a process daemon like pm2, please use it, if not, you need 

`node index.js`

After the client successfully submits, you will see the submitted json data in the terminal



## US Mobile Front End Coding Exercise

The front end coding exercise is meant to fairly evaluate a candidate with the least amount of effort (~ 4 hours) to come up with a working prototype of a sign up page.

## Motivation

The exercise has been structured around the work style that US Mobile front end engineers and product design teams engage in to come out with fantastic visual experiences.

## Design Screens

Internally we use Figma to share UX designs with front end engineers. The UX design can be found at

https://www.figma.com/file/WJW4Eb8cFSJgOgOK6lZgOl/USM-Sign-up-Engineering-Assignment?node-id=0%3A1

Hover & Button Prototype: https://www.figma.com/proto/zZczN3OAd5WIomNzxei8k5/Engineering-Assignment-Sign-up?node-id=107%3A673&viewport=723%2C968%2C0.12644416093826294&scaling=min-zoom

* This last one is just the behaviour for the hover on each box and also how it looks when you click on the checkmark and the button becomes active.
* To double check and make 100% clear, the button will only become active after all the boxes have been filled correctly and the checkmark has also been clicked. This example is just to show the behaviour of the elements.

The links are available only in view only mode. If there is any clarification required, Please do reach out to the hiring manager.

Some of the fonts might required a paid version. The ones that we use can be found in the font directory.

## Engineering Constraints

* Create a feature branch. Naming convention to follow is feature/signup_page_<Name of the candidate> 
* Please use React
* The code should be type covered, either is fine Typescript or FlowType
* Prefer javascript based styling approach, JSS/styled-components etc.
* Write tests using jest and react-testing-library
* The page(s) should be mobile and desktop friendly. They should render properly on both.
* Other design choices are left to the candidate eg; Leverage either node js based API for client-server integration or we do use firebase internally.
* Update the read me file to run the code
* Raise a pull request for review

