<!--Bài 164: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên thỏa mãn tính chất số gánh-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 164: Cho mảng 1 chiều các số nguyên. Hãy tìm giá trị đầu tiên thỏa mãn tính chất số gánh, vd :12321</label>
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
      if (this.validate(this.n,"B163", 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      if (this.list.length) {
        let result = -1
        for (let i = 0; i < this.list.length; i++) {
          if (Math.sqrt(this.list[i]) === parseInt(""+Math.sqrt(this.list[i]))) {
            result = i
            break
          }
        }
        this.results = result === -1 ? `Mảng không có số chính phương` : `Mảng có giá trị là số chính phương đầu tiên là  : ${this.list[result]}`
        this.isSubmit = true

      }else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>