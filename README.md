# :dollar: Vue [AdFit 광고](http://adfitinfo.biz.daum.net/) 컴포넌트
[![NPM Downloads](https://img.shields.io/github/downloads/kyungw00k/vue-adfit-component/total.svg?maxAge=2592000)](https://github.com/kyungw00k/vue-adfit-component)
> Vue로 손 쉽게 AdFit 광고를 넣어보자!

## 🎉 예제
https://kyungw00k.github.io/vue-adfit-component/

## 🚀 시작하기

### 설치

```javascript
npm install vue-adfit-component --save
```

### 사용법

```javascript
import AdFit from 'vue-adfit-component'

Vue.use(AdFit.Banner)
```

### 템플릿

```html
<adfit-banner
    v-on:ad-loaded
    v-on:ad-failed
    data-ad-test="Y"
    data-ad-unit="DAN-Xxxxxxxx">
</adfit-banner>
```

## :gift: 속성과 이벤트

### 속성

| Attribute          | Type        |Default        | Description                          	  |
|------------------- |------------ |-------------- |--------------------------------------- 	|
| class              | String      |`adfit_ad_area`|                                          |
| style              | String      |`display:block`|                                          |
| data-ad-unit       | String      |               | Attribute `data-ad-unit` from AdFit      |
| data-ad-test       | String      |     `N`       | Attribute `data-ad-test` from AdFit      |

### 이벤트

| Event          | Description                          	  |
|----------------| ---------------------------------------	|
| ad-loaded      | Attribute `data-ad-load` from AdFit      |
| ad-failed      | Attribute `data-ad-fail` from AdFit      |

## 🏃 개발

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production demo with minification
npm run build

# build for plugin distribution file
npm run pack

# run build and pack
npm run dist
```


## License
MIT
