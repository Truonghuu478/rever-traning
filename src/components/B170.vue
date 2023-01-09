<!--Bài 170: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn hơn mọi giá trị có trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 170: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số nguyên tố nhỏ nhất lớn
      hơn mọi giá trị có trong mảng</label>
    <div class="form-group w-50">
      <label class="form-label">Nhập phần tử</label>
      <input v-model="n" class="form-control" placeholder="nhập n :"/>
      <p>{{ list }}</p>
    </div>

    <div class="d-flex">
      <button class="btn btn-success my-3 mr-3" type="submit" @click.prevent="add">
        add
      </button>
      <button class="btn btn-info my-3" type="click" @click.prevent="reset">
        reset
      </button>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
  </form>
</template>
<script>
import ValidateMixin from "../validate.mixin"

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      n: null,
      list: [],
      results: "",
      isSubmit: false
    }
  },
  methods: {
    reset() {
      this.list = []
      this.isSubmit = false
    },
    add() {
      if (this.validate(this.n, "B170", 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    isSNT(n) {
      if (n < 2) {
        return false
      } else if (n > 2) {
        if (n % 2 === 0) return false
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false
          }
        }
      }
      return true
    },
    isMin(min) {
      if (!isNaN(min)) {
        for (let i = 0; i < this.list.length; i++) {
          if (min !== this.list[i] && min > this.list[i]) {
            return "Mảng không có số nguyên tố nhỏ hơn tất cả các giá trị khác trong mảng"
          }
        }
        return "Mảng có số nguyên tố nhỏ hơn tất cả các giá trị khác trong mảng là : " + min
      } else {
        return "Mảng không có số nguyên tố"
      }
    },
    perform() {
      if (this.list.length) {
        let min
        for (let i = 0; i < this.list.length; i++) {
          if (this.isSNT(this.list[i])) {
            min = min === undefined || this.list[i] < min ? this.list[i] : min
          }
        }
        this.results = this.isMin(min)
        this.isSubmit = true
      } else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>