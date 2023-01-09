<!--Bài 154: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 154: Hãy tìm vị trí giá trị âm nhỏ nhất trong mảng các số thực. Nếu mảng không có số âm thì trả về -1</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
        <div class="d-flex">
          <button class="btn btn-success my-3 mr-3" type="submit" @click.prevent="add">
            add
          </button>
          <button class="btn btn-info my-3" type="click" @click.prevent="reset">
            reset
          </button>
        </div>
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
    reset(){
      this.list= []
      this.isSubmit = false
    },
    add() {
      if (isNaN(this.n) || this.n === null) {
        alert("B154 : vui lòng nhập thông tin n bằng số thực")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let result = -1
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] < 0) {
          if (!this.list[result] || this.list[result] > this.list[i]) {
            result = i
          }
        }
      }
      this.results = result !== -1 ? "Mảng có giá trị số âm nhỏ nhất ở vị trí :" + result : " Mảng không có số âm"
      this.isSubmit = true
    }
  }
}
</script>
