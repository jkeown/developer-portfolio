<script> 
  import { page } from '$app/stores'
</script>

<div class="bg-container">
    
  <div class="bg-shape-1"></div>
  <div class="bg-shape-2"></div>
  <div class="main-container">
    <section class="app">
      <div class="top-case"></div>
      <div class="walker-contact">
        <div class="walker-contact-main">
          
          <button>{'<'}</button>
          <img src="/landing-page-images/chat-app-images/avatar.jpg" alt="Samuel Green">
          <div>
            Samuel Green <br>
            <span class="sub-heading">Available to Walk</span>
          </div>
        </div>
        <div class="ellipsis">
          <p>&#8942;</p>
        </div>
      </div>
      <div class="walker-chat chat-box">
        That sounds great. I’d be happy with that.
      </div>
      <div class="walker-chat chat-box">
        Could you send over some pictures of your dog, please?
      </div>
      <div class="dog-images">
        <img src="/landing-page-images/chat-app-images/dog-image-1.jpg" alt="happy dog">
        <img src="/landing-page-images/chat-app-images/dog-image-2.jpg" alt="happy dog">
        <img src="/landing-page-images/chat-app-images/dog-image-3.jpg" alt="happy dog with tree branch">
      </div>
      <div class="client-chat chat-box">
        Here are a few pictures. She’s a happy girl!
      </div>
      <div class="client-chat chat-box">
        Can you make it?
      </div>
      <div class="walker-chat chat-box">
        She looks so happy! The time we discussed works. How long shall I take her out for?
      </div>
      <div class="pricing">
        <div class="walk-option">
          <label for="option1" class="radio"></label>
          <input id="option1" type="radio"/>
          30 minute walk
        </div>
        <span class="price">$29</span>
      </div>
      <div class="pricing">
        <div class="walk-option">
          <label for="option2" class="radio"></label>
          <input id="option2" type="radio"/>
          1 hour walk
        </div>
        <span class="price">$49</span>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Type a message...">
        <a href="{$page.path}" class="button" role="button">></a> 
      </div>
    </section>
    <section class="content">
      
      <h1>Simple booking</h1>
      
      <p>Stay in touch with our dog walkers through the chat chat-box interface. This makes it easy to 
        discuss arrangements and make bookings. Once the walk has been completed you can rate 
        your walker and book again all through the chat chat-box.</p>
        
      </section>
    </div>
  </div>
    <footer>
      Created from a <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> challenge.
    </footer>


<style>
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

:root {
  /* Primary */
  /* Text */
  --pale-violet: hsl(276, 100%, 81%);
  --moderate-violet: hsl(276, 55%, 52%);
  --desaturated-dark-violet: hsl(271, 15%, 43%);
  --grayish-blue: hsl(206, 6%, 79%);
  --dark-saturated-violet: hsl(271, 36%, 24%);
  --dark-grayish-violet: hsl(270, 7%, 64%);

  /* These 2 make gradient */
  --light-magenta: hsl(293, 100%, 63%);
  --light-violet: hsl(264, 100%, 61%);

  /* secondary */
  --white: hsl(0, 0%, 100%);
  --light-grayish-violet: #f5f3f7;
  --very-dark-desaturated-violet: hsl(271, 36%, 24%);
  --very-light-magenta: hsl(289, 100%, 72%);

  --box-shadow-primary: 0 3px 3px -3px hsl(266, 9%, 85%);
}

.bg-container {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;
}
section {
  width: 90%;
  max-width: 400px;
  margin-top: 3rem;
}
img {
  width: 50px;
}
.bg-shape-1 {
  background: linear-gradient(13deg, var(--light-violet), var(--light-magenta));
  border-radius: 0 0 200px 200px;
  width: 30vw;
  min-width: 300px;
  height: 50vh;
  position: fixed;
  left: -35vw;
  top:0;
}
.bg-shape-2 {
  background: var(--light-grayish-violet);
  border-radius: 200px 200px 0 0;
  height: 50vh;
  width: 30vw;
  min-width: 300px;
  position: fixed;
  right: -35vw;
  bottom: -2vh;
}
.app {
  background-color: var(--light-grayish-violet);
  border: 10px solid var(--white);
  border-radius: 30px;
  font-size: 0.5rem;
  width: 250px;
  color: var(--light-grayish-violet);
  display: flex;
  flex-direction: column;
  box-shadow: 3px 5px 15px -5px var(--dark-grayish-violet);
}
.top-case {
  position: relative;
  height: 25px;
  width: 125px;
  background: var(--white);
  border-radius: 25px;
  margin: -10px auto -15px;
  box-shadow: var(--box-shadow-primary);
  z-index: 2;
}
.walker-contact {
  background: linear-gradient(
    to right,
    var(--light-violet),
    var(--light-magenta)
  );
  border-radius: 18px 18px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 0.7rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  box-shadow: var(--box-shadow-primary);
}
.walker-contact button {
  background: transparent;
  border: none;
  font-weight: inherit;
  color: inherit;
}
.walker-contact-main {
  display: flex;
  align-items: center;
}
.sub-heading {
  color: var(--pale-violet);
  letter-spacing: 0.25px;
  font-size: 0.6rem;
  font-weight: initial;
}
.walker-contact-main * {
  margin-right: 0.5rem;
}
.walker-contact img {
  width: 25px;
  border-radius: 50px;
  border: 2px solid var(--light-grayish-violet);
}
.chat-box {
  max-width: 130px;
  padding: 0.5rem;
  margin: 0.25rem 0.5rem;
}
.walker-chat {
  color: var(--moderate-violet);
  background-color: hsl(272, 41%, 93%);
  border-radius: 10px 10px 10px 5px;
}
.dog-images {
  align-self: flex-end;
  margin-right: 0.5rem;
  margin-top: 0.7rem;
}
.dog-images img {
  border-radius: 10px;
  width: 45px;
  margin-left: 0.35rem;
}
.client-chat {
  border-radius: 10px 10px 5px 10px;
  color: var(--desaturated-dark-violet);
  background-color: hsl(0, 0%, 100%);
  align-self: flex-end;
  box-shadow: var(--box-shadow-primary);
}
.pricing {
  background: linear-gradient(13deg, var(--light-magenta), var(--light-violet));
  font-weight: 500;
  max-width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  padding-right: 1rem;
  margin: 0.25rem 0.5rem;
  border-radius: 10px 10px 10px 5px;
}
.walk-option {
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
}
.walk-option input[type="radio"] {
  display: none;
}
.radio {
  margin-right: 0.5rem;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  border: 1px solid var(--very-light-magenta);
}
.price {
  font-weight: 800;
  font-size: 0.8rem;
}
.input-box {
  margin: 0.5rem;
  position: relative;
}
.input-box input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: none;
  background: hsl(0, 0%, 100%);
}
.input-box .button {
  position: absolute;
  right: 10px;
  top: -.25rem;
  background: var(--very-dark-desaturated-violet);
  border: none;
  border-radius: 50%;
  color: var(--white);
  font-weight: 700;
  padding: 2px 4px 2px 6px;
  font-size: 1rem;
}
::placeholder {
  color: var(--grayish-blue);
  font-size: 0.5rem;
  letter-spacing: 0.5px;
}
.content {
  text-align: center;
  line-height: 1.5rem;
  color: var(--dark-grayish-violet);
}
h1 {
  color: var(--very-dark-desaturated-violet);
  margin-bottom: 1.25rem;
  font-size: 2.3rem;
  font-weight: 500;
  letter-spacing: 1px;
}
.content p {
  width: 85%;
  margin: 0 auto;
}
footer {
  margin: 2rem;
  font-size: 12px;
}
footer a{
  text-decoration: underline;
}
*{
  z-index: 1;
}
@media (min-width: 500px) {
  .bg-shape-1 {
    left: -10vw;
  }
  .bg-shape-2 {
    right: -20vw;
  }
}
@media (min-width: 750px) {
  section{
    margin-top: initial;
  }
  .bg-shape-1 {
    height: 80vh;
    left: -5vw;
  }
  .bg-shape-2 {
    height: 80vh;
    right: -5vw;
  }
  .content {
    margin-left: 5rem;
    text-align: initial;
  }
  .content p {
    width: initial;
    margin: initial;
  }
}

</style>