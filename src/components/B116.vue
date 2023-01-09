<!--Bài 116: Viết chương trình nhập n và tính tổng S = 1 + 2 + 3 + … + n-->
<template>
  <form class="form-group card  text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 116: Viết chương trình nhập n và tính tổng S = 1 + 2 + 3 + … + n
    </label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n</label>
        <input v-model="n" class="form-control" placeholder="n"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit"> Kết quả : s = <span class="font-weight-bold">{{ s }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      s: 0,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let n = +this.n
      if (isNaN(n) || n < 0) {
        alert("B116 : Thông tin không hợp lệ, vui lòng nhập lại! n < 0")
      } else {
        let s = 0
        for (let i = 1; i <= n; i++) {
          s += i
        }
        this.s = s
        this.isSubmit = true
      }
    }
  }
}
</script>