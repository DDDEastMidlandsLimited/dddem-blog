---
layout: post
title: How To Make A Pull Request With Your New Post
description: "A guide on how to raise a pull request and how to write up your blog post for the DDD East Midlands website."
date: 2019-10-10
cover: "/assets/header_image.jpg"
author: Marcus Noble
categories: [community]
comments: false
share: true
---

---
<center>
<h3 class="quote"><i>The DDD East Midlands blog is a community effort.</i></h3>
</center>
---

With [Hacktoberfest](https://hacktoberfest.digitalocean.com/) in full swing many folks are getting involved in contributing to open source projects for the first time. The DDD East Midlands blog is a community effort and [encourages contribution](https://github.com/DDDEastMidlandsLimited/dddem-blog/issues) of blog posts from members of the community. For this post we will walk through the steps needed for someone to contribute their own blog posts with a very brief introduction to GitHub, Git, Jekyll and Pull Requests.

<br/>

## Prerequisites

---

Before we get started it would be handy to have a few things set up first if you don't already:

* If you don't yet have your own GitHub account now would be a good time to [create your own GitHub account](https://github.com/join)
* You will also need to [download and install Git](https://git-scm.com/downloads) as well as some sort of text editor to work in. (I recommend [Visual Studio Code](https://code.visualstudio.com/)).
* [_Optional but recommended_] To view your changes to the DDD East Midlands blog on your local machine you will need to install Ruby and Jekyll. The [DDD East Midlands blog repository](https://github.com/DDDEastMidlandsLimited/dddem-blog#running-this-project-locally) has the steps needed for this.

<br/>

## Let's get going

---

The first thing we need to do is get our own copy of the DDD East Midlands blog. To do this we must head over to the [dddem-blog GitHub repository](https://github.com/DDDEastMidlandsLimited/dddem-blog).

To get our own copy we need to click the "Fork" button towards the top right of the page.

<br/>
<img src="/assets/img/2019-10-10/Fork-repo.png" alt="Screenshot of the DDD East Midlands GitHub repository with the Fork button highlighted" width="100%"/>
<center>
<i>Screenshot of the DDD East Midlands GitHub repository with the Fork button highlighted</i>
</center>
<br/>

Now that we have our very own copy we can download it onto our computer so we can begin writing our fantastic blog post to share with the community.

<br/>
<img src="/assets/img/2019-10-10/Forked-repo-clone.png" alt="Screenshot of forked DDD East Midlands GitHub repository with the clone dialog showing" width="100%"/>
<center>
<i>Screenshot of forked DDD East Midlands GitHub repository with the clone dialog showing</i>
</center>
<br/>

Click on the green "Clone or download" button on the right and copy the text shown in the textbox. Switch over to a terminal window (e.g. git bash or CMD on Windows, iTerm on Mac or Terminal on Linux) and use git to clone your forked repository to your local machine. (Note, you may be asked for your GitHub login details)

```shell
git clone https://github.com/AverageMarcus/dddem-blog.git
```

<br/>
<img src="/assets/img/2019-10-10/Git-clone.png" alt="Screenshot a git clone command in a terminal window" width="100%"/>
<center>
<i>Screenshot a git clone command in a terminal window</i>
</center>
<br/>

## Adding our content

---

We now have a full copy of the DDD East Midlands blog on our machine so lets open it up and start adding our post. Open the newly downloaded directory in your favourite text editor and you should see a directory at the top level called `_posts`. This is where we're going to create our new blog post file, in this case the files are named with a date, followed by a short title of the post and the file extension of `.md` (more on this shortly).

<br/>
<img src="/assets/img/2019-10-10/Posts-directory.gif" alt="Animation showing a new file being added to the posts directory" width="100%"/>
<center>
<i>Animation showing a new file being added to the posts directory</i>
</center>
<br/>

Our newly created file is more than just a plain text file, it's a Markdown file! Markdown is a lightweight markup language used for formatting text and usually converted into HTML. Check out the [Markdown Guide](https://www.markdownguide.org/getting-started) for a good into to Markdown (It's ok, we'll wait 🙂).

The blog posts don't just contain markdown though. Each file starts with a block of metadata about the post that is called [Front Matter](https://jekyllrb.com/docs/front-matter/). This tells Jekyll (the tool that builds the webstie) a bit more about the page. Lets take a look at what the front matter for this post looks like:

```yaml
---
layout: post
title: How to make a pull request with your new post
description: "A guide on how to raise a pull request and how to write up your blog post for the DDD East Midlands website."
date: 2019-10-10
cover: "/assets/header_image.jpg"
author: Marcus Noble
categories: [community, hacktoberfest]
comments: false
share: true
---
```

Front matter uses [YAML](https://yaml.org/) and is situated at the start of the file between two sets of `---`. Each property has a label followed by a colon and then the value which could be in various types. For this page we're saying that we want to use the `post` layout so that the page is laid out as a blog post, we're setting a title and a description that can be displayed in the browser title bar and on the blog home page, a date so the post can be correctly ordered in relation to other blog posts. The `cover` is a path to an image that is used for the background at the top of this page. `author` and `categories` are fairly self-explanitary and are used at the top of the post to show who wrote it and give you handy tags to find similar posts in the same categories. Finally we have `comments` and `share` that allow us to turn on or off the ability to show comments on the page and show sharing links at the bottom of the post.

Below this we can start writing our blog post. I'll leave this bit up to you but remember to check the [Markdown Guide](https://www.markdownguide.org/getting-started) for what styling is available to you. If you'd like, you can take a look at the [source for this blog post](https://raw.githubusercontent.com/DDDEastMidlandsLimited/dddem-blog/master/_posts/2019-10-10-how-to-pr-with-your-post.md). Refer to the [Jekyll Quickstart guide](https://jekyllrb.com/docs/) on how to run the site locally to see your changes.

<br/>

## Submitting your post

---

You've now wrote an amazing blog post so it's time to share that with the world. We first need to tell Git about all the files we have added or changed so lets switch back to our terminal.
First add all new / changes files in the current directory:
```shell
git add .
```
We can make sure all files are there by running `git status`. If this looks good we can "commit" these changes as follows:
```shell
git commit -m "Added blog post about how to add a blog post"
```
The `-m` flag is for message, the text after is what is shown to others to explain what you've done so make sure you make this as descriptive and clear as you can.
Finally we need to send these changes back to GitHub so we can create our Pull Request:
```shell
git push
```

<br/>
<img src="/assets/img/2019-10-10/Push-changes.png" alt="Screenshot of a terminal window displaying the previously described commands" width="100%"/>
<center>
<i>Screenshot of a terminal window displaying the previously described commands</i>
</center>
<br/>

Switch back to GitHub and go to your forked repository of the DDD East Midlands blog. You should now see a message saying "This branch is 1 commit ahead" and the change you made should be shown a little below. From here click the "Pull Request" button as shown below.

<br/>
<img src="/assets/img/2019-10-10/Github-pull-request-button.png" alt="Screenshot of GitHub, highlighting the Pull Request button" width="100%"/>
<center>
<i>Screenshot of GitHub, highlighting the Pull Request button</i>
</center>
<br/>

This button will take you to a new page showing you all your changes and show you which repository you will be submitting your changes to.

> (Note: This page may show you a red warning message about creating a PR from the default branch being an anti-pattern. This is ok to ignore in this instance but it is worth reading the [blog post](https://blog.jasonmeridth.com/posts/do-not-issue-pull-requests-from-your-master-branch/) the message links to to learn more.)

Click the green "Create pull request" button and you'll be presented with a form to fill out. The title field will likely be pre-populated with your commit message from earlier but if not make sure you name it something clear and descriptive so others know what your changes are. You can then populate the description text area with as much details as is needed for your change. Explain what it is you've added and why. If it's in relation to an existing [issue](https://github.com/DDDEastMidlandsLimited/dddem-blog/issues) on the dddem-blog repository then include a link to it. If you've worked with anyone else on your changes it's good to include them here too.

<br/>
<img src="/assets/img/2019-10-10/Pull-request.png" alt="Screenshot of a GitHub pull request" width="100%"/>
<center>
<i>Screenshot of a GitHub pull request</i>
</center>
<br/>

When you submit your Pull Request maintainers of the repository will get a notification (if they're enabled them) letting them know that there is a new contribution to review.

From here several things can happen...

* One of the project maintainers can approve your changes and merge them in, making them available for everyone. (Yipee!)
* You may receive some comments on your Pull Request. The types of comments people leave varies but these are usually questions about your change or suggestions for improvements. Discussion is good here. If improvements are suggested just follow the steps above - make you changes, add to git, commit and push - you changes will automatically show up in the Pull Request.
* A project maintainer could reject your Pull Request. Don't take this personally. Not all changes are wanted in a project. If you're ever unsure about if you should submit a Pull Request to a project it's good to see if the repository has [`CONTRIBUTING.md`](https://github.com/DDDEastMidlandsLimited/dddem-blog/blob/master/.github/contributing.md) file outlining what contributions they accept or open an issue on the repository to discuss your planned changes first before you put the effort in.
* It's entirely possible that nothing happens to your Pull Request. It may just sit there. This is also fine! Remember that many of the repositories on GitHub are built by people in their spare time who may no longer have the time or interest to dedicate to it.

<br/>

## Wrap up

---

That's it!

We've forked the dddem-blog repository, added our awesome blog post, tracked the changes using Git and we've submitted our Pull Request on GitHub. What happens now is out of our hands so we can sit back, relax and see what happens. Hopefully you've learnt something along the way and at the very least you've completed one of your required Pull Requests for [Hacktoberfest](https://hacktoberfest.digitalocean.com/). 😉
