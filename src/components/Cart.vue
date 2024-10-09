<template>
  <div id="app">
    <div
      id="slider"
      @touchstart="startTouch"
      @touchmove="moveTouch"
      @touchend="endTouch"
    >
      <input type="radio" name="slider" id="slide1" v-model="currentSlide" value="0" checked />
      <input type="radio" name="slider" id="slide2" v-model="currentSlide" value="1" />
      <input type="radio" name="slider" id="slide3" v-model="currentSlide" value="2" />
      <input type="radio" name="slider" id="slide4" v-model="currentSlide" value="3" />

      <div id="slides">
        <div id="overflow">
          <div class="inner" :style="sliderStyle">
            <img v-for="(img, index) in images" :key="index" :src="img" />
          </div>
        </div>
      </div>

      <div class="labels">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
        <label for="slide4"></label>
      </div>
    </div>

    <p>
      Vue.js implements WebComponent-compliant &lt;content&gt; insertion point mechanism.
    </p>
    <p>
      Markup and CSS borrowed from <a href="http://css-tricks.com/modular-future-web-components/" target="_blank">CSS Tricks</a>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0,
      currentSlide: 0,
      images: [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg'
      ]
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
        transition: 'transform 0.5s ease'
      };
    }
  },
  methods: {
    startTouch(event) {
      this.startX = event.touches[0].clientX;
    },
    moveTouch(event) {
      event.preventDefault(); // Prevent default scrolling
    },
    endTouch(event) {
      const endX = event.changedTouches[0].clientX;
      const diffX = this.startX - endX;

      if (diffX > 50) {
        this.nextSlide(); // Swiped left
      } else if (diffX < -50) {
        this.prevSlide(); // Swiped right
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f4f4f4;
}

#slider {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  border: 2px solid #ccc;
}

.inner {
  display: flex;
}

img {
  width: 100%;
  display: block;
}

input[type="radio"] {
  display: none; /* Hide radio buttons */
}

.labels {
  display: none; /* Hide labels */
}

p {
  margin-top: 20px;
}
</style>
