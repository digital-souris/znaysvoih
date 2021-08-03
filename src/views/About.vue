<template>
  <div class="about">
    <div class="about__background" style="background-image: url(/img/about_bg.jpg);"></div>
    <section class="section section_about">
      <div class="about__wrapper">
        <p>
          Всем привет, нас зовут Илья Васильев и Артём<br/> Власов, мы два лучших друга из<br/> Санкт-Петербурга.<br/>
          Мы живем в России и хотим, чтобы люди знали<br/> своих выдающихся людей.
        </p>
      </div>
      <p class="about__text">
        Именно Поэтому мы создали бренд: «ZNAI_SVOIH», с помощью которого мы хотим напомнить себе и людям
        вокруг о Великих Личностях, на которых строилась история нашей страны.
      </p>
    </section>
    <section class="section section_people">
      <div class="people">
        <h2 class="people__title">Илья Васильев, основатель</h2>
        <div class="people__content">
          <div class="people__image">
            <img src="/img/people1.jpg" alt="Илья Васильев, основатель ">
          </div>
          <div class="people__text">
            <p>
              Именно Поэтому мы создали бренд: «ZNAI_SVOIH», с помощью которого мы хотим напомнить себе
              и людям вокруг о Великих Личностях, на которых строилась история нашей страны.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section_people">
      <div class="people">
        <h2 class="people__title">Артём Власов, основатель </h2>
        <div class="people__content people__content_reverse">
          <div class="people__image">
            <img src="/img/people2.jpg" alt="Илья Васильев, основатель ">
          </div>
          <div class="people__text people__text_reverse">
            <p>
              Именно Поэтому мы создали бренд: «ZNAI_SVOIH», с помощью которого мы хотим напомнить себе
              и людям вокруг о Великих Личностях, на которых строилась история нашей страны.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'About'
  }
</script>
<style lang="scss" scoped>
  .about__background {
    min-height: 692px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width:992px) {
      min-height: auto;
      &::before {
        position: relative;
        display: block;
        content: '';
        padding-top: 50%;
      }
    }
  }
  .about {
    &__text {
      max-width: 802px;
      margin: 0 auto;
      font-size: 24px;
      font-weight: 500;
      color: #000;
      position: relative;
      top: -64px;
      @media screen and (max-width:992px) {
        top: 0;
        padding: 20px;
      }
    }
    &__wrapper {
      min-height: 384px;
      position: relative;
      top: -124px;
      max-width: 983px;
      width: 100%;
      margin: 0 auto;
      background-image: url(/img/about_rect.png);
      padding-top: 72px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding-left: 91px;
      padding-bottom: 37px;
      font-size: 36px;
      font-weight: 500;
      color: #000;
      //padding-right: 109px;
      @media screen and (max-width:992px) {
        font-size: 24px;
        background: #D4B6BA;
        top: 0;
        min-height: auto;
        padding: 20px;
      }
      p {
        margin: 0;
        max-width: 774px;
      }
    }
  }
  .section_people {
    min-height: 743px;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/img/about_item.jpg);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    margin-bottom: 67px;
    @media screen and (max-width:992px) {
      min-height: auto;
      padding: 24px 10px 10px;
      margin-bottom: 32px;
    }
  }
  .people {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    &__content {
      display: flex;
      align-items: flex-start;
      position: relative;
      &_reverse {
        flex-direction: row-reverse;
      }
      @media screen and (max-width:992px) {
        flex-direction: column;
      }
    }
    &__title {
      padding-left: 51px;
      font-size: 36px;
      font-weight: 500;
      margin: 0;
      color: #000;
      padding-bottom: 22px;
      @media screen and (max-width:992px) {
        padding-left: 0;
      }
    }
    &__image {
      max-width: 647px;
      @media screen and (max-width:992px) {
        margin: 0 auto;
      }
    }
    img {
      max-width: 100%;
      vertical-align: top;
    }
    &__text {
      min-height: 436px;
      padding: 48px 108px;
      background-color: #fff;
      position: absolute;
      top: 0;
      max-width: 764px;
      left: 50%;
      transform: translateX(-15%);
      @media screen and (max-width:1170px) {
        left: auto;
        right: 0;
        transform: translateX(0);
        max-width: 550px;
        padding: 24px 52px;
      }
      &_reverse {
        left: auto;
        right: 50%;
        transform: translateX(15%);
        @media screen and (max-width:1170px) {
          left: 0;
          right: auto;
          transform: translateX(0);
        }
      }
      @media screen and (max-width:1170px) {
        min-height: auto;
      }
      @media screen and (max-width:992px) {
        position: relative;
        max-width: 647px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 100%;
      }
      @media screen and (max-width:768px) {
        padding: 20px;
      }
      p {
        font-size: 36px;
        margin: 0;
        color: #000;
        font-weight: 500;
        max-width: 515px;
        @media screen and (max-width:1170px) {
          font-size: 24px;
        }
      }
    }
  }
</style>
