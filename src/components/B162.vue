<!--Bài 162: Cho mảng 1 chiều các số thực. Hãy viết hàm tìm một vị trí trong mảng thỏa 2 điều kiện: có 2 giá trị lân cận và giá trị tại đó bằng tích 2 giá trị lân cận. Nếu mảng không tồn tại giá trị như vậy thì trả về giá trị -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 162: Cho mảng 1 chiều các số thực. Hãy viết hàm tìm một vị trí trong mảng thỏa 2
      điều kiện: có 2 giá trị lân cận và giá trị tại đó bằng tích 2 giá trị lân cận. Nếu mảng không tồn tại giá trị như
      vậy thì trả về giá trị -1</label>
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
      if (this.validate(this.n,"B162")) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      if (this.list.length) {
        let result = -1
        for (let i = 1; i < this.list.length; i++) {
          if (this.list[i - 1] !== undefined && this.list[i + 1] !== undefined && this.list[i] === this.list[i - 1] * this.list[i + 1]) {
            result = i
          }
        }
        this.results = result === -1 ? `Mảng không có giá trị  thỏa điều kiện` : `Mảng có giá trị  thỏa điều kiện nằm ở vị trí : ${result}`
        this.isSubmit = true

      }

    }
  }
}
</script>