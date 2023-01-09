<!--Bài 142: Tìm giá trị nhỏ nhất trong mảng 1 chiều số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 142: Tìm giá trị nhỏ nhất trong mảng 1 chiều số thực</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
        <button class="btn btn-success my-3" type="submit" @click.prevent="add">
          add
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : <span class="font-weight-bold">{{ results }}</span></p>
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
      if (isNaN(this.n) || this.n === null) {
        alert("B142 : vui lòng nhập thông tin n bằng số ")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let result = 0
      for (let i = 1; i < this.list.length; i++) {
          if(this.list[i] < this.list[result]){
            result = i
          }
      }
      this.results =  "Giá trị nhỏ nhất trong danh sách là : " + this.list[result]
      this.isSubmit = true
    }
  }
}
</script>
