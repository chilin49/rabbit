<template>
  <div id="app">
    <app-header></app-header>
    <transition name="welcome">
      <b-alert class="b-alert-welcome" variant="success" :show="welcomeModalSec" @dismissed="welcomeModalSec=0">
        歡迎來到兔兔加密貨幣交易網
      </b-alert>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
  created() {
    setTimeout(() => {
      this.welcomeModalSec = 2;
    }, 500);
  },
  data() {
    return {
      welcomeModalSec: 0,
    };
  },
};
</script>

<style>
@import '~@/assets/scrollbar.css';

/* Element */
ul {
  padding: 0;
  margin: 0;
}
ul, li {
  list-style-type: none;
}
button {
  cursor: pointer;
}
select {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Bootstrap element */
.b-alert {
  position: fixed;
  right: 3vw;
  top: 8vh;
}
.b-alert-welcome {
  position: fixed;
  left: 3vw;
  top: 8vh;
}

/* Color */
.bg-dark {
  background-color: #444;
}
.c-white {
  color: #DDD;
}

/* Custom */
.bt-dash {
  padding: 5px 20px;
  border: 1px dashed #777;
  cursor: pointer;
}

/* Layout */
.flex {
  display: flex;
}
.v-center {
  align-items: center;
  align-content: center;
}
.h-center {
  justify-content: center;
}
.self-right {
  margin-left: auto;
}
.self-center {
  margin: 0 auto;
}

/* Animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.slide-enter-active, .fade-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: all 0.3s
}
.slide-enter, .fade-leave-to {
  transform: translateY(1.5em);
  opacity: 0
}
.welcome-enter-active {
  animation: bounce 0.8s;
}
@keyframes bounce {
  0% {
    transform: translateY(-1em);
  }
  25% {
    transform: translateY(1em);
  }
  50% {
    transform: translateY(-0.5em);
  }
  75% {
    transform: translateY(0.5em);
  }
  100% {
    transform: translateY(0);
  }
}
.flip-list-move {
  transition: transform 1s;
}
</style>
