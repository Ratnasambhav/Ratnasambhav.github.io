import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

export default () => (
  <Layout>
    <Head
      URL="https://ratnasambhav.github.io/micro"
      title="Micro Journal | Ratnasambhav Priyadarshi"
    />
    <h1 className="post-title">Micro Journal</h1>
    {/* <p>This page is for my thought on things which don't justify a full fledged blog pots. They will be short and relatively unrefined.</p> */}
    <h1>#1 - Moments before website launch</h1>
    <p>It's 2 AM on Thursady.</p>
    <p>Just need to fix a couple of bugs and then setup GitHub pages. Still haven't decided if I will show the website to my friends. Maybe I will put it as my status on WhatsApp. I haven't added analytics to the site so I wouldn't be able to find if the site has had any visitors. Even if I add analytics, majority of poeple on desktop use an ad-block plugin. I don't imagine that most of my firends have ad-block on their phones and thats probably how they will visit the site.</p>
    <p>Back to squashing some bugs.</p>
  </Layout>
)
