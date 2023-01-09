<!--Bài 173 (*): Cho mảng 1 chiều các số nguyên. Hãy  viết hàm tìm chữ số xuất hiện ít nhất trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 173 (*): Cho mảng 1 chiều các số nguyên. Hãy  viết hàm tìm chữ số xuất hiện ít nhất trong mảng</label>
    <div class="form-group w-50">
      <label class="form-label">Nhập phần tử</label>
      <input v-model="n" class="form-control" placeholder="nhập n :"/>
      <p>{{ mapList }}</p>
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
      mapList:{},
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
      if (this.validate(this.n, "B173", 0)) {
        if(this.mapList[+this.n]){
          this.mapList[+this.n].quantity++
        }else{
          this.mapList[+this.n] = {
            quantity : 1,
            value : +this.n
          }
        }
        this.n = null
      }
    },
    findMin(){
      let min
      for (const [key] of Object.entries(this.mapList)){
        if(!min || this.mapList[key].quantity < min ){
          min = this.mapList[key].quantity
        }
      }
      return min
    },
    perform() {
      if (!!this.mapList) {
        let result = ""

        this.results = "Bội chung nhỏ nhất là : " + result
        this.isSubmit = true
      } else alert("Vui lòng nhập thông tin")

    }
  }
}
</script>