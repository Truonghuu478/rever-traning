<!--Bài 172: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm bội chung nhỏ nhất của tất cả các phần tử trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 172: Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm bội chung nhỏ nhất của tất
      cả các phần tử trong mảng</label>
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
      if (this.validate(this.n, "B172", 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    findMax() {
      let max = this.list[0]
      for (let i = 1; i < this.list.length; i++) {
        if (this.list[i] > max) {
          max = this.list[i]
        }
      }
      return max
    },
    perform() {
      if (this.list.length) {
        let result = this.findMax()
        for (let i = 0; i < this.list.length; i++) {
          if (result % this.list[i] !== 0) {
            result += this.findMax()
            i--
          }
        }
        this.results = "Bội chung nhỏ nhất là : " + result
        this.isSubmit = true
      } else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>