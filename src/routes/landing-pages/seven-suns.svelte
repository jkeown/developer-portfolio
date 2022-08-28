<script> 
  import { page } from '$app/stores'
</script>
<section class="background">
  <div class="main">
    <div class="logo">
      <img src="/landing-page-images/seven-suns-images/logo.png" alt="seven suns logo">
    </div>
    <div class="content">
      <div class="book"><img src="/landing-page-images/seven-suns-images/jumbo-book.png" alt="front cover of guide"></div>
      <div class="offer">
        <h1>Ready to get your FREE guide?</h1>
        <ul>
          <li><strong>Tips & Recommendations</strong> to make getting started easier and faster.</li>
          <li><strong>Money-saving Ideas</strong> to get the most out of limited resources and time.</li>
          <li><strong>Expert Advice</strong> to avoid the mistakes we made when we started out.</li>
        </ul>
        <a class="button" href="/landing-pages/seven-suns">GET THE GUIDE</a>
      </div>
    </div>
  </div>
  <footer>
    <p>©2020 Conceptual Company. All rights reserved.  <a href="{$page.path}" >Privacy Policy</a>  |  Created from a <a href="https://www.leadpages.com/templates/preview/PkWpvHFFwjRCTHzY846oj8">Leadpages</a> template.</p>
  </footer>
</section>

<style>
  .background{
    width: 100vw;
    background-image: url(/landing-page-images/seven-suns-images/background.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main{
    margin: 3rem 1rem;
    background: #ffffff;
  }
  .main, .content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo{
    padding: 1rem;
  }
  .logo img{
    max-width: 170px;
  }
  .book{
    max-width: 500px;
  }
  .book img{
    width: 100%;
    height: 100%;
  }
  h1{
    color: #35434a;
    font-size: 33px;
    line-height: 37px;
  }
  .offer{
    padding: 1rem 2rem;
    max-width: 600px;
  }
  .offer ul{
    padding-left: 1rem;
    padding-bottom: 1rem;
    padding-top: 1.5rem;
    list-style-type: none;
  }
  li{
    position: relative;
    color: #253237;
    font-size: 18px;
    line-height: 27px;
  }
  li:before{
    content: "\2713";
    position: absolute;
    left: -25px;
    font-weight: bold;
    font-size: 15px;
    color: #8497b6;
  }
  .button{
    font-size: 20px;
    font-weight: 700;
    line-height: 37.5px;
    padding: 14px 24px;
    color: #35434a;
    border: 1px solid #e3ca81;
    background: #e3ca81;
    margin-bottom: .5rem;
  }
  .button:hover{
    background-color: #dcc47d;
  }
  footer{
    width: 100vw;
    text-align: center;
    padding: 25px;
    background: #ffffff;
    font-size: 12px;
    line-height: 18px;
  }
  footer a{
    text-decoration: underline;
  }
  @media (min-width:850px){
    .main{
      margin: 7rem 5rem;
    }
    .content{
      flex-direction: row;
      padding: 2rem;
      align-items: flex-start;
    }
    .book{
      height: 450px;
    }
    .offer{
      max-width: 400px;
    }
    li:before{
      font-size: 30px;
    }
  }
</style>