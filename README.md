# Horseradish Demo README.md

## 2024/04/22
以下是新增的內容
1. 提升顏色以及切版的視覺和諧度，增加了更具吸引力的色彩和設計風格，使整體畫面更加美觀舒適。
2. 利用更多 Sass 的功能，包括分檔、extend、mixin。將 mixin 和 extend 各自分檔出去，讓程式碼更有組織性和可維護性。雖然目前只用到一個 variable，但考慮到大型專案可能會有多個，因此也分檔出去。另外，將比較能模組化的 class 也分檔出去，例如在這個 demo 中只有 button 比較好分檔。直接處理 HTML 標籤的部分也分檔。並在class的命名上保持邏輯性。
3. 增加更多 component，並最大程度利用 props 所帶來的效用。例如，button 可以根據傳入的 buttonClass 更動樣式，也可以傳入 type 和 text。並利用 emit 使這個自定義的 component 一樣可以處理 onClick 事件。另外一個新增的 component 是 ListLine，在這個 demo 中，TodoList 和 ProductList 都會用到 ListLine 這個 component。根據傳入的 props，可以保持大致風格相同但細節樣式不同的效果，從而增加程式碼的可讀性和縝密度。
4. 增加一個computed的用法。在todolist的form中，title和text會隨時computed成合併起來的json格式，並存到formData裡，在新增進去todos的時候可以直接寫formData

p.s.: todolist沒有串用localstorage和資料庫，因此更新頁面就會消掉所有紀錄

## 2024/04/19

以下會條列式講述每個點我自己的理解以及我的實作與設計。但在部屬方式(第11點)我並沒有使用firebase hosting進行部屬。十分抱歉與感謝!
p.s.在使用vertical的排版方式可能比較方便閱讀，由於是小測驗所以我沒有太注重介面的美觀度。

### (1) 用Vue Cli或Nuxt 完成以下功能
我使用的是Nuxt來完成

### (2) 以scss撰寫內容樣式
有使用，並將全部內容樣式全部寫在main.scss中。並簡單應用scss中的變數、巢狀結構、Mixin等功能增加可重複性。dark mode和light mode的作法也是利用scss的巢狀結構完成

### (3) 應用component功能
應用了七個Component，包括:
1. 用於展示第五點的四個component: CustomInput, InputText, InputRadio, InputSelect
2. 通用於每個頁面的Navbar
3. 展示是哪個Page的PageTitle
4. 用於列出第九點fetch到的資料的ProductList。
### (4) 應用computed功能
用於Home Page中，展示light mode和dark mode的小方塊。這邊我不是直接用第八點中所使用的theme(使用useState達到全域變數的效果)，而是有點多此一舉的，根據theme的值直接compute 該小方塊的background-color之數值
```html
// pages/index.vue
<template>
    ...
    <div class="color-box" :style="{ 'background-color': computedBoxColor }"></div>
    ...
</template>

<script setup>
    ...
    const { toggleTheme, theme } = useTheme()

    const computedBoxColor = computed(() => {
    // 在这里根据 theme 的值返回相应的背景颜色
        if (theme.value === 'light') {
            return "rgba(49, 210, 17, 0.922)"; // 返回红色背景颜色
        } else {
            return 'black'; // 返回蓝色背景颜色
        }
    });
    ...
</script>
```
### (5) 製作 輸入類型 text, radio, select 、同一component切換prop來改變對應的輸入類型，並可套用v-model
主要是利用v-model將資料之間建立雙向綁定外，並為text, radio, select各自建立Component，方便重複利用
### (6) 可切換頁面
製作了主頁面(展示computed)、用於展示fetch data的頁面和展示第五點各個component的頁面
### (7) 設定頁面title, description
為第六點提到的三個頁面設定了簡單的title, description
### (8) 設定Global參數、讓頁面的顏色、主題會隨著更換
利用useState的技術，在composables資料夾建立了useTheme和useArrange。透過Navbar上面的按鈕可以分別改變兩個參數。一個改變顏色主體，一個將每個頁面的展示在flex-row和flex-col之間切換。除此之外也利用scss的巢狀結構功能幫助完成這點
### (9) 串接一組列表資料api
簡單使用useFetch串接該組列表資料並展示在fetch api demo page
### (10) 程式架構做到最大的沿用性、維護性，並於Readme說明你的想法
程式架構的沿用性在網頁程式設計的展現就是component的設計，如同大一必修的物件導向設計。因此可以化作component的我盡量都應用。除此之外，我也利用scss(如: mixin功能)，讓樣式的部分也可以更有可讀性和重複利用性。
### (11) 使用Firebase Hosting，提供連結給我們進行瀏覽
很抱歉我這點遇到了一些問題。我有看過deploy的方式，但是他一直回應要升級成付費方案才能deploy(must be on the Blaze (pay-as-you-go) plan to complete this command.)。我有嘗試過網路上的一些做法但都無法免費部屬。因此我是採用我比較熟悉的vercel部屬方式。
https://horseradish-demo.vercel.app/
### 12. 提供Github程式碼
https://github.com/TzengKyle/Horseradish-Demo/tree/main
