<template>
  <v-layout>
    <v-flex lg10 md10 xs10 sm10 offset-sm1>
      <v-card style="margin-top:60px;">
        <h1 class="text-lg-center text-md-center text-sm-center text-xs-center">{{header}}
          <!-- <v-card-title >{{header}}</v-card-title> -->
        </h1>
        <!-- <v-btn color="primary" @click="pressed()">Button</v-btn> -->
        <!-- <v-card-media :src="image" height="480px">
                  </v-card-media> -->
        <div class="conf-cont">
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <div class="confetti"></div>
          <v-card-media :src="image" height="560px">
          </v-card-media>
        </div>
        <!-- <v-card-title class="headline"></v-card-title> -->
        <!-- <v-parallax :src="image" height="300"></v-parallax> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  // import DeleteUser from "./DeleteUser";
  export default {
    data() {
      return {
        header: "CSHA Survey Complete",
        image: "https://uicradio.files.wordpress.com/2014/01/adventure-time-finn-and-jake-high-five.jpg"
      };
    },
    created() {
      try {
        // this.fetch();
        // this.message;
        // this.count;
      } catch (error) {
        console.error(error);
      }
    },
    // components: {
    //   DeleteUser
    // },
    computed: {
      message() {
        // return console.log(this.$store.state.message);
        return console.log(this.$store.getters.message);
      },
      count() {
        return console.log(this.$store.getters.counter);
      }
    },
    methods: {
      pressed() {
        // /* accessing mutations */
        // this.$store.commit("increment", 10);
        // /* accessing actions */
        this.$store.dispatch("actIncrement", 20);
        this.$store.dispatch("getFetch");
      },
      async fetch() {
        try {
          const response = await fetch(
            "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha"
          );
          const data = await response.json();
          console.log("It worked! ", data);
          this.items = data;
          return;
        } catch (error) {
          throw new Error(err);
        }
      }
    }
  };
</script>

<style scoped>
   :root {
    --display: 100%;
  }
  /* .layout {
    display: flex;
  } */
  h1 {
    font-family: monospace;
  }
  @media (min-width:320px) {
    .flex.xs10 {
      max-width: var(--display);
    }
    .flex.offset-sm1 {
      margin-left: 0;
    }
  }
  @media (min-width:480px) {
    .flex.xs10 {
      max-width: var(--display);
    }
    .flex.offset-sm1 {
      margin-left: 0;
    }
  }
  /* @media (min-width:600px) {
      .flex.xs10 {
        max-width: var(--display);
      }
    } */
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  .conf-cont {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .confetti {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #f00;
    opacity: 0.0;
    -webkit-animation-name: fallsway;
    animation-name: fallsway;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-fill-mode: none;
    animation-fill-mode: none;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }
  .confetti:nth-child(1) {
    z-index: 1;
    -webkit-animation-name: fallsway1;
    animation-name: fallsway1;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    background-color: #c4cf96;
  }
  .confetti:nth-child(2) {
    z-index: 2;
    -webkit-animation-name: fallsway2;
    animation-name: fallsway2;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    background-color: #49a85b;
  }
  .confetti:nth-child(3) {
    z-index: 3;
    -webkit-animation-name: fallsway3;
    animation-name: fallsway3;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    background-color: #0980af;
  }
  .confetti:nth-child(4) {
    z-index: 4;
    -webkit-animation-name: fallsway4;
    animation-name: fallsway4;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    background-color: #cefb06;
  }
  .confetti:nth-child(5) {
    z-index: 5;
    -webkit-animation-name: fallsway5;
    animation-name: fallsway5;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background-color: #bb06e1;
  }
  .confetti:nth-child(6) {
    z-index: 6;
    -webkit-animation-name: fallsway6;
    animation-name: fallsway6;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
    background-color: #8c5a5d;
  }
  .confetti:nth-child(7) {
    z-index: 7;
    -webkit-animation-name: fallsway7;
    animation-name: fallsway7;
    -webkit-animation-delay: 1.4s;
    animation-delay: 1.4s;
    background-color: #bc1b56;
  }
  .confetti:nth-child(8) {
    z-index: 8;
    -webkit-animation-name: fallsway8;
    animation-name: fallsway8;
    -webkit-animation-delay: 1.6s;
    animation-delay: 1.6s;
    background-color: #c3a8ea;
  }
  .confetti:nth-child(9) {
    z-index: 9;
    -webkit-animation-name: fallsway9;
    animation-name: fallsway9;
    -webkit-animation-delay: 1.8s;
    animation-delay: 1.8s;
    background-color: #3c591b;
  }
  .confetti:nth-child(10) {
    z-index: 10;
    -webkit-animation-name: fallsway10;
    animation-name: fallsway10;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    background-color: #650e6e;
  }
  .confetti:nth-child(11) {
    z-index: 11;
    -webkit-animation-name: fallsway11;
    animation-name: fallsway11;
    -webkit-animation-delay: 2.2s;
    animation-delay: 2.2s;
    background-color: #7339d8;
  }
  .confetti:nth-child(12) {
    z-index: 12;
    -webkit-animation-name: fallsway12;
    animation-name: fallsway12;
    -webkit-animation-delay: 2.4s;
    animation-delay: 2.4s;
    background-color: #7659a2;
  }
  .confetti:nth-child(13) {
    z-index: 13;
    -webkit-animation-name: fallsway13;
    animation-name: fallsway13;
    -webkit-animation-delay: 2.6s;
    animation-delay: 2.6s;
    background-color: #f5bdac;
  }
  .confetti:nth-child(14) {
    z-index: 14;
    -webkit-animation-name: fallsway14;
    animation-name: fallsway14;
    -webkit-animation-delay: 2.8s;
    animation-delay: 2.8s;
    background-color: #5be6a6;
  }
  .confetti:nth-child(15) {
    z-index: 15;
    -webkit-animation-name: fallsway15;
    animation-name: fallsway15;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    background-color: #f13c5d;
  }
  .confetti:nth-child(16) {
    z-index: 16;
    -webkit-animation-name: fallsway16;
    animation-name: fallsway16;
    -webkit-animation-delay: 3.2s;
    animation-delay: 3.2s;
    background-color: #52bfc0;
  }
  .confetti:nth-child(17) {
    z-index: 17;
    -webkit-animation-name: fallsway17;
    animation-name: fallsway17;
    -webkit-animation-delay: 3.4s;
    animation-delay: 3.4s;
    background-color: #aa731c;
  }
  .confetti:nth-child(18) {
    z-index: 18;
    -webkit-animation-name: fallsway18;
    animation-name: fallsway18;
    -webkit-animation-delay: 3.6s;
    animation-delay: 3.6s;
    background-color: #9ab5ad;
  }
  .confetti:nth-child(19) {
    z-index: 19;
    -webkit-animation-name: fallsway19;
    animation-name: fallsway19;
    -webkit-animation-delay: 3.8s;
    animation-delay: 3.8s;
    background-color: #2c69d1;
  }
  .confetti:nth-child(20) {
    z-index: 20;
    -webkit-animation-name: fallsway20;
    animation-name: fallsway20;
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
    background-color: #cd8e60;
  }
  @-webkit-keyframes fallsway1 {
    0% {
      top: -5%;
      left: 91%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 74%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway1 {
    0% {
      top: -5%;
      left: 91%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 74%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway2 {
    0% {
      top: -5%;
      left: 85%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 63%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 92%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway2 {
    0% {
      top: -5%;
      left: 85%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 63%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 92%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway3 {
    0% {
      top: -5%;
      left: 38%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 80%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 88%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway3 {
    0% {
      top: -5%;
      left: 38%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 80%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 88%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway4 {
    0% {
      top: -5%;
      left: 27%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 52%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway4 {
    0% {
      top: -5%;
      left: 27%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 52%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway5 {
    0% {
      top: -5%;
      left: 58%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 42%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 50%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway5 {
    0% {
      top: -5%;
      left: 58%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 42%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 50%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway6 {
    0% {
      top: -5%;
      left: 33%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 44%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway6 {
    0% {
      top: -5%;
      left: 33%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 44%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 67%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway7 {
    0% {
      top: -5%;
      left: 6%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 34%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 44%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway7 {
    0% {
      top: -5%;
      left: 6%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 34%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 44%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway8 {
    0% {
      top: -5%;
      left: 40%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 22%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 94%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway8 {
    0% {
      top: -5%;
      left: 40%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 22%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 94%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway9 {
    0% {
      top: -5%;
      left: 53%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 18%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 33%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway9 {
    0% {
      top: -5%;
      left: 53%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 18%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 33%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway10 {
    0% {
      top: -5%;
      left: 68%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 49%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 93%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway10 {
    0% {
      top: -5%;
      left: 68%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 49%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 93%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway11 {
    0% {
      top: -5%;
      left: 66%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 63%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 20%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway11 {
    0% {
      top: -5%;
      left: 66%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 63%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 20%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway12 {
    0% {
      top: -5%;
      left: 87%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 71%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 42%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway12 {
    0% {
      top: -5%;
      left: 87%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 71%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 42%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway13 {
    0% {
      top: -5%;
      left: 52%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 74%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 32%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway13 {
    0% {
      top: -5%;
      left: 52%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 74%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 32%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway14 {
    0% {
      top: -5%;
      left: 84%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 75%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 8%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway14 {
    0% {
      top: -5%;
      left: 84%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 75%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 8%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway15 {
    0% {
      top: -5%;
      left: 78%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 40%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 92%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway15 {
    0% {
      top: -5%;
      left: 78%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 40%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 92%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway16 {
    0% {
      top: -5%;
      left: 80%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 55%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 22%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway16 {
    0% {
      top: -5%;
      left: 80%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 55%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 22%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway17 {
    0% {
      top: -5%;
      left: 72%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 43%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 8%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway17 {
    0% {
      top: -5%;
      left: 72%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 43%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 8%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway18 {
    0% {
      top: -5%;
      left: 93%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 29%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 76%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway18 {
    0% {
      top: -5%;
      left: 93%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 29%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 76%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway19 {
    0% {
      top: -5%;
      left: 44%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 25%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 88%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway19 {
    0% {
      top: -5%;
      left: 44%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 25%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 88%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway20 {
    0% {
      top: -5%;
      left: 2%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 43%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 25%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @keyframes fallsway20 {
    0% {
      top: -5%;
      left: 2%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    25% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    50% {
      left: 43%;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
    75% {
      left: 100% -random(105);
      -webkit-transform: skew(30deg);
      transform: skew(30deg);
    }
    100% {
      top: 100%;
      left: 25%;
      opacity: 1.0;
      -webkit-transform: skew(-30deg);
      transform: skew(-30deg);
    }
  }
  @-webkit-keyframes fallsway {
    0% {
      top: -10%;
      left: 36%;
      opacity: 1.0;
    }
    25% {
      left: 42%;
    }
    50% {
      left: 55%;
    }
    75% {
      left: 89%;
    }
    100% {
      top: 110%;
      left: 50%;
      opacity: 1.0;
    }
  }
  @keyframes fallsway {
    0% {
      top: -10%;
      left: 36%;
      opacity: 1.0;
    }
    25% {
      left: 42%;
    }
    50% {
      left: 55%;
    }
    75% {
      left: 89%;
    }
    100% {
      top: 110%;
      left: 50%;
      opacity: 1.0;
    }
  }
</style>
