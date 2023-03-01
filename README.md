
# Google Search Book

## Installation

#### Be sure you have installed
- [NodeJs](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)

#### Nice to have - [Postman](https://www.postman.com/)

#### Start server

> **_IMPORTANT:_**  
> Server runs on port ***8000***
>
> Be sure port is available

```
$ git clone https://github.com/SantGT5/kubes-server.git
$ cd kubes-server
$ npm install

--- node ---
$ npm run dev

--- docker ---
$ npm run docker:compose

--> for more details, check "Available Scripts"
```
After server starts ( using node or docker ), the following success message appears from sever:

<img width="400" alt="Screenshot 2023-03-01 at 23 10 33" src="https://user-images.githubusercontent.com/83282533/222278205-b79d595e-b9a3-4788-8410-d547eaab3db4.png">

## Request & Response

Having server running, **`Postman`**  will help us to use our API.

To do so, open a new **`POST`** request using the following **`URL & Body`**:

```
URL -->
http://localhost:8000/v1/books

Json Body -->
{
	"query":  "Harry Potter"
}
```

<img width="1144" alt="Screenshot 2023-03-01 at 23 56 17" src="https://user-images.githubusercontent.com/83282533/222285270-fcadf3a4-f5bc-4797-b730-ad2638a545ac.png">


## Available Scripts

- ***`$ npm run compile`*** clean the atual build & compile TypeScript project in the **./dist** directory.

- ***`$ npm run dev`*** monitors project, using **nodemon**, in the **./server** directory & automatically restart application when it detects changes.

- ***`$ npm run docker:build`*** builds a **Docker** image from a **Dockerfile** naming **santgt5/kubes-server**

- ***`$ npm run docker:run`*** create a running container from the build image **santgt5/kubes-server**

- ***`$ npm run docker:compose`***  build & run image exposing on port **8000**

-  ***`$ npm run prettier:format`***  code formatter
