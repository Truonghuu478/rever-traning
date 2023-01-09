<!--Bài 107: Viết hàm tính S = CanBacN(x)-->
<template>
  <form class="form-group card text-left p-3" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 107: Viết hàm tính S = CanBacN(x)</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n :</label>
        <input v-model="n" class="form-control" placeholder="Nhập n :"/>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập x :</label>
        <input v-model="x" class="form-control" placeholder="Nhập x :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit">Kết quả : S = <span class="font-weight-bold">{{ s }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      x: null,
      s: 0,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let n = parseInt(this.n)
      let x = parseInt(this.x)
      if (isNaN(n) || isNaN(x)) {
        alert("Bài 108 : vui lòng nhập n,x bằng số ")
      } else {
        this.s =  Math.pow(x, 1 / n)
        this.isSubmit = true
      }
    }
  }
}
</script>