# Refactor this HTML to React

!warning!: There will be alot of copying and pasting on this one.

## Introduction

One of the basic and incredibly useful things that react can do for us is encapsulate the logic for a UI element in a react component. Your task is to look at this page and turn it into a data-driven react app. We've provided some helpful data for you in `fma-data.ts`. If the information in there is slightly off from what is in the html, don't worry about it, use that data as your source of truth.


## Project Requirements

In order to pass this assignment you should:

- [] draw out your component tree in excalidraw
- [] Set up a react app using vite
- [] Get your react app to look EXACTLY the same as this html project
- [] Use props to customize components that are being used
- [] Use conditional rendering to render odd rows as dark and even rows as light with the "light" | "dark" class names
- [] Abstract any REPEATED UI into Components
- [] use per-component CSS imports to ensure colocate CSS and components in your file
- [] have at least one Class Component that uses props
- [] have at least one Functional Component that uses props
- [] transform the original data to get the data you want for each component
  - We should be passing our array of characters (the data array) from the top to the children
  - You can transform that data either before or after sending it to the child component
- [] setup proper linting using the AirBnB extension and prettier
