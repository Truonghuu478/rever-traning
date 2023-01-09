<!-- Bài 96: Viết chương trình nhập giá trị x sau tính giá trị của hàm số
f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = -2x^2 + 4x – 9 khi x < 5-->
<template>
  <form class="form-group card p-3 text-left" @submit.prevent="submit">
    <label class="font-weight-bold">Bài 96: Viết chương trình nhập giá trị x sau tính giá trị của hàm số
      f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = -2x^2 + 4x – 9 khi x lớn hơn 5 </label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập x :</label>
        <input v-model="x" class="form-control" placeholder="Nhập x :"/>
      </div>
    </div>
    <button class="btn btn-success my-3" type="submit">
      Tính
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ result }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      x: null,
      result: 0,
      isSubmit: false
    }
  },
  methods: {
    submit() {
      let x = parseFloat(this.x)
      if (isNaN(x)) {
        alert("B96 : Vui lòng nhập x bằng số !")
      } else {
        let result = 0
        if (x >= 5) {
          result = 2 * x * x + 5 * x + 9
        } else {
          result = -2 * x * x + 4 * x - 9
        }
        this.result = result
        this.isSubmit = true
      }

    }
  }
}
</script>