---
title: Im Swarnil Theme
subtitle: This is the demo site for Bulma Clean Theme
layout: home    
sidebar : false
---
 <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-half-tablet is-one-quarter-desktop">
          <div id="about-card" class="card card-hover" onclick="toggleCard('about')">
            <div class="card-content has-text-centered">
              <div class="icon-container">
                <span class="icon is-large">
                  <i class="fas fa-user icon"></i>
                </span>
              </div>
              <h3 class="title is-4">About Me</h3>
            </div>
            <div id="about-content" class="card-content is-hidden">
              <p>Hi, I'm Jared, a frontend developer with a passion for building beautiful and functional web applications. I have experience with React, Tailwind CSS, and various other web technologies.</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <div id="portfolio-card" class="card card-hover" onclick="toggleCard('portfolio')">
            <div class="card-content has-text-centered">
              <div class="icon-container">
                <span class="icon is-large">
                  <i class="fas fa-briefcase icon"></i>
                </span>
              </div>
              <h3 class="title is-4">Portfolio</h3>
            </div>
            <div id="portfolio-content" class="card-content is-hidden">
              <p>Check out my portfolio to see some of the projects I've worked on. From e-commerce websites to web applications, I've got a diverse range of experience.</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <div id="blog-card" class="card card-hover" onclick="toggleCard('blog')">
            <div class="card-content has-text-centered">
              <div class="icon-container">
                <span class="icon is-large">
                  <i class="fas fa-newspaper icon"></i>
                </span>
              </div>
              <h3 class="title is-4">Blog</h3>
            </div>
            <div id="blog-content" class="card-content is-hidden">
              <p>Check out my blog for the latest updates, tutorials, and insights on web development. I cover a wide range of topics, from React to Tailwind CSS and beyond.</p>
            </div>
          </div>
        </div>
        <div class="column is-half-tablet is-one-quarter-desktop">
          <div id="courses-card" class="card card-hover" onclick="toggleCard('courses')">
            <div class="card-content has-text-centered">
              <div class="icon-container">
                <span class="icon is-large">
                  <i class="fas fa-book icon"></i>
                </span>
              </div>
              <h3 class="title is-4">Courses</h3>
            </div>
            <div id="courses-content" class="card-content is-hidden">
              <p>Check out my online courses to learn web development from the ground up. I cover everything from HTML and CSS to advanced JavaScript and React.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    function toggleCard(cardId) {
      const card = document.getElementById(`${cardId}-card`);
      const content = document.getElementById(`${cardId}-content`);
      const isActive = card.classList.toggle('is-expanded');

      document.querySelectorAll('.card-content.is-hidden').forEach(el => {
        if (el !== content) {
          el.classList.add('is-hidden');
        }
      });

      content.classList.toggle('is-hidden', !isActive);
    }
  </script>
<section class="hero">
  <div class="hero-body">
    <div class="container">
     <!-- Right Side with Image Placeholder -->
      <div class="columns is-vcentered is-centered">
      <div class="column is-3">
          <figure class="image is-512x512 is-skeleton">
          <img alt="Placeholder" src="https://placehold.co/128x128">
           </figure>
        </div>
        <!-- Left Side with Text -->
        <div class="column is-6 ml-4">
          <p class="is-size-4">Hey, welcome to my blog</p>
          <h1 class="title is-1 ">Hi, I'm Swarnil Singhai</h1>
          <p class="is-size-4">I am an engineer and YouTuber.</p>
          <p class="is-size-6 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh.</p>
          <div class="buttons">
            <a class="button is-light">Learn More</a>
            <a class="button is-primary is-outlined">Contact</a>
          </div>
        </div>

<div class="column is-3">
    <div class="button-options">
  <div class="columns is-mobile">
    <div class="column">
      <button class="button is-primary is-light is-fullwidth is-medium">
        <span class="icon is-small"><i class="fas fa-blog"></i></span>
        <span>My Blog</span>
      </button>
    </div>
  </div>
  <div class="columns is-mobile ">
    <div class="column">
      <button class="button is-primary is-light is-fullwidth is-medium">
        <span class="icon is-small"><i class="fas fa-briefcase"></i></span>
        <span>My Portfolio</span>
      </button>
    </div>
  </div>
  <div class="columns is-mobile">
    <div class="column">
      <button class="button is-primary is-light is-fullwidth is-medium ">
        <span class="icon is-small"><i class="fas fa-tools"></i></span>
        <span>My Work</span>
      </button>
    </div>
  </div>
  <div class="columns is-mobile">
    <div class="column">
      <button class="button is-primary is-light is-fullwidth is-medium">
        <span class="icon is-small"><i class="fas fa-envelope"></i></span>
        <span>Contact Me</span>
      </button>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section mt-5">
    <div class="container">
        <div class="columns">
            <div class="column is-9">
                <h2 class="title">Recent Videos</h2>
                <p>Discover more of our video content and tutorials.</p>
            </div>
            <div class="column is-3">
                <a href="/videos" class="button is-primary is-fullwidth">
                    <span class="mr-2 icon">
                        <i class="fas fa-video"></i>
                    </span>
                    Explore All Videos
                </a>
            </div>
        </div>
        <div class="columns is-multiline">
            {% assign sorted_videos = site.videos | sort: 'date' | reversed %}
            {% for video in sorted_videos limit:4 %}
                <div class="column is-3">
                    <div class="card">
                        <div class="card-image">
                            <a href="{{ video.url }}"><img style="" src="https://img.youtube.com/vi/{{ video.video_id | split:'=' | last }}/maxresdefault.jpg" alt="{{ video.title }}"></a>
                        </div>
                        <div class="card-content">
                            <a href="{{ video.url }}" class="title is-4">{{ video.title }}</a>
                            <p class="subtitle is-6">{{ video.description }}</p>
                            <div class="is-flex is-vcentered mt-3">
                                <span class="icon is-small">
                                    <i class="far fa-clock"></i>
                                </span>
                                <p class="is-size-7 ml-1">{{ video.video_duration }}</p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item">
                                <a href="{{ video.url }}" class="has-text-primary">
                                    <span class="icon">
                                        <i class="fas fa-play"></i>
                                    </span>
                                    <span>Watch Video</span>
                                </a>
                            </p>
                        </footer>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</section>
<section class="section">
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <h2 class="title is-2 has-text-centered">Subscribe to Our Newsletter</h2>
                <p class="subtitle has-text-centered">Stay updated with our latest news and updates!</p>
                <div class="field is-grouped mt-4">
                    <p class="control is-expanded">
                        <input class="input " type="text" placeholder="Your Name">
                    </p>
                    <p class="control is-expanded">
                        <input class="input " type="email" placeholder="Your Email">
                    </p>
                    <p class="control">
                        <a class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <span>Subscribe</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
