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

#### Easy to Add Posts
Originally, adding more posts to the site was tedious. For each addition, Webpack's config files had to be reconfigured. Multiple files had to be created, some mostly blank, in order to support Webpack's features.

After finishing an early version of the site and developing a better understanding of how Webpack works, I decided to improve the workflow of adding more posts. Now, additional posts are automatically detected and added to the site, all with very little work required of the end user.

##### Technical Workflow Description

Considering the constraints of Webpack and the <a href="https://github.com/jantimon/html-webpack-plugin" target="_blank">html webpack plugin</a> I was using, I built a small build pipeline that runs prior to Webpack's configuration.

This build pipeline will search a `./posts/` directory for any markdown files. Given any found markdown file, the pipeline will immediately build the markdown's respective html file and updated Webpack's configuration file to know of it.

Whereas Webpack's configuration file previosuly had to be modified by hand, it was now automated.

My new build pipeline makes adding additional posts a breeze. This project's GitHub repository's <a href="https://github.com/dyllandry/final-portfolio-site/blob/master/readme.md" target="_blank" aria-label="Dylan's portfolio project GitHub repository's read-me file.">readme.md file</a> details the process.

However, I did have to give up a feature of Webpack that I had previously thought was too good to lose.

Webpack, given awareness of the file, can reload itself whenever the file changes, otherwise known as hot reloading. This allows your development environment to always be up to date with your source files.

However, hot reloading requires that Webpack be aware of the original source file. Given that my previous build pipeline exports the markdown as html on its own, weback is only aware of the passed html.

Therefore changing the markdown does not trigger Webpack to reload. Instead, for Webpack to serve the new file once a change has been made, the entire Webpack development server must be restarted.

While this is a cost, I think it is a cost which is out weighed by the ease-of-use benefit the new build pipeline offers.

And a solution is not far off. It would not be difficult to start my own hot reload process that runs adjacent to Webpack. As long as the markdown is re-exported to html, Webpack will notice the changed html and trigger a reload.

## Things to Improve
I'd like to acknowledge what I could do better with this site. Because I believe it is okay to be ignorant, especially if you are aware of it.

> "There are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns — the ones we don't know we don't know."<span class="quote-attribution">— Donald Rumsfeld</span>

### Simplicity is Difficult
A focus of my site is to deliver information as efficiently as I can on the home page. There are three sections: about me, featured work, and my blog, which I think deliver the majority of what visitors would be looking for.

Though, to adhere to people's navigational expectations of how a site should work, I implemented a navigation bar across the top of the site. When on the home page, these links just highlight the sections already present.

My effort was to simplify the visitor's experience by condensing most desired information into just the home page. However, in tandem with adhearing to a common navigation pattern that is in this case unnecessary, the result may be an experience that is actually convoluted for some. 

Like Steve Jobs said, "Simple can be harder than complex."

This site will continue to improve as I receive more feedback from users. Maybe the navigation bar will remain, or possibly it will be removed. Or something else will take its place entirely.

## Conclusion
Overall I am happy with my portfolio site. One of the important factors for my experience as its maintainer is the site's room for growth. If I eventually think of a way it should change, I won't feel constricted by the systems already in place.

Furthermore, should I complete a new project, or write development tutorial, or choose to share my ideas on various topics, this site can easily facilitate the addition of new pages.

And yes, it's true, many of these features come packaged with pre-existing static site builders. 

Although, this is all for the sake of learning, and now I know first hand some of the necessary mechanisms for those systems to operate. If I ever work on a similar system, either identical or only slightly related, I will be much better equipped.