<script> 
  import { page } from '$app/stores'
</script>
<section>
  <section class="background-main">
    <header>
      <img class="logo" src="/landing-page-images/huddle-images/logo.svg" alt="huddle logo">
    </header>
    <section class="main-content">
      <section class="main-image">
        <img src="/landing-page-images/huddle-images/illustration-mockups.svg" alt="desktop/mobile view illustration mockups">
      </section>
      <section class="register">
        <h1>Build the Community Your fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <a class="button" href="/">Register</a>
        <div class="icons">
          <a href="{$page.path}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffffe6" stroke="#none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          <a href="{$page.path}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffffe6" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
          <a href="{$page.path}"><svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffffe6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        </div>
      </section>
    </section>
  </section>
  <footer>
    <small>Created from a <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> challenge.</small>
  </footer>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap');

  section{
  --violet: hsl(257, 40%, 49%);
  --soft-magenta: hsl(300, 69%, 71%);
  --white: #ffffffe6;
  font-family: 'Open Sans', sans-serif;
  flex: 1;
}
header{
    padding: 2rem;
  }
  .logo{
    max-width: 150px;
  }
  .background-main{
    background-color: rgba(103, 75, 175, 0.93);
    background-image: url(/landing-page-images/huddle-images/bg-mobile.svg);
    background-repeat: no-repeat;
    background-blend-mode: screen;
    background-size: contain;
    width: 100vw;
    min-height: 100vh;
  }
  .main-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-image img{
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
  }
  .register{
    color: var(--white);
    padding: 2rem;
    line-height: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1{
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .button{
    background: var(--white);
    border-color: var(--white);
    border-radius: 25px;
    color: var(--violet);
    width: 75%;
    margin: 2rem 0;
    font-weight: 400;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.425);
    max-width: 150px;
  }
  .button:hover{
    background-color: var(--soft-magenta);
    border-color: var(--soft-magenta);
    color: var(--white);
  }
  h1, .button{
    font-family: 'Poppins', sans-serif;
  }
  .icons{
    margin-top: 2rem;
  }
  .icons svg{
    border: 1px solid var(--white);
    border-radius: 50px;
    padding: 5px;
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
  .icons svg:hover{
    border-color: var(--soft-magenta);
    fill: var(--soft-magenta);
  }
  #instagram:hover{
    fill:none;
    stroke: var(--soft-magenta);
  }
  footer{
    padding: .5rem 3rem;
    text-align: center;
  }
  footer a{
    text-decoration: underline;
  }
  @media (min-width: 600px){
    .background-main{
    padding: 2rem;
    }
  }
  @media (min-width: 800px){
    .background-main{
      background-image: url(/landing-page-images/huddle-images/bg-desktop.svg);
    }
    header{
      margin: 0 auto;
    }
    .main-content{
      flex-direction: row;
      align-items: flex-start;
      margin: 0 auto;
    }
    .main-image{
      max-width: 60%;
    }
    .register{
      align-items: flex-start;
      text-align: left;
      max-width: 40%;
      padding-left: 0;
    }
    .register h1{
      font-size: 1.75rem;
      line-height: 2.5rem;
    }
    .register p{
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .icons{
      align-self: flex-end;
    }
  }

</style>