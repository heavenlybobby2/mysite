const firstComment = `<p>"Kudos to an exceptional web designer! Your creativity and expertise have truly shone through in the website you've crafted. It's a masterpiece that beautifully blends aesthetics and functionality. I'm beyond thrilled with the result – you've captured the essence of what I envisioned and brought it to life in an incredible way. Thank you for your hard work and dedication. I'm excited for everyone to experience the magic you've created here!"</p>
      <button class="js-seeless-button">See less</button>`

    const secondComment = `<p>
      "Wow, I am truly impressed by the incredible talent of you have as a web designer! The website You created for me is an absolute masterpiece. The attention to detail, seamless navigation, and stunning aesthetics truly showcase your expertise. It's not just a website, but a work of art that perfectly captures the essence of my vision. Thank you, for your exceptional skills and dedication. I couldn't be happier with the result!
      </p>
      <button class="js-seeless-button">See less</button>`

      const thirdComment = `<p>"Kudos to an exceptional web designer! I'm truly impressed by the incredible website you've crafted for me. Your attention to detail, creativity, and technical prowess shine through every element. It's evident that you've poured your heart into this project, and I couldn't be happier with the outcome. Your ability to capture the essence of what I envisioned and translate it into a stunning online presence is nothing short of remarkable. Thank you for your dedication and expertise – you've truly exceeded my expectations!"</p>
      <button class="js-seeless-button">See less</button>`;


      const commentBar = `<div class="comment-bar">
            <h3>Ethical Hacking</h3>
            <p>"Kudos to an exceptional web designer! Your creativity and expertise have truly shone through in the website you've crafted."
            </p>
            <button class="js-see-more-button">See more</button>
          </div>
          <div class="comment-bar">
            <h3>Ethical Hacking</h3>
            <p>"Wow, I am truly impressed by the incredible talent of you have as a web designer! The website You created masterpiece.</p>
            <button class="js-see-more-button2">See more</button>
          </div>
          <div class="comment-bar">
            <h3>Ethical Hacking</h3>
            <p>"Kudos to an exceptional web designer! I'm truly impressed by the incredible website you've crafted for me.</p>
            <button class="js-see-more-button2">See more</button>
          </div>`

    document.querySelector('.js-see-more-button').addEventListener('click', () => {
      document.querySelector('.js-comment').innerHTML = firstComment;

      document.querySelector('.js-comment').classList.add('js-comment-color')

      document.querySelector('.js-seeless-button').addEventListener('click', () => {
      document.querySelector('.js-comment').classList.remove('js-comment-color');
      document.querySelector('.js-comment').innerHTML = commentBar;
    })
    });

    document.querySelector('.js-see-more-button2').addEventListener('click', () => {
      document.querySelector('.js-comment').innerHTML = secondComment;

      document.querySelector('.js-comment').classList.add('js-comment-color')

      document.querySelector('.js-seeless-button').addEventListener('click', () => {
      document.querySelector('.js-comment').classList.remove('js-comment-color');
      document.querySelector('.js-comment').innerHTML = commentBar;
    })
    });

    document.querySelector('.js-see-more-button3').addEventListener('click', () => {
      document.querySelector('.js-comment').innerHTML = thirdComment;

      document.querySelector('.js-comment').classList.add('js-comment-color')

      document.querySelector('.js-seeless-button').addEventListener('click', () => {
      document.querySelector('.js-comment').classList.remove('js-comment-color');
      document.querySelector('.js-comment').innerHTML = commentBar;
    })
    });