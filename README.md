# Contributors
<html>
<head>
  <style>
    .contributors-section {
      padding: 20px;
      max-width: 900px;
      margin: 0 auto;
    }

    .contributors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .contributor-card {
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      padding: 16px;
      display: flex;
      align-items: center;
      transition: transform 0.2s;
    }

    .contributor-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .contributor-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 16px;
    }

    .contributor-info {
      flex-grow: 1;
    }

    .contributor-name {
      font-weight: 600;
      font-size: 16px;
      margin: 0 0 4px 0;
      color: #24292e;
    }

    .contributor-role {
      font-size: 14px;
      color: #586069;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="contributors-section">
    <h2>Contributors</h2>
    <div class="contributors-grid">
      <!-- Example Contributor Card -->
      <div class="contributor-card">
        <img src="/api/placeholder/60/60" alt="Contributor" class="contributor-avatar">
        <div class="contributor-info">
          <h3 class="contributor-name">John Doe</h3>
          <p class="contributor-role">Lead Developer</p>
        </div>
      </div>

      <!-- Example Contributor Card -->
      <div class="contributor-card">
        <img src="/api/placeholder/60/60" alt="Contributor" class="contributor-avatar">
        <div class="contributor-info">
          <h3 class="contributor-name">Jane Smith</h3>
          <p class="contributor-role">UI Designer</p>
        </div>
      </div>

      <!-- Example Contributor Card -->
      <div class="contributor-card">
        <img src="/api/placeholder/60/60" alt="Contributor" class="contributor-avatar">
        <div class="contributor-info">
          <h3 class="contributor-name">Mike Johnson</h3>
          <p class="contributor-role">Backend Developer</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
