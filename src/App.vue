<template>
  <div class="box">
      <div class="nav">
          <router-link to="/red">Red</router-link>
          <router-link to="/yellow">Yellow</router-link>
          <router-link to="/green">Green</router-link>
      </div>
    <router-view></router-view>
    <div class="timer">
      <span>Осталось: {{ timer }} c.</span>
    </div>
  </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            name: this.$route.path,
            routes: [
              {url: '/red', time: 10000},
              {url: '/yellow', time: 3000},
              {url: '/green', time: 15000},
              {url: '/yellow', time: 3000},
            ],
            routeIndex: 0,
            timer: 0,
            count: 0,
        }
    },
    methods: {
      changeColor() {
        if (this.count === this.routes.length) {
          this.count = 0;
        }
        this.timer = this.routes[this.count].time / 1000;
        setInterval(()=> {
            this.timer--
        }, this.timer * 1000)
        this.$router.push({path: this.routes[this.count].url}).catch(err => {})
        setTimeout(this.changeColor, this.routes[this.count].time)
        this.count = this.count + 1;
      }
    },
    beforeMount() {
      this.changeColor()
    }
}
</script>
<style lang="scss">
 body {
    background: darkslategray;
    height: 100vh;
    margin: 0;
    padding: 20px;
    .box {
        height: 100%;
        .nav a{
          font-size: 18px;
          color: #fff;
          text-decoration: none;
        }
    }
  }

  .traffic-light {
    width: 70px;
    height: 240px;
    background: #222;
    border-radius: 8px;
    margin: auto;
    padding: 15px;
    .light {
          display: inline-block;
          border-radius: 100%;
          width: 70px;
          height: 70px;
          margin-bottom: 8px;
          opacity: 0.2;
          transition: opacity 0.2s
    }
      .red {
      background: red;
    }
      .yellow {
        background: yellow;
    }
      .green {
        background: limegreen;
    }
    .active {
      opacity: 1;
    }
  }
</style>