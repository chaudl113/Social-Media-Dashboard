<template>
  <div class="card" :class="social.social">
    <div class="card__inner">
      <div class="icon">
        <img :src="require(`../assets/images/${social.icon}.svg`)" alt="" />
        <span>{{ social.name }}</span>
      </div>
      <div class="info">
        <h1>{{ kFormatter(social.totalFollower) }}</h1>
        <p>Followers</p>
      </div>
      <div class="date">
        <img :src="require(`../assets/images/icon-${social.rate}.svg`)" alt="" />
        <span :class="social.rate">{{ social.date }} Today</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalCard",
  props: {
    social: {
      type: Object,
      required: true,
    },
  },
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 9999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  flex-direction: column;
  border-radius: 4px;
  background-color: #252a41;
  .card__inner {
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 100%;
    padding: 32px 16px;
    .icon {
      display: inline-flex;
      margin: auto;
      align-items: center;
      margin-bottom: 15px;
      span {
        margin-left: 10px;
        font-size: 12px;
        color: hsl(230, 22%, 74%);
        font-weight: 700;
      }
    }
    .info {
      font-size: 23px;
      margin-bottom: 20px;
      p {
        font-size: 11px;
        letter-spacing: 5px;
        color: hsl(230, 22%, 74%);
        text-transform: uppercase;
        font-weight: 300;
      }
    }

    .date {
      display: flex;
      align-items: center;
      margin: auto;
      span {
        font-size: 12px;
        font-weight: 700;
        margin-left: 8px;
      }
    }
  }
}

.light {
  .card {
    .icon {
      span {
        color: #63687e !important;
      }
    }

    .info {
      p {
        color: #63687e !important;
      }
    }
  }
}
</style>