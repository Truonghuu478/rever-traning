<!--Bài 127: Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">127: Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần</label>
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
      Sắp xếp
    </button>
    <p v-show="isSubmit"> Kết quả : {{ results }}</p>
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
        alert("B123 : vui lòng nhập thông tin n bằng số")
      } else {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      let newList = [...this.list]
      for (let i = 0; i < newList.length - 1; i++) {
        for (let j = i + 1; j < newList.length; j++) {
          if (newList[i] > newList[j]) {
            let temp = newList[i]
            newList[i] = newList[j]
            newList[j] = temp
          }
        }
      }
      this.results += newList.map(item => item)
      this.isSubmit = true
    }
  }
}
</script>