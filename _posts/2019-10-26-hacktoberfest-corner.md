---
title: 'Hacktoberfest at DDD: East Midlands'
layout: post
description: "Hacktoberfest visits DDD: East Midlands."
date: 2019-10-26T09:00:00+0100
cover: "/assets/header_image.jpg"
author: Anna Dodson and Jamie Tanna
categories: [hacktoberfest]
comments: false
share: false
---

----
<center>
<h3 class="quote"><i>Hack The Planet!</i></h3>
</center>

---

<br/>
Although the month of [Hacktoberfest](https://hacktoberfest.digitalocean.com/) is almost over, we're going to have a [Hacktoberfest stand at DDD East Midlands today](https://www.dddeastmidlands.com/hacktoberfest/).

As part of this, we'll be looking to promote the use of, and contribution to, Free and Open Source Software, and will be helping folks make their first foray into contributing.

There's so much Free and Open Source software that you are using day-to-day, maybe unknowingly, and getting a chance to celebrate this fact and spend some time giving back to projects is really key, especially as it can lead to you gaining confidence and allowing you to look to contribute throughout the year.

And even better, at the closing ceremony we'll be giving away a pair of these awesome Sammy the Shark slippers, courtesy of [Digital Ocean](https://digitalocean.com), to one of the contributors to this page!

<div style="width:100%">
<video style="display: block; margin: 4% auto" loop controls>
  <source src="https://talks.jvt.me/hacktoberfest-tech-nottingham/sammy-slippers.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</div>

<br/>

## So get started by following the [instructions below](#instructions), and add your picture!

<br/>
<section class="contributors_grid">
{% for image in site.static_files %}
{% if image.path contains 'img/2019-10-26/hacktoberfest-corner' %}
<img src="{{ site.baseurl }}{{ image.path }}" alt="Profile picture for {{ image.basename }}" title="{{ image.basename }}" />
{% endif %}
{% endfor %}
</section>

<br/>

# Instructions

---

### Raise your Pull Request through the web UI

1. Log in to your GitHub account (If you don't have an account - you'll need to register to get started)
2. Fork the repository. Head to [github.com/DDDEastMidlandsLimited/dddem-blog](https://github.com/DDDEastMidlandsLimited/dddem-blog) and click the `Fork` button in the top right

    This will create a copy of the project to your account so you can add your photo.

3. Upload your photo. Take a picture of yourself having a blast at DDD! Make sure you name the file your GitHub username so we know it's you! For example: `AnnaDodson.png`.

    Under the code tab, select the folder assets > img > 2019-10-26 > hacktoberfest-corner and on the right click the `Upload files` button. Upload your picture!

4. Commit your changes. At the bottom of the page, add a title like "Uploaded picture of Anna" and select `Create a new branch for this commit and start a pull request`, a suggested branch name will appear, you can leave it as it suggests.

    Click `Commit changes` when you're happy with your file - make sure you've named it your GitHub username!

5. Raise a Pull Request. Once the file is uploaded, you'll be directed to a Open a pull request page but you want to create the pull request against the DDD project repository so head over to the repo [github.com/DDDEastMidlandsLimited/dddem-blog](https://github.com/DDDEastMidlandsLimited/dddem-blog) and click the Pull Requests tab.

    There should be a yellow banner with your name and a button saying `Compare & pull request` (if there isn't click the `New pull request button`) click the button to create your pull request.

    The branches selected should be:

    **base repository:** DDDEastMidlandsLimited/dddem-blog **and base:** master

    **head repository:** your project name **and compare:** your branch name

    Fill in the description box with your name "Photo uploaded at DDD!", make sure the box is ticked for **Allow edits from maintainers** so we can help make changes if needed and then click `Create pull request` to create your pull request!! 🎉

6. Have fun and ask for help if you need it!!

<div style="width:100%; padding: 2%">
 <img src="https://hacktoberfest.digitalocean.com/assets/logo-hf19-header-8245176fe235ab5d942c7580778a914110fa06a23c3d55bf40e2d061809d8785.svg" alt="Hacktoberfest 2019 Logo" style="width: 60%;margin: auto;background-color: #152347;padding:2%"/>
 </div>
