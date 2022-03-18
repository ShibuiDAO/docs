<!--
Copyright (c) 2021 - Rari Capital - https://github.com/Rari-Capital/docs/blob/a509ad62ffdc83bfb0d491fc809f7276455eb067/src/.vuepress/components/Home.vue

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall 
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
-->

<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      />

      <h1 v-if="data.heroText !== null" id="main-title">
        Shibui
      </h1>

      <h2>General information</h2>

      <a class="action-button" href="/organisation/"><u>Organisation</u> Info</a>

      <h2>Developer Documentation</h2>

      <a class="action-button" href="/nft/"><u>NFT Marketplace</u> Docs</a>
      <a class="action-button" href="/nova/"><u>Nova</u> Docs</a>
      <br />
      <a class="action-button" href="/contracts/"><u>Deployed Contracts</u></a>
      <br />
      <a class="action-button" href="https://docs.shibuidao.com/discord">
        Get help on <u>Discord</u>
      </a>
      <a class="action-button" href="https://docs.shibuidao.com/twitter">
        Contact us on <u>Twitter</u>
      </a>
      <a class="action-button" href="https://docs.shibuidao.com/github">
        Contribute on <u>Github</u>
      </a>
    </header>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
