---
title: Contributing
---
Contributions are very welcome as long as they follow the guidelines. If in doubt or have any questions, reach out to TVDK on discord (this is my display name, but I am in many variant sudoku discord servers.

## Guidelines
All pull requests will reviewed against these guidelines. TVDK reserves the right to make the final decision about content and contributions.
- Content must be relevant to variant sudoku, other pencil puzzles or some logic puzzles.
	- This really shouldn't need to be said, but just in case. This especially applies to politics and any sort of bigotry, transphobia, homophobia, racism, sexism, misogyny, etc.
- All content must be yours, unless you have explicit, written permission to use someone else's work (which must be attributed appropriately).
	- This does not apply to external links as long as ownership is not misrepresented.
- Content must be well written and contain minimal spelling and grammar mistakes.
- Structure new pages in a way that makes sense.
	- Images and files should be in their respective folders.
	- File names should be short, descriptive, unique, all lowercase and in the format `file_name`
	- Internal links should be shortest path and use `[display text](shortest/path/to_file)`
	- Maintain consistent formatting, headings, style across the website.
	- Maintain consistent markdown formatting across the website.
		- Use `*` for italics and bolding instead of `_`
		- Use `  ` (2 spaces) for line breaks, except maybe for empty lines? Tbd.
		- Use `1.` for ordered lists instead of `1)`
		- Use `-` for unordered lists instead of `*` or `+`
- Give commits short, descriptive names and summarise the changes in the description.
- No generative AI may be used.

These guidelines can be updated at any time, and are only guidelines. Exceptions may be allowed in special circumstances.

## Generative AI Policy
No materials made by or with generative AI may be added or linked to on this website. This includes, but is not limited to, text, images, videos.

## How to Contribute
### GitHub
To make contributions, it is recommended to use [GitHub Desktop](https://docs.github.com/en/desktop/overview/about-github-desktop) if you are unfamiliar with git. [Clone](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop) the [GitHub Repo](https://github.com/tvdk-sudoku/sudoku-resources) to somewhere on your device. This is where you can edit the repo locally.  
To update your local copy of the repo, [pull](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop) the new changes.  
### Quartz
This website is built with [Quartz](https://quartz.jzhao.xyz/) which offers easy customisation without needing computing experience.  
To run a copy of the website locally, you will need [Node.js](https://nodejs.org/) **v22 or later** (run `node -v` to check) and **npm v10.9.2 or later** (bundled with Node — run `npm -v` to check).  
  
To preview changes, run `npx quartz build --serve` in your terminal while in the root folder of the repo. The dev server watches for file changes and reloads automatically.  

### Adding Content
All the files for the website are found in the `content` folder. Quartz takes markdown files and automatically converts them into html/css/js files on deploy. This means that all content is just [markdown](https://www.markdownguide.org/basic-syntax/) files (.md) and is easy for anyone to use with just a text editor. I use [Obsidian](https://obsidian.md/) as it is build entirely for markdown but any text editor can do. An important thing to note is that line breaks in markdown require either "trailing whitespace" (2 or more spaces at the end of the line) or the html `<br>` tag.  

Additionally, pages have metadata at the top which includes properties like the title and whether a page is a draft. The format of it is as follows:
```
---
title: The Title
draft: true
---
```
All pages should have a short, descriptive title.  
If you do not want a page to be published to the website yet, you can use `draft: true` (Note that this still uploads it to the GitHub repo, which is public). It is not necessary to include `draft: false` to have it published and as such, do not include it.

### Pull Requests
When you have finished working on something, [commit](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop) the relevant changes. Please give all commits descriptive names and summarise the changes in the description.  
Once you are ready to upload all of your changes, create a [pull request](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop#creating-a-pull-request). Once a pull request is created, we will review your changes and accept, refuse, or give feedback on it. If we accept your pull request, that means everything was good and your changes will be applied to the website within a minute or two. If we refuse a pull request, we will give a reason why and maybe some suggestions. If we give feedback and do not accept it, make the changes we suggest and then update the pull request. We retain the right to accept, refuse, or give feedback at our discretion and our decision is final.

### Issues
If there is an issue or a suggestion, create an [issue](https://github.com/tvdk-sudoku/sudoku-resources/issues) on the GitHub repo. If you do create an issue, please be as descriptive as possible about the problem.