<!--Bài 124: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 124: Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n</label>
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
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{results}}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list: [],
      results: "",
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
    perform() {
      const MAX = 2004
      let results = ""
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] % 2 === 0 && this.list[i] < MAX) {
          results += " "+this.list[i]
        }
      }
      this.results = results
      this.isSubmit = true

    }
  }
}
</script>