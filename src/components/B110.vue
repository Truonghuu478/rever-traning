<!--Bài 110: Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. Lập chương trình để tìm ra tất cả các phương án có thể -->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 110: Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. Lập chương trình để tìm ra tất cả các phương án có thể</label>
    <button class="btn btn-success my-3" type="submit">
      Tìm phương án
    </button>
    <button class="btn btn-success my-3" type="click" @click.prevent="isDislay = !isDislay">
      Hiển thị các phương án
    </button>
    <p v-show="isSubmit">Kết quả :Có  <span class="font-weight-bold">{{ count }} Phương án</span></p>
    <p v-show="isDislay">{{results}}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      results: "",
      count : 0,
      isSubmit: false,
      isDislay : false
    }
  },
  methods: {
    submit() {
      // x * 1000 + y * 2000 + z * 5000 = 200.000
      // 200 * 1000 = 200000 => x thuộc [0, 200]
      // 100 * 2000 = 200000 => y thuộc [0, 100]
      // 40 * 5000 = 200000 => z thuộc [0, 40]
      let results = ""
      const  MAX = 200000 , oneMoney = 1000, twoMoney = 2000, fiveMoney = 5000
      let count = 0
      for (let i = 0; i <= 200; ++i){
        for (let j = 0; j <= 100; ++j){
          for (let k = 0; k <= 40; ++k){
            if (i * oneMoney + j * twoMoney + k * fiveMoney === MAX){
              count ++
              results +=`${count} || ${i} tờ 1000(VND) + ${j} tờ 2000(VND) + ${k} tờ 5000(VND) `
            }
          }
        }
      }
      this.count = count
      this.results = results
      this.isSubmit = true
    }
  }
}
</script>