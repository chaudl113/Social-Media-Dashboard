<template>
  <div class="card__today dark-bg-card">
    <div class="social-view flex">
      <p>{{ overview.title }}</p>
      <img :src="require(`../assets/images/${overview.icon}.svg`)" alt="" />
    </div>
    <div class="social-percent flex">
      <p>{{ kFormatter(overview.total) }}</p>
      <div class="percent flex">
        <img
          :src="require(`../assets/images/icon-${overview.rate}.svg`)"
          alt=""
        />
        <span :class="overview.rate">{{ overview.percent }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayCard",
  props: {
    overview: {
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
.card__today {
  flex-direction: column;
  border-radius: 4px;
  padding: 20px;
  .social-view {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    p {
      font-size: 12px;
      color: hsl(230, 22%, 74%);
      font-weight: 700;
    }
  }
  .social-percent {
    justify-content: space-between;
    align-items: flex-end;

    p {
      font-size: 25px;
      font-weight: 700;
    }
    .percent {
      align-items: center;
      span {
        font-size: 10px;
        margin-left: 4px;
        font-weight: 700;
      }
    }
  }
}

.light {
  .card__today {
    .social-view {
      p {
        color: #63687e !important;
      }
    }

    .social-percent {
      p {
        color: #1e202a !important;
      }
    }
  }
}
</style>