<template>
  <header id="header" class="main-header" :class="{'scrolled': $checkScroll.scrolled}">
    <logo />
    <main-menu v-if="$mq.breakpoint.lgAndUp"/>
    <!-- <transparent-button variant="dark">
      ПОКАЗАТИ МЕНЮ
    </transparent-button> -->

    <div class="phone-block">
      <a href="tel:380969045349">
        <span>
          <img svg-inline src="@/assets/home/phone.svg" alt="">
        </span>
        + 38 (096) 904 53 49
        </a>
    </div>
  </header>
</template>

<script>
import Logo from '@/layouts/components/Logo.vue'
import MainMenu from '@/layouts/components/Menu.vue'
import TransparentButton from '@/components/TransparentButton.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    MainMenu,
    TransparentButton
  }
}
</script>

<style lang="scss" scoped>
  header {
    padding: 5px 35px;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    display: flex;
    padding-bottom: 5px;
    box-shadow: 0 2px 13px 3px rgba(0, 0, 0, 0.07);
    align-items: center;
    transition: all 0.2s;
    justify-content: space-between;
    height: 90px;
    z-index: 1000;

    /deep/ .logo-container {
      transform: scale(0.7);
    }

    &.scrolled {
      height: 70px;

      /deep/ .logo-container {
      transform: scale(0.6);
    }
    }
  }

  .phone-block {
    
    svg {
      width: 20px;
      height: auto;
      fill: #4d5772;
      // animation-name: trigger;
      animation: trigger 3500ms infinite;
      position: relative;
      // animation-duration: 0.8pxs;
      // animation-timing-function: ease-in-out;
      // animation-iteration-count: infinite;
    }

    span {
      display: block;
      position: relative;
      margin-right: 15px;

      &:before {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background: rgba(#000, 0.2);
        position: absolute;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: shadow 3500ms infinite;
        box-shadow:
      0 0 0 0em rgba(#3498db, 0),
      0em 0.05em 0.1em rgba(#000000, 0.2);
      }
    }

    a {
      display: flex;
      align-items: center;
      color: #4d5772;
    }
  }

  @keyframes trigger {
    2% { transform: translate(0.8px, 0)  }
    4% { transform: translate(-0.8px, 0)   }
    6% { transform: translate(0.8px, 0)   }
    8% { transform: translate(-0.8px, 0)   }
    10% { transform: translate(0.8px, 0)   }
    12% { transform: translate(-0.8px, 0)  }
    14% { transform: translate(0.8px, 0)   }
    16% { transform: translate(-0.8px, 0)  }
    18% { transform: translate(0.8px, 0)  }
    20% { transform: translate(-0.8px, 0)   }
    22% { transform: translate(0.8px, 0)   }
    24% { transform: translate(-0.8px, 0)   }
    26% { transform: translate(0.8px, 0)   }
    28% { transform: translate(-0.8px, 0)  }
    30% { transform: translate(0.8px, 0)   }
    31% { transform: translate(0, 0)  }
  }

  @keyframes shadow {
    2% { transform: translate(-50%, -50%) scale(1.1) }
    10% { transform: translate(-50%, -50%) scale(1.5)   }
    15% { transform: translate(-50%, -50%) scale(1.3)   }
    25% { transform: translate(-50%, -50%) scale(1.8);
    opacity: 0.3;
    }
    31% {transform: translate(-50%, -50%) scale(0.5)  }
  }

  @media screen and (max-width: 1200px){
    header {
      padding: 5px 10px;
    }

    .phone-block {
      a {
        font-size: 12px;
      }

      svg {
        width: 15px;
        height: 15px;
      }
    }
  } 
</style>