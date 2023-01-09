<!--Bài 125: Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 125: Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{list}}</p>
        <button class="btn btn-success my-3" type="submit" @click.prevent="add">
          add
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : có <span class="font-weight-bold">{{count}}</span> số nguyên tố nhỏ hơn  100  Danh sách:{{results}}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list: [],
      results:"",
      count : 0,
      isSubmit: false
    }
  },
  methods: {
    add() {
      if(isNaN(this.n) ||this.n === null){
        alert("B123 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(this.n)
        this.n = null
      }
    },
    isSNT(number){
      let n = +number
      if(n < 2){
        return false
      }else if(n === 2){
        return true
      }else{
        if( n %2 === 0) return false
        for (let i = 3; i <= Math.sqrt(n); i+=2) {
          if (n % i === 0 ) {
           return false
          }
        }
        return true
      }
    },
    perform() {
      const MAX = 100
      let  results = ""
      let count = 0
      for (let i = 0; i < this.list.length; i++) {
        if (this.isSNT(this.list[i]) && this.list[i] < MAX) {
          results += " "+ this.list[i]
          count ++
        }
      }
      this.results = results
      this.count = count
      this.isSubmit = true

    }
  }
}
</script>