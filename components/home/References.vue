<template>
  <div class="ref-container">
    <b-carousel
      id="carousel-2"
      v-model="slide"
      :interval="4000"
    >
      <h2>Referanslarımız</h2>
      <div v-for="(ref, index) in references" :key="index.id" class="referance">
        <b-carousel-slide>
          <template v-slot:img>
            <a :href="ref.referenceUrl" target="_blank">
              <picture>
                <source :srcset="imgUrl+ref.imageUrl+'.webp'" type="image/webp">
                <source :srcset="imgUrl+ref.imageUrl" type="image/jpeg">
                <img
                  :title="ref.title"
                  class="ref-img"
                  width="500"
                  height="300"
                  alt="image slot"
                >
              </picture>
            </a>
          </template>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      browser: '',
      safari: false
    }
  },
  computed: {
    ...mapGetters({
      references: 'getReferences',
      imgUrl: 'imgUrl',
      getSafari: 'getSafari'
    })
  },
  created () {
    this.browser = this.$ua.browser()
    if (this.browser === 'Safari') {
      this.$store.commit('setSafari', true)
    }
  },
  methods: {
    safariImage (item) {
      if (this.getSafari) {
        return item
      } else {
        return item + '.webp'
      }
    }
  }
}
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
}

.carousel {
  margin-top: 0;
}

.referance h2:hover {
  color: lightgreen;
}

div.ref-container img {
  width: 100%;
  height: 13vh;
  -o-object-fit: contain;
  object-fit: contain;
}
 .ref-container{
   display: table-cell;
   vertical-align: middle;
   height: 100%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
 }
 h2 {
   font-size: .8rem;
   font-weight: 600;
   color: #fff;
   font-family: Arial, Helvetica, sans-serif;
   margin-bottom: 1rem;
 }
//  hr{
//     margin-top: .2rem;
//     margin-bottom: .3rem;
//     width: 70%;
//     display: inline-block;
//     background-color: rgba(255, 255, 255,.3 );
//  }
</style>
