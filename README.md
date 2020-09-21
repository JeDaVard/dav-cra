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

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#
#Added instructions
###
####Run dev with docker
~~~
docker build -f Dockerfile.dev .
~~~
~~~
docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app <Container_id>
~~~
#
####Run with docker-compose 
~~~
docker-compose up
~~~
#
####Run tests
One possible way to run hot reload tests is below

(downside is that you have to copy container id)
~~~
docker-compose up
~~~
Then list all running container
~~~
docker ps
~~~
Copy the actual container image, then in other terminal window
~~~
docker exec -it <Container_id> npm run test
~~~
###
Another possible way is to uncomment the tests part of docker-compose file, run
~~~
docker-compose up
~~~
(by the way you can just run separately, like docker-compose up tests)

####Production build & run
For the production two separate ways, first we get node, then do usual npm stuff and make an image. Right after, we get nginx from docker hub, we use the last build (builder) to make our SPA static files (the build) to run on nginx server.

For that, you just run
~~~
docker build .
~~~
~~~
docker run -p 3000:80 <Container_id>
~~~
3000 would be the production port. 80 is the default nginx port