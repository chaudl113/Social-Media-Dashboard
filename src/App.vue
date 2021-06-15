<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

//  Dark Theme
.dark-bg {
  background-color: #1e202a;
}

.dark-bg-top {
  background-color: #1f212e;
}
.dark-bg-card {
  background-color: #252a41;
}

.dark-text-gray {
  background-color: #8b97c6;
}

.text-dark {
  color: #ffffff;
}

// light Theme

.light-bg {
  background-color: #ffffff;
}

.light-bg-top {
  background-color: #f5f7ff;
}

.light-bg-card {
  background-color: #f0f2fa;
}

.light-text-gray {
  background-color: #63687e;
}

.text-light {
  background-color: #1e202a;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 30px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
    max-width: 1200px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

.up {
  color: #1db489;
}
.down {
  color: #dc414c;
}


.facebook {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #198ff5;
}
.twitter {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #1ca0f2;
}
$leftInts: #fdc468;
$rightInts: #df4996;

.instagram {
  width: 100%;
  border-top-width: 4px;
  border-top-style: solid;
  position: relative;
  &:before {
    content: "";
    height: 4px;
    position: absolute;
    width: 100%;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(to right, $leftInts, $rightInts);
    top: -4px;
    left: 0;
  }
}

.youtube {
  border-top-width: 4px;
  border-top-style: solid;
  border-top-color: #c4032a;
}
</style>