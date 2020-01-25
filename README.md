<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Eagles high Painting Inc. - Logo" src="https://user-images.githubusercontent.com/29260507/73127318-67f06300-3f8c-11ea-86c3-d6263fb6c2a6.jpg" width="360" />
  </a>
<p>

# [Eagleshighpainting.com](https://eagleshighpainting.com)

Eagles High Painting Inc. [GatsbyJS](https://www.gatsbyjs.org/) corporate website. This is the repository to the companies website front end code. Please continue reading for instructions on getting the project set up for development, testing purposes and also code standard and other useful information. See deployment for notes on how to deploy the project on a live system.

## Getting Started

You will need to have the projects repository cloned and have Access rights to the repository. Normally all administrators have read and write access to the repo. Before Getting started please review basic React, and also SCSS fundamentals.

## Prerequisites

To run Development environment on this website you will need the latest version of node and npm installed to your machine to install visit [here](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm). Also access to your terminal. Please review [GatsbyJS documentation](https://www.gatsbyjs.org/docs/) for installation instructions.

## Installing

Once machine is ready follow these step by step series of examples that tell you how to get a development env running. This will require terminal to be open and run commands below.

```
git clone https://github.com/loboteck/corporate-site.git
```

```
cd eagles-high-painting
```

```
npm install
```

```
npm install -g gatsby-cli
```

```
gatsby develop
```

Then in your browser go to [https://localhost:8000](https://localhost:8000) to view development version of the website once dev server is started. Once you're at that url you will be able to make changes to the websites code and have the browser automatically refresh with updated changes

## Running the tests

Explain how to run the automated tests for this system

## Break down into end to end tests

Explain what these tests test and why

```
Need to write about tests
```

## Coding style

We need to be able to keep everything fully constistent and scalable so that the website is easy to maintain and have other developers working on it for code style there is a .prettierrc file to format all files run command below

```
npm run format
```

If you do not want to run this command you can install prettier format for vscode or your IDE. For indentation please use 3 spaces. 

## SCSS - Bem scope

What is BEM?
BEM stands for Block, Element, and Modifier. It’s a CSS naming convention for writing cleaner and more readable CSS classes.
BEM also aims to write independent CSS blocks in order to reuse them later in your project.
Before we jump into details, you can see below an example of how BEM class namings are:

```
// Blocks are named as standard CSS classes
.block {
}
// Elements declared with 2 underscores, after block
.block__element {
}
// Modifiers declared with 2 dashes, after block or after element
.block--modifier {
}
// element and modifier together
.block__element--modifier {
}
```

## Blocks
Blocks are independent, reusable and usually bigger components of a webpage. They can have modifiers and contain elements.
We can count bigger parts in a webpage like ```<header>, <nav>, <section>, <form>, <article>, <footer>``` as block examples.

## Elements
Elements are children of blocks. An element can only have 1 parent Block, and can’t be used independently outside of that block.
The naming of an element must start with its parent Block name, 2 underscores after it, and end with its own name:

```
<header class="youtube-header">
  <img class="youtube-header__logo"/>
  <div class="youtube-header__search"></div>
  <ul class="youtube-header__list">
    <li class="youtube-header__item></li>
    <li class="youtube-header__item></li>
 </ul>
</header>
```
Since youtube-header is the block, the naming convention of its elements can be written like this:

```
.youtube-header {
  // rules
  &__logo {
    // rules
  }
  &__search {
    // rules
  }
  &__list {
    // rules
  }
  &__item {
    // rules
  }
}
```

## Modifiers 
Modifiers
Modifiers represent different states or styles of classes. They can be used both for blocks or elements.
In HTML a modifier must be used together with its Block / Element, as additional features:

```
<form class="form form--large">
  <button class="form__button form__button--red"></button>
</form>
```
The naming of a modifier must start with its parent Block name, 2 dashes after it, and end with its own name.
Block — Modifier:

```
Element — Modifier:
.form {
  // rules
  .form__button {
    // rules
    
    .form__button--red {}  // Block Element Modifiers
    .form__button--green {}
   }
}
```

## Deployment 💫

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/sites/loboteck/overview)
Our code deployment is automatically deployed to netlify once this repository's master branch has been updated.

## Built With

* [GatsbyJS](https://www.gatsbyjs.org/) - React Static site framework used
* [NPM](https://www.npmjs.com/get-npm) - Dependency Management
* [Graphql](https://graphql.org/) - Used to query site data

## Version Control

We use [Github](http://github.com/) for versioning control all majore releases will be deployed to [https://loboteck.com](https://loboteck.com) 

## Authors

* **Kevin Lopez** - *Project Lead* - [Email](lopezkevin175@gmail.com)

See also the list of [contributors](https://github.com/loboteck/corporate-site/graphs/contributors) who participated in this project.
