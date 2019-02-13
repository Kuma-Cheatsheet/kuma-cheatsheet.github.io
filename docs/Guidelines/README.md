# Contribution Guidelines
This is the contribution guidelines. Here's what you have to do to contribute!

## Step 1 : Fork the repository
Simple. Click the 'Fork' button on the repository that you liked to contribute. 

> If you did not know how to fork the repository, [click here](https://guides.github.com/activities/forking/)

You start contribute by cloning the repository that you liked to contribute (eg. Python repository) into your PC or on GitHub website text editor.

## Step 2 : Contribute
The cheatsheet where you have to contribute is in the `docs/` folder.<br>
The coding file (as a snipplet) is in the `code/` folder.<br>
The sidebar is in the `docs/.vuepress/config.js` file. Do not change navigation bar. 

Create a new resource or make edits there. If you do not edit there, you will see no change on the website once you tested it (else you are doing something other than contributing a resource)

We are using Markdown language for easier to contribute to everyone who does not understand VueJS or HTML. 

## Step 3 : Test it
You can test it by running these following commands. Open Terminal or Shell and get inside of the repository and then type
```
yarn
```

If you have yarn installed, that is fine. Process will start installing the node_modules.<br>
If you don't, install it. 

Then, type
```
yarn docs:dev
```
and it will `localhost` on your PC. You can checkout the results there.

::: warning
All of the cheatsheet is run using VuePress. Thus still requires client-side render (To convert markdown file to HTML, JS and many other components)

You can check more information about VuePress [here]()
:::

After testing it, make sure that you can access that page that you create or edit. If you can't, no one can. Please make a fix using a 'Inspect Element' tools on any web browser.

You can keep making edits. Make sure that you press save on your text editor and reload that page (force reload) to see your result on edits.

## Step 4 : Create a new Pull Request

## Step 5 : Wait for approval

---
Based on [https://opensource.guide/how-to-contribute/](https://opensource.guide/how-to-contribute/)