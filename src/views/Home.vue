<template>
  <div class="dash-board" :class="mode ? 'light' : 'dark'">
    <div class="bg-top"></div>
    <div class="container">
      <div class="social-total">
        <div class="top flex">
          <div class="left">
            <h2>Social Media Dashboard</h2>
            <p>Total Followers: 23,004</p>
          </div>
          <div class="right flex">
            <div class="toggle">
              <span v-if="!mode">Dack Mode</span>
              <span v-else>Light Mode</span>
              <input class="checkbox" type="checkbox" v-model="mode" />
            </div>
          </div>
        </div>
        <div class="cards">
          <total-card
            v-for="(item, index) in totalSocail"
            :key="index"
            :social="item"
          />
        </div>
      </div>
      <div class="social-today">
        <h2>Overview - Today</h2>
        <div class="cards">
          <today-card
            v-for="(item, index) in totalTodaySocail"
            :key="index"
            :overview="item"
          />
        </div>
      </div>
    </div>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://www.instagram.com/nguyen_long1214/">Drake</a>.
    </div>
  </div>
</template>

<script>
import TodayCard from "../components/TodayCard.vue";
import TotalCard from "../components/TotalCard.vue";
export default {
  name: "Home",
  components: { TotalCard, TodayCard },
  data() {
    return {
      mode: false,
      totalSocail: [
        {
          name: "@nathanf",
          totalFollower: 1987,
          date: 12,
          icon: "icon-facebook",
          social: "facebook",
          rate: "up",
        },
        {
          name: "@nathanf",
          totalFollower: 1044,
          date: 99,
          icon: "icon-twitter",
          social: "twitter",
          rate: "down",
        },
        {
          name: "@nathanf",
          totalFollower: 8239,
          date: 144,
          icon: "icon-instagram",
          social: "instagram",
          rate: "up",
        },
        {
          name: "@nathanf",
          totalFollower: 11000,
          date: 99,
          icon: "icon-youtube",
          social: "youtube",
          rate: "up",
        },
      ],
      totalTodaySocail: [
        {
          title: "Page views",
          total: 87,
          percent: 3,
          rate: "up",
          icon: "icon-facebook",
        },
        {
          title: "Likes",
          total: 52,
          percent: 2,
          rate: "up",
          icon: "icon-facebook",
        },
        {
          title: "Likes",
          total: 5462,
          rate: "up",
          percent: 200,
          icon: "icon-instagram",
        },
        {
          title: "Profile Views",
          total: 52000,
          rate: "up",
          percent: 1375,
          icon: "icon-instagram",
        },

        {
          title: "Retweets",
          total: 117,
          rate: "up",
          percent: 303,
          icon: "icon-twitter",
        },
        {
          title: "Likes",
          total: 507,
          rate: "down",
          percent: 505,
          icon: "icon-twitter",
        },

        {
          title: "Likes",
          total: 107,
          percent: 10,
          rate: "down",
          icon: "icon-youtube",
        },
        {
          title: "Total Views",
          total: 1407,
          percent: 12,
          rate: "down",
          icon: "icon-youtube",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.light {
  background-color: #ffffff !important;
  .bg-top {
    background-color: #f5f7ff !important;
  }
  .container {
    p {
      color: #63687e !important;
    }
    span {
      color: #63687e !important;
    }
    .social-total {
      color: #1e202a !important;
    }
    .social-today {
      color: #1e202a !important;
    }
    .card,
    .card__today {
      background-color: #f0f2fa !important;
    }
  }
  .attribution {
    font-weight: 700;
    color: #333 !important;
  }
}

.dash-board {
  width: 100%;
  background-color: #1e202a;

  position: relative;
  @media (min-width: 900px) {
    height: 100vh;
  }
  .bg-top {
    position: fixed;
    background-color: #1f212e;

    left: 0;
    top: 0;
    height: 30%;
    width: 100%;
    border-radius: 0px 0 30px 30px;
  }
  .container {
    z-index: 10;
    position: relative;
    .social-total {
      width: 100%;
      margin-bottom: 40px;
      color: #ffffff;

      .top {
        flex-direction: column;
        @media (min-width: 900px) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        margin-bottom: 44px;
        .left {
          h2 {
            font-weight: 700;
            margin-bottom: 8px;
          }
          p {
            font-weight: 700;
            color: #8b97c6;
          }
        }
        .right {
          position: relative;
          margin-top: 40px;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            background: rgb(54, 53, 53);
            top: -20px;
            left: 0px;
          }

          @media (min-width: 900px) {
            margin-top: 0;
            &:after {
              display: none;
            }
          }
          .toggle {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            position: absolute;
            right: 0;
            top: 0;
            @media (min-width: 900px) {
              width: 200px;
              justify-content: flex-end;

              right: 0;
              top: -20px;
            }

            span {
              color: hsl(230, 22%, 74%);
              font-weight: 700;
              margin-right: 16px;
              font-size: 12px;
            }
          }
        }
      }

      .cards {
        display: grid;
        gap: 25px;
        grid-template-columns: repeat(1, 1fr);

        @media (min-width: 900px) {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
    .social-today {
      color: #ffffff;
      h2 {
        margin-bottom: 20px;
        font-weight: 700;
      }
      .cards {
        display: grid;
        display: grid;
        gap: 25px;
        grid-template-columns: repeat(1, 1fr);
        @media (min-width: 900px) {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
  .attribution {
    position: absolute;
    left: 0;
    bottom: 10px;
    font-size: 12px;
    width: 100%;
    color: white;
    text-align: center;
  }
}

.checkbox {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, #378fe6, #3eda82);
  outline: none;
  width: 60px;
  height: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    align-self: center;
    left: 5px;
    bottom: 5px;
    background: #303c52;
    transform: scale(1.1);
    transition: 750ms ease all;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5),
      0 2px 4px -1px rgba(0, 0, 0, 0.1);
  }
  &:checked {
    background: hsl(230, 22%, 74%);
  }
  &:checked::before {
    background: #fff;
    left: 39px;
  }
}
</style>