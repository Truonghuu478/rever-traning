<!--Bài 167: Hãy tìm giá trị thỏa điều kiện toàn chữ số lẻ và là giá trị lớn nhất thỏa điều kiện ấy trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về 0-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 167: Hãy tìm giá trị thỏa điều kiện toàn chữ số lẻ và là giá trị lớn nhất thỏa điều kiện ấy trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về 0</label>
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
      if (this.validate(this.n,"B167", 0)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    checkSoLe(n) {
      let i = ""+ n
      while(i.length > 0){
        if(i.slice(i.length-1,i.length) %2 ===0){
          return false
        }
        i = i.slice(0,i.length-1)

      }
      return true
    },
    perform() {
      if (this.list.length) {
        let result = 0
        for (let i = 0; i < this.list.length; i++) {
          if(this.checkSoLe(this.list[i])  && this.list[i] > result){
            result = this.list[i]
          }
        }
        this.results = !result ? `Mảng không có số lẻ` : `Mảng có chữ số toàn lẻ và lớn nhất, có giá trị  là  : ${result}`
        this.isSubmit = true

      }else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>