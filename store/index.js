import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      slideSets: [
        {
          index: 1,
          imageUrl: require('../assets/img/bg1.jpg'),
          header: 'Doğa Dostu Üretim',
          content: ' Sürdürülebilir bir gelecek için daha yaşanabilir bir dünya hedefi doğrultusunda hareket eden Zorluteks, doğa dostu akıllı üretim teknolojileri, etkin enerji yönetimi ve geri dönüşüm uygulamalarının yanı sıra 11 ton siyah boya geri kazanımı ve dünya ortalamalarının çok üzerinde su tasarrufu ile doğayı korumaya katkı sağlıyor. Şirket ayrıca, katı atıklarının yüzde 90’nını da geri dönüşüm ile yeniden değerlendiriyor..'
        },
        {
          index: 2,
          imageUrl: require('../assets/img/bg2.jpg'),
          header: 'Uzman Üretim kadrosu.',
          content: ' Corona virüsü nedeniyle 1 haftalık tatil yapan öğrenciler yarından itibaren uzaktan eğitime geçiyor. Milli Eğitim Bakanlığı konuyla ilgili detaylı bir açıklama yaparak TRT EBA TV (ilkokul-ortaöğretim-lise) uydu frekans bilgilerini paylaştı. MEB aynı zamanda TRT EBA TV kurulumu nasıl yapılır? sorusuna da cevap verdi..'
        },
        {
          index: 3,
          imageUrl: require('../assets/img/bg3.jpg'),
          header: 'Silikonda Çözüm ortağınız',
          content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
        }
      ],
      slideIndex: 0,
      references: [
        {
          id: 1,
          name: 'lanista',
          photo: require('../assets/img/beyaz.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista'
        },
        {
          id: 2,
          name: 'referansımız',
          photo: require('../assets/img/whitelogo.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'linke git'
        },
        {
          id: 3,
          name: 'son durum',
          photo: require('../assets/img/coloredlogo.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista sitesine git'
        },
        {
          id: 4,
          name: 'slogann',
          photo: require('../assets/img/play-button.png'),
          webLink: 'https://www.lanista.com.tr/',
          title: 'lanista.com.tr'
        }
      ],
      customSlideIndex: null,
      aboutUs:
        {
          ownername: 'Gökhan Özenoğlu',
          profileImg: require('./../assets/img/profile.jpg'),
          company: 'Gochem Silikon',
          title: 'Yönetim Kurulu Başkanı',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat natus praesentium, aliquam aperiam quas eligendi similique tenetur, dicta illum reprehenderit nihil error enim. Nobis voluptas et similique vel! Fugit asperiores illo nemo quia, excepturi totam eos modi, maiores expedita, ipsum incidunt iusto! Ullam, magni accusantium? Voluptas qui quis quasi, iste et suscipit a alias velit quidem magnam, facere dolorem, beatae dignissimos! Totam quo consectetur provident, quis ad odit placeat impedit. Soluta obcaecati neque, et veniam iure rerum voluptate reiciendis commodi hic eligendi atque, aperiam deserunt ullam eum id ut. Dolor omnis aliquam illum perferendis ad hic laboriosam nesciunt provident!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam optio nam eveniet vitae voluptate explicabo tempora asperiores, voluptas vel dignissimos nesciunt necessitatibus! Illum, sed animi! Repellat, non odit voluptas, consequatur nulla iste reiciendis accusantium nihil omnis harum nesciunt possimus molestiae odio quo. Quia, est distinctio omnis repellendus quibusdam suscipit voluptates labore aliquam nobis beatae voluptatem veniam dolor, minus dolores. Repellendus delectus distinctio rerum quisquam? Illum expedita eaque atque excepturi veritatis fugiat molestias maiores voluptates corrupti facilis, repellendus eius aperiam esse commodi illo? Eligendi vero consequatur officia similique? Est, impedit. Reprehenderit neque pariatur aperiam eius? Iusto deleniti sit consequuntur eos quas? Aliquid culpa facilis provident temporibus dignissimos laudantium hic facere magni tenetur! Ducimus rerum voluptatem tempora tempore labore sit velit deserunt animi odio consequatur iste et ut voluptas aliquam incidunt vel ratione nostrum sapiente recusandae obcaecati, quam quis! Assumenda, ipsum aperiam? Animi facilis iure alias earum, cum, ullam numquam at natus quam, sunt rerum voluptatibus doloremque officia in fugit dolores. Sapiente ratione modi minus quis ducimus? Cupiditate veritatis voluptate facere officia eveniet nulla delectus sint alias impedit dolor officiis repudiandae ex cum, vel in ipsum porro accusamus ut quasi.',
          autograph: require('../assets/img/beyaz.png')
        }
    }),
    mutations: {
      setSlideSets (state, slide) {
        state.slideSets = slide
      },
      setSlideIndex (state, index) {
        state.slideIndex = index
      },
      setReferences (state, reference) {
        state.referance = reference
      },
      changeSlideIndex (state, customSlideIndex) {
        state.customSlideIndex = customSlideIndex
      },
      setAboutUs (state, about) {
        state.aboutUs = about
      }
    },
    actions: {
      addReferences (vuexContext, reference) {
        vuexContext.commit('setReferance', reference)
      },
      addAbout (vuexContext, about) {
        vuexContext.commit('setAboutUs', about)
      }
    },
    getters: {
      getSlideSets (state) {
        return state.slideSets
      },
      getSlideIndex (state) {
        return state.slideIndex
      },
      getReferences (state) {
        return state.references
      },
      getCustomIndex (state) {
        return state.customSlideIndex
      },
      getAboutUs (state) {
        return state.aboutUs
      }
    }
  })
}
export default createStore
