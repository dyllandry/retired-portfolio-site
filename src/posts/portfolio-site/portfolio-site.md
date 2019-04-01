---
title: My Portfolio Site
description: This site is an ever improving bundle of responsive and accessibility goodness. Built on Webpack, markdown, bulma css, and GitHub pages.
category: featured
---
# Building my Portfolio Site
I've restarted my portfolio site a dozen times. Then I decided to name the site's Github repository <a href="https://github.com/dyllandry/final-portfolio-site" target="_blank" aria-label="Link to Dylan Landry's portfolio site's Github repository.">*final-portolio-site*</a> and see through it to the end.

<figure class='image is-4by3' style="margin: 50px 0px;">
  <img class='post-image' data-src='collage.png' alt="The White Horse Masonry website is presented well across all device sizes."/>
</figure>

## Design
I can become unhappy with features I've designed. Because I approach design from a functional perspective. That is, if some feature doesn't serve its purpose well enough, I'll become unhappy with it and usually change or remove it.

However, I am proud to say that I am happy with my portfolio site. I've taken many steps to ensure it delivers on what benefits I think are important.

## Benefits
### Self Serve Buffet
At a buffet, getting your food is easy. You're probably starving, you've finally got your table, the only thing you need is a clear path to the food and not too many suprises along the way.

This website is a lot like a buffet. You probably know what your looking for, it's easy to see what's available, and the path to those resources is clear. It's not flashy, but you aren't looking for something flashy. You're looking for substance.

### You're Not Excluded
Imagine being denied access to a resource because of something outside your control. Take for example your age, race, or sex. In this case, my example is visual impairment.

That this site has been rigorously designed for multiple levels of accessiblity is not a matter of statistics (<a href="https://www.who.int/blindness/GLOBALDATAFINALforweb.pdf" target="_blank" aria-label="The W.H.O. 2010 report on visual impairments.">roughly 4% of the world's population is visually impaired</a>) but instead of principle and compassion.

To make sure everyone has equal access to this site, I've designed the navigation menus to adhere to the <a href="https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html" target="_blank" arial-label="How to make a navigation menubar as prescribed by the W3C organization.">interaction and structure standards</a> set by the World Wide Web Consortium (W3C). 

Particular html structures and attributes are required to ensure assistive technologies can properly understand the webpage. Similarly, JavaScript must lend a hand in order to facilitate the necessary interaction patterns assistive technologies employ.

### There's Room to Grow
As a web developer I am always improving. How I believe my site should work, or what benefits I think it should provide, will definitely change as time goes on.

The homepage layout of this site is purposefuly built using a tile layout provided by the <a href="https://bulma.io/documentation/layout/tiles/" target="_blank">Bulma CSS framework</a>. And like tiles, it can be made to fit any arrangement. This site affords easily adding or removing pieces.

## Things to Improve
I'd like to acknowledge what I could do better with this site. Because I believe it is okay to be ignorant, especially if you are aware of it.

> "There are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns — the ones we don't know we don't know."<span class="quote-attribution">— Donald Rumsfeld</span>

### An Easier Markdown Workflow
If a site's main substance is content like written blog posts, then adding additional blog posts should be easy. For this website, markdown files are processed into webpages by <a href="https://webpack.js.org" target="_blank">Webpack</a>, a module bundler.

Webpack introduces a particular workflow. To recieve Webpack's benefits, you must adhere your project to this workflow. Though, of course, you can be creative. 

The problem is that I am still learning what Webpack is capable of. The available documentation well describes how to write functionality within Webpack, for example how to directly use its features.

Though, I am still figuring out how to write my code *around* Webpack. That is, how can I structure and build my project to augment Webpack's existant capabilities.

#### Technically 
Technically what I am doing is pairing each markdown file with its own JavaScript file. Then, from my Webpack config file, I am listing each JavaScript file as its own entry point so that Webpack will process it.

I'd like to slim that down and leave Webpack to find the markdown paths on its own. Though, for my <a href="https://github.com/jantimon/html-webpack-plugin" target"_blank">html webpack plugin</a> to emit an html page, it requires a unique Webpack entry.

I'm still working out a better process. Though, I have put this problem on hold as right now as the current situation is "*good enough*". There are other things that I can work on which provide more benefit to both myself and the end user. For example improving the site's content.

I'll update this post as soon as I find a better way. I believe I'll likely figure it out by working on entirely other projects that approach this problem space from other perspectives. Until then, Ciao. 👋🏼