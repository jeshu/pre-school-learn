<template>
  <header class="header">
    <div class="header__logo">
      <span class="header__logo--highlight">CMB</span> Learn
    </div>
    <div class="header__navbar_menu-button" @click="onMenuClick">Menu</div>
    <nav :class="`header__navbar ${isMenuOpen?'header__navbar--visible':''}`">
      <ul class="header__navbar__menu">
        <li class="header__navbar__menu__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="header__navbar__menu__item">
          <router-link to="/about">about</router-link>
        </li>
        <li v-if="$auth.isAuthenticated" class="header__navbar__menu__item">
          <router-link to="/profile">profile</router-link>
        </li>
        <li class="header__navbar__menu__item">
          <router-link to="/contact">contact</router-link>
        </li>
        <li class="header__navbar__menu__item">
          <a href="void" @click.prevent="" to="/contact">setting</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: "NavBar",
  data: () => {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    onMenuClick() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    showSettings() {
      this.onMenuClick();
    }
  }
};
</script>

<style lang="scss">
.router-link-exact-active {
  color: #ff6600;
}

.header {
  background: #333333;
  color: #fdfdfd;
  height: 3.5rem;
  position: sticky;
  width: 100%;
  top: 0;

  &__logo {
    float: left;
    margin: 0.25rem 0.5rem;
    max-height: 3rem;
    color: #fdfdfd;
    font-size: 1.5rem;
    line-height: 3rem;
    &--highlight {
      color: #ff6600;
    }
  }

  &__navbar {
    float: right;
    &_menu-button {
      display: none;
    }

    &__menu {
      margin: 0px;
    }

    &__menu__item {
      display: inline-block;
      a {
        display: inline-block;
        padding: 0.5rem;
        height: 1.5rem;
        margin: 0.5rem;
        line-height: 1.5rem;
        color: #fdfdfd;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 200;
      }

      .router-link-exact-active {
        color: #ff6600;
      }
    }
  }
}

@media screen and (max-width: 440px) {
  .header {
    &__navbar {
      width: 100%;
      background-color: #333333;
      display: none;

      &_menu-button {
        height: 2rem;
        line-height: 2rem;
        padding: 0px 10px;
        background: #ff6600;
        color: #fdfdfd;
        margin: 10px;
        display: block;
        float: right;
      }

      &__menu {
        width: 100%;
        top: 3.5rem;
        padding: 0px;
        margin: 0px;
        background-color: #3f3f3f;
        color: #fdfdfd;

        &__item {
          text-align: center;
          display: block;
          border-bottom: #666666 solid 1px;

          a {
            width: 100%;
            margin: 0.5rem 0px;
            padding: 0.5rem 0px;
          }
        }
      }
      &--visible {
        display: block;
        position: absolute;
        top: 3.5rem;
      }
    }
  }
}
</style>