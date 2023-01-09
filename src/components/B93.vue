<!-- Bài 93: Viết chương trình kiểm tra 1 số có phải là số nguyên tố hay không-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold"> Bài 93: Viết chương trình kiểm tra 1 số có phải là số nguyên tố hay không</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label for="nt" class="form-label">Nhập n :</label>
        <input id="nt" v-model="n" class="form-control" placeholder="Nhập số nguyên dương n :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Kiểm tra
    </button>
    <p v-show="isSubmit"><span
        class="font-weight-bold">{{ n }} {{ result ? "là số" : "không phải số" }} nguyên tố </span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      result: true,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let n = parseInt(this.n)
      if (isNaN(n)) {
        alert("Bài 93 : vui lòng nhập n !")
      } else {
        if (n < 2) {
          this.result = false
        } else if (n === 2) {
          this.result = true
        } else {
          let count = 0
          for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
              count++
            }
          }
          this.result = count === 0
        }
        this.isSubmit = true
      }
    }
  },
  watch: {
    n: {
      deep: true,
      handler(newVal, oldVal) {
        if (oldVal !== newVal) {
          this.isSubmit = false
        }
      }
    }
  }
}
</script>