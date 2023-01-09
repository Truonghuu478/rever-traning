<!--Bài 171: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm ước chung lớn nhất của tất cả các phần tử trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 171: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm ước chung lớn nhất của tất cả các phần tử trong mảng</label>
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
      if (this.validate(this.n, "B171", 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    findMin() {
      let min = this.list[0]
      for (let i = 1; i < this.list.length; i++) {
        if (this.list[i] < min) {
          min = this.list[i]
        }
      }
      return min
    },
    isUC(uocSo) {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] % uocSo !== 0) {
          return false
        }
      }
      return true
    },
    perform() {
      if (this.list.length) {
        let result
        for (let i = this.findMin(); i >= 1; i--) {
          if (this.isUC(i)) {
            result = i
            break
          }
        }
        this.results = "Uớc chung lớn nhất là : " + (result || 1)
        this.isSubmit = true
      } else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>