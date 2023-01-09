<!--Bài 120: Liệt kê tất cả các số chính phương nhỏ hơn n-->
<template>
  <form class="form-group card  text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 120: Liệt kê tất cả các số chính phương nhỏ hơn n</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Liệt kê
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      results: "",
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let n = +this.n
      if (isNaN(n)) {
        alert("B119 : Thông tin không hợp lệ, vui lòng nhập lại!")
      } else {
        let results = ""
        for (let i = 1; i < n; i++) {
          if (parseInt(Math.sqrt(i)) === parseFloat(Math.sqrt(i))) {
            results += i + " "
          }
        }
        this.results = results
      }
      this.isSubmit = true

    }
  }
}
</script>