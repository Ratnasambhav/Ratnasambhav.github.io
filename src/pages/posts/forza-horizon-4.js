import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import Head from '../../components/Head'

import postData from '../../components/postData'
import cover1 from '../../images/forza-horozon-4-cover-1.jpg'
import cover2 from '../../images/forza-horozon-4-cover-2.jpg'

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
        <img className="center blog-cover-image" src={cover1} alt="forza horizon 4 press image"/>

        <p>Forza Horizon 4 (FH4) is one of the best, if not the best arcade racing game of this console generation. Over the past year, I put more than 170 hours into the game and I don’t think that I will stop anytime soon.</p>

        <p>Racing is one of my favorite genera of video games. One of my earliest memory of playing games is going to my friend’s home and playing Need For Speed 2 Demo over and over again. Few years later I was rushing back home from school to play NFS Hot Pursuit, Underground, Underground 2 and other games in the NFS series. But the king of them all was definitely Most Wanted (the one released in 2005). It had great gameplay, amazing music and graphics which still don’t look dated. I played it from start to finish multiple times and still think about playing it sometimes.</p>

        <h2>The Good</h2>

        <p>I hadn’t played a racing game seriously since Most Wanted, but I finally got a chance to change that with FH4. This game is set in the UK, which is presented beautifully across four seasons – Summer, Autumn, Winter and Spring. You will be tearing through British streets, highways and dirt roads in a variety of vehicles, each rendered beautifully and in amazing detail. The graphics and visuals of this game are second to none. The game has four different racing disciplines:
          <ul>
            <li><strong>Road racing</strong> happen during the day on closed roads. This analogous to professional racing on tracks.</li>
            <li><strong>Street racing</strong> is the illegal version of road racing. It happens under the cover of the night with open traffic. It’s like the street races of Fast and The Furious movies, just a lot less glamourous.</li>
            <li><strong>Dirt racing</strong>, which is similar to real world rally racing.</li>
            <li><strong>Cross Country racing</strong>, which is almost totally off-roads.</li>
          </ul>
        </p>

        <p>The in-game season changes every 7 real word days and each season brings enough new activities and changes to existing content to keep the game interesting. A race on the same track feels drastically different from season to season. For example, your car will have good grip on the tarmac during summer. This will decrease during spring when it rains often. During winter season - depending on your car and difficulty settings - you can forget about grip.</p>

        <p>There are over 600 vehicles in the game, which is a car collector’s dream come true. You can buy car with the in-game currency, win cars in lucky draws (called wheel spins and rewarded for leveling up) and bid for them in online auctions. If you have the enough knowledge, most cars can be tuned and modified to your heart’s desire. There is also the option to just download and install tunes shared by other players. Performance tuning is meaning full and a good tune can compensate for the inevitable mistakes you make during a race. Cosmetic upgrades are limited as only a tiny subset of the available vehicles have aftermarket body kits. The livery editor is great but difficult to use with a controller. And how can I not mention the amazing tutorial/introduction sequence of the game. It is regarded as the best opening for a game by many fans.</p>

        <p>The things I have mentioned above are enough to make FH4 a good game. It is the gameplay, the way driving experience and the online experience which make it a great game. The physics and mechanics of the game can become you greatest allies or your deadliest enemies. Unlike arcade racer of NFS series, you can’t just drift through a corned after breaking at the last moment. Although you maybe be able to defeat the game AI with this strategy, online races with other players will be completely different. The game is easy pick up and have fun, but hard to master.</p>

        <p>The best players feather the break/accelerator triggers, follow the racing line and hit the apex of each corner. Player versus player online races is where the game is at its best. Winning against another human being after you perfectly follow the racing line is exhilarating. When you win, you know that you have hit the apex of each corner in the track. Starting from the back of the grid and ending the race on a podium only makes you want to go back for another race. The rush of excitement after a perfectly executed overtake when you fool your opponent into braking late in order to defend their position and then steal the inside line through the corner is something only a few other games can provide.</p>

        <h2>Tha Bad</h2>

        <p>The game doesn’t come without its flaws. Online racing is also where the game is at its worst. This is mostly the fault of toxic players who keep colliding with you on each corner and while overtaking. The game fails to punish this kind of behavior and at most slows down the player for a few seconds. The race is almost always destroyed for the player on the receiving end of the collision. Apart from this, the most common items you get from wheel spins are clothes and accessories for your in-game avatar. When compared to other possible rewards which include cars and in-game credits, it is hard not to feel cheated when you get some random clothing item for an avatar which a majority of players will not see again. Another major criticism faced by FH4 is the engine noise and other sounds coming out of a car is the worst among all current generation racing games. The beauty of the game comes at a price too – the loading times are huge and you will see the loading screen quite often. It breaks the immersion of driving a fast car.</p>

        <p>I know that the list of bad things is a lot shorter the list of good things. The above is in now way covers all the problems in the game, but then again this is not a comprehensive review of the FH4.</p>

        <img className="center blog-cover-image" src={cover2} alt="forza horizon 4 press image"/>

        <h2>The End</h2>

        <p>In spite of these flaws Forza Horizon 4 is one of my favorite game of all time and my second favorite racing game of all time (first place will always belong to Most Wanted). It has taught me a lot about racing and rekindled my interest in F1 and cars in general. It is refreshing to drive around the streets and country sides of the UK while I am stuck inside home due COVID-19. I have played the game for 170 hours and I will not stop playing it until I can play the next installment in the series, which I hope comes soon.</p>
      </div>
    </div>
  </Layout>
)