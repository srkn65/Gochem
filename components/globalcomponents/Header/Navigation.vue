<template>
  <nav>
    <transition
      enter-class=""
      enter-active-class="animated fadeIn"
      leave-class=""
      leave-active-class="animated fadeOut"
      appear
    >
      <ul>
        <nuxt-link
          v-for="nav in navItems"
          :key="nav.id"
          :to="nav.path"
          tag="li"
          class="navli"
        >
          <a><i class="naviconshow" :class="nav.icon" /><span class="nav-text">{{ nav.label }}</span></a>
        </nuxt-link>
      </ul>
    </transition>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      navItems: [{
        label: 'Anasayfa',
        path: '/home',
        icon: 'flaticon-sydney-opera-house'
      },
      {
        label: 'Hakkımızda',
        path: '/about',
        icon: 'flaticon-info'
      },
      {
        label: 'Ürünler',
        path: '/products',
        icon: 'flaticon-product'
      },
      {
        label: 'Sektörler',
        path: '/sectors',
        icon: 'flaticon-support'
      },
      {
        label: 'Belgeler',
        path: '/portfolio',
        icon: 'flaticon-deal'
      },
      {
        label: 'Makaleler',
        path: '/blogs',
        icon: 'flaticon-content'
      },
      {
        label: 'İletişim',
        path: '/contact',
        icon: 'flaticon-mail'
      }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
nav,
ul,
li,
a {
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: center;
}

li a {
  text-align: center;

}

.navli {
  padding: 0.5rem 1rem 0.5rem 1rem;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  color: lightgreen;

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    color: lightgreen;
  }
}

li:not(:last-child) {
  border-right: 0.01rem solid white;
}
</style>
