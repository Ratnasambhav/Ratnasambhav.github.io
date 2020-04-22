import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Head from '../../components/Head'

import postData from '../../components/postData'

const { link, title, dateCreated, author, tags } = postData[0]

export default () => (
  <Layout>
    <Head
      URL={`https://ratnasambhav.github.io${link}`}
      title={`${title} | Ratnasambhav Priyadarshi`}
    />
    <div className="post">
      <h1 className="post-title">
        <Link to={link}>
          {title}
        </Link>
      </h1>
      <div className="post-meta">
        <span className="post-date">
          {dateCreated}
        </span>
        <span>&nbsp;::&nbsp;</span>
        <span className="post-author">
          {author}
        </span>
      </div>
      <span className="post-tags">
        {tags.map(tag => <span>#{tag}&nbsp;</span>)}
      </span>
      <div className="post-content">
        <p>Ever since I learnt what a website is, I wanted to make one myself. While I was at school, I had a vague understanding of how the internet worked. It wasn’t until my first year of college that I was checking out the source code of popular websites and recreating them in my free time. As I got more and more into web development, I started reading blogs of other developers just to see what others were working on. Watching them share their work, thoughts and ideas made me want to make a blog for myself - a kind of digital notebook on the internet.</p>

        <p>I wanted to keep the website simple - home page with a small introduction and list of all the blog posts and a couple of other pages if needed. As expected of a young college student, I did not plan the website at all and just started with index.html in my text editor. It was building it in plain old HTML and CSS with a little bit of JavaScript sprinkled here and there. In a few hours, I was able to complete the website and I hated it. It was ugly, the folder structure of the project was a complete mess and there were a bunch of other issues which I don’t remember (this was back in late 2015).</p>

        <p>Too embarrassed to put the blog online, I scraped the whole project and focused on things I felt were more important at the time - modding Skyrim (another story for another time). But the desire to write and share online stuck with me - which might be odd because I do not like social media. Few months later, I restarted the project only to come to the same conclusion - it’s not good enough.</p>

        <p>This cycle of restarting the website and then killing it because I felt that I wasn’t good enough. In all the failed versions of the website, it’s structure of the website was almost always the same. The only difference was in the design/presentation side of the website, something I still struggle with today. I was chasing the look and feel of websites designed by tenured graphics designers on <a href="https://dribbble.com/" target="blank">dribble</a>, <a href="https://www.awwwards.com/" target="blank">awwwards</a>, and countless other places online. Failing to do that left me unsatisfied and I would abandon the project.</p>

        <p>In January 2019, I finally created a blog and hosted it on GitHub. It was my final year of college and I published the site to boost my online presence and exhibit my projects. It was just an online resume I created to increase my chances of getting a job. The site had a dedicated page for blog posts but through its lifetime, I did not post anything there. I didn’t write a blog post to 100% completion. Midway through the writing process, I would get fed up and postpone the post for another time. The rare ones I would complete would be so bad that I couldn’t imagine the criticism I would receive from the people who read it. And to no one's surprise, I wasn’t satisfied with the presentation of the website, which was another reason I didn’t post anything.</p>

        <p>Five years after my first attempt, I am finally posting something on the blog. I have redesigned the website to be as minimal as possible. I am still not satisfied with it but something is better than nothing and I will keep enhancing the website as time goes on. I know that the looks of a website isn’t as important as the content, it just took me five years to completely accept it.</p>

        <p>I will try to write new posts and publish them here as often as possible. Most posts would be related to my experiments with programming languages, but I also want to write about games, books, music and anything else I find interesting.</p>

        <p>Thanks for reading and I hope to see you soon again.</p>
      </div>
    </div>
  </Layout>
)