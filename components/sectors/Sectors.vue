<template>
  <section id="sektors">
    <Sliderp />
    <div class="content content-background">
      <no-ssr>
        <section class="sidenav overflow-scroll">
          <div class="sector-link">
            <nuxt-link v-for="item in getsector" :key="item._id" :to="'#'+item.sectorname">
              <a @click="getSectorItem(item._id)">
                {{ item.sectorname }}
              </a>
            </nuxt-link>
          </div>
        </section>
        <div class="sector-container">
          <div class="title-sektor">
            <h3>{{ sectoritems.sectorname }}</h3>
          </div>
          <div class="sector-row">
            <SectorAlbum class="skCar radius-1em" />
          </div>
          <div class="sector-row sector-scroll">
            <p>
              {{ sectoritems.sectordescription }}
            </p>
            <SectorAlbum class="skCar-mobil" />

            <div class="btn-link-sector">
              <div class="sector-btn">
                <button class="btn" name="info-btn">
                  <nuxt-link to="/contact#contact-footer">
                    <span class="sector-btn-info radius-1em">
                      <a> Daha fazla bilgi al</a>
                    </span>
                  </nuxt-link>
                </button>
              </div>
              <div class="sector-btn">
                <button class="btn" name="sector-btn">
                  <nuxt-link to="/contact#contact-footer">
                    <span class="sector-btn-info radius-1em">
                      <a> Uygun ürün bul</a>
                    </span>
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </no-ssr>
    </div>
  </section>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import SectorAlbum from '@/components/sectors/SectorAlbum'
import Sliderp from '@/components/globalcomponents/shared/MobileSliderNavigation.vue'
export default {
  components: {
    SectorAlbum,
    Sliderp
  },
  data () {
    return {
      sector: {
        title: '',
        desc: ''
      },
      defaultSector: ''
    }
  },
  computed: {
    ...mapGetters({
      getsector: 'getsector',
      getASector: 'getASector',
      sectoritems: 'sectoritems',
      sectorid: 'sectorid'
    })
  },
  mounted () {
    const id = localStorage.getItem('sectorid')
    if (id !== null) {
      this.getSectorItem(id)
      localStorage.removeItem('sectorid')
    }
  },
  created () {
    this.$store.commit('setActiveSlide', 'sector')
  },
  methods: {
    ...mapActions({
      oneSector: 'oneSector'
    }),
    getSectorItem (id) {
      this.oneSector(id).then(() => {
        this.sectoropen = true
        this.sector.title = this.getASector.sectorname
        this.sector.desc = this.getASector.sectordescription
      })
    }
  }
}
</script>
<style lang="less" scoped>
.sidenav {
  margin-top: 4rem;
  height: 80%;

  // ::-webkit-scrollbar-track {
  //   margin-top: 5rem;
  // }
}

.sector-link {
  a {
    display: block;
    font-size: 1.2rem;
    //border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding-top: 1rem;
    line-height: 2.5rem;
    -webkit-transition: 1s;
    -o-transition: 1s;
    transition: 1s;
  }
  a:not(:last-child){
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  }
}

.carousel {
  margin-top: 0 !important;
}

.sector-container {
  width: 80%;
  float: left;
  //overflow-x: auto;
  padding-left: 1.5rem;
  height: 100%;
  h3 {
    text-align: center;
  }
  .sector-row {
    margin-top: 2rem;
    width: 50%;
    float: left;

    // .skCar {
    //   margin: 3rem 2rem 1rem 1rem;
    // }
    p {
      font-size: 1.1rem;
      line-height: 1.4;
      font-family: Arial;
      padding:0 1.8rem;
    }
  }
}

.carousel-sector {
  border: 1px solid;
  height: 50vh;
}

.btn-link-sector {
  width: 95%;
  text-align: center;
  margin-top: 2rem;
  font-family: Georgia;
  .sector-btn {
    width: 50%;
    float: left;
    padding: 1rem;

    .btn {
      margin-top: 1.3rem;
      text-align: center;

      .sector-btn-info {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.1rem;
        word-wrap: break-word;
        padding: 0.6rem 3rem;
        text-align: center;
        color: white;
        border: 1px solid white;
        display: block;
        width: 12rem;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
      }
    }

    .btn:hover span:hover {
      color: lightgreen;
      border-color: lightgreen;
    }
  }

}

.skCar-mobil {
  display: none;
}

.title-sektor {
  width: 30%;
  margin: auto;
}
.sector-scroll{
  height: 80%;
  overflow-x: auto;
}
</style>
