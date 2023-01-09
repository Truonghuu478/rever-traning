<!--Bài 140: Hãy tìm giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì sẽ trả về -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 140: Hãy tìm giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì sẽ trả về -1</label>
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
        alert("B140 : vui lòng nhập thông tin n bằng số ")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let result = -1
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] > 0) {
          if(!this.list[result] || this.list[i] < this.list[result]){
            result = i
          }
        }
      }
      this.results = result !== -1 ? "Mảng có giá trị dương nhỏ nhất là : " + this.list[result] : " Mảng không có số dương"
      this.isSubmit = true
    }
  }
}
</script>
