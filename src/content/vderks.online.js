const Data = {
  "app" : {
    "menuOpen" : false,
    "techniqueLogos" : {
      "bootstrap" : "devicons devicons-bootstrap",
      "javascript" : "devicons devicons-javascript_badge",
      "nodejs" : "devicons devicons-nodejs_small",
      "php" : "devicons devicons-php",
      "react" : "devicons devicons-react",
      "redux" : "custom-icon icon-redux",
      "symfony" : "devicons devicons-symfony_badge",
      "twig" : "custom-icon icon-twig",
      "wordpress" : "devicons devicons-wordpress"
    }
  },
  "content" : {
    "about" : {
      "content" : "<p><em>I am Vincent. I'm a Dutch-born and raised FrontEnd Developer who moved to Munich last year to experience the finer sides of German culture ( my German girlfriend also might have played a small role in that).</em></p><p>Since I live in this beautiful city I've kept on working for my Dutch employer, WebEngine, a web-development company based in Eindhoven.</p><p>Working at home is not new to me as I used to work as a freelancer and run my own little company for several years. I started out developing custom WordPress themes and plugins for small and medium sized companies. WordPress always was, and still is my go-to CMS to develop small to medium sized websites and even web-applications. Especially since the rise of the WP-Rest API, I've even been using WordPress as the backend of some of my (web-) apps.</p><p>As these small jobs became less and less challenging I decided it was time to ditch the stereotype of the lonesome nerd and work for a company with nice colleagues, bigger projects and bigger clients. At WebEngine I got the opportunity to specialize in Javascript frontend libraries/frameworks such as React and to work on several enterprise level projects that evolve around a React/Redux/symfony2 system.</p><p>Luckily I can still do this from my new home but I think it's time for a new chapter with bigger challenges which is why I am looking for a chance to develop my skills and push the boundaries of the Internet we know, preferably with an open, adventurous team and a productive environment.</p><h2>Skills</h2><h3>Of course, all the basics</h3><ul class='skill-list'><li>HTML, CSS & Javascript</li><li>PHP (including Symfony)</li><li>Twig</li><li>Bootstrap</li><li>Sass/SCSS/Less</li></ul><h3>Javascript</h3><ul class='skill-list'><li>ES6</li><li>ReactJS</li><li>Redux</li><li>React Native</li><li>Backbone</li><li>NodeJS</li></ul><h3>Tools/Workflow/Build tools</h3><ul class='skill-list'><li>Atlassian Stack (Jira, Confluence, BitBucket/Stash)</li><li>Git</li><li>Yarn</li><li>npm</li><li>Webpack</li><li>Grunt</li><li>Composer</li></ul><h3>CMS</h3><ul class='skill-list'><li>WordPress</li><li>Magento</li><li>Craft CMS</li></ul>",
      "title" : "About me"
    },
    "thanks" : {
        "content" : "Thank you for your message. I will get back to you shortly.",
        "title" : "Thanks!"
    },
    "work" : {
      "title" : "A selection of my work",
      "content" : "On this page you'll find a selection of my past work. There are several projects I'm really proud of, but can't show off here due to client-restrictions. I will gladly explain a little bit more about these projects or showcase them in a personal talk.",
      "workItems" : [ 
      //   {
      //   "logo" : "images/randstad-logo.png",
      //   "slug" : "randstad",
      //   "techniques" : [ "symfony", "javascript", "twig" ],
      //   "content" : "The client wanted us to build an intelligence test. Fast, stable, should work seamless across a broad spectrum of devices and impossible to cheat.",
      //   "title" : "Randstad Intelligence Test"
      // }, 
      {
        "logo" : "images/snurk-logo.jpg",
        "slug" : "snurk",
        "techniques" : [ "symfony", "javascript" ],
        "short_content" : "A Symfony 2 based webshop",
        "content" : "<p>To describe SNURK in their own words: <em>\"SNURK 'for horizontal living' likes to celebrate the art of doing absolutely nothing. With bedding, throw pillows and horizontal wear for all ages.\"</em>. SNURK is a big company with their products being sold in over 25 countries all over the world.</p><p>While working at WebEngine I was responsible for several redesigns on their frontend. The webshop is build on a Symfony2 / Sylius.</p>",
        "title" : "Snurk - horizontal living",
        "link" : "https://www.snurkbeddengoed.nl/en"
      }, {
        "logo" : "images/logo-0031flyfishing.png",
        "slug" : "0031flyfishing",
        "techniques" : [ "wordpress", "javascript", "react", "redux" ],
        "short_content" : "My own personal blog about fly fishing",
        "content" : "<p>Apart from nerding behind a computer, I also like to spend some time outdoors. I especially love to spend that time outdoors while being waist deep in a fast flowing mountain stream, with a fly fishing rod in my hands.</p><p>To share my experiences with my fellow fly fishing fanatics I started a blog a couple of years ago. Due to a lack of time the blog hasn't been very active the last few years, but it still gets a fair amount of views.</p><p>The last couple of months I've been working on a modernised version of the blog (old one can still be found <a href='http://www.0031flyfishing.com'>here</a>). The new version is completely React based SPA with a WordPress backend. Using the WordPress REST API, React, React Router I've managed to build a full working WordPress template. This project gives me the opportunity to work with some of the latest frontend techniques (including CSS Grids, Flexbox etc) on a production project. Still working on some final touches: push notifications and some more PWA features, such as offline support. But a working version can be found at the link below. Also, the codebase for this project is available on <a href='https://github.com/vincent-derks/react-0031flyfishing' target='_blank'>Github.</a></p>",
        "title" : "0031 FlyFishing",
        "link" : "http://react.0031flyfishing.com"
      }, {
        "logo" : "images/ba-logo.png",
        "slug" : "ba-groep",
        "techniques" : ["wordpress", "javascript"],
        "short_content" : "Custom WordPress template for a large implementation and advisory organization in the social domain",
        "content" : "<p>While working at WebEngine I was responsible for building a new WordPress powered website for B&A Group.</p><p>The structure of this website made us do some heavy changes on the standard WordPress routing and rewrites, and was therefore a challenging project. Lots of different Custom Post Types and custom fields. This template is also build using Timber/Twig, and therefore gave me the opportunity to build a super clean template codebase. The outcome is a very happy client, and a nice looking modern WordPress website.</p>",
        "title" : "B&A Groep",
        "link" : "https://bagroep.nl"
      }, {
        "logo" : "images/moboption-logo.png",
        "slug" : "moboption",
        "techniques" : ["wordpress", "javascript"],
        "short_content" : "WordPress template for a trading platform",
        "content" : "<p>Moboption.com is a digital option platform. You can gain profit by trading with stocks, commodities, indices and currencies.</p><p>While working at WebEngine I was responsible for building MobOption a new WordPress website, including a custom theme and several custom build plugins. All of this is based on the <a href='https://github.com/roots/bedrock' target='_blank'>Bedrock</a> structure. Therefore it allows me to more easily maintain a Git-repo, do depencency management with Composer (including WP Core and Plugins), use Dotenv for environment variables, and it gives better security through a completely different folder structure. Most of my WordPress themes are using Timber, so we can utilize the advantages of the amazing templating engine Twig.</p><p>In this project we heavily used the WP REST API and other API's.</p>",
        "title" : "Moboption",
        "link" : "https://www.moboption.com"
      } ]
    }
  }
}

export default Data