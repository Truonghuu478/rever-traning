<!--Bài 155: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 155: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{ list }}</p>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập x</label>
        <input v-model="x" class="form-control" placeholder="nhập x :"/>
      </div>
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
export default {
  data() {
    return {
      n: null,
      x: null,
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
    validate(value,status = 1){
      if(status){
        if(isNaN(value) || value === null){
          alert(`B155 : vui lòng nhập thông tin bằng số thực`)
          return false
        }
      }else{
        if(isNaN(value) || value === null || parseInt(value) !== +value){
          alert("B155 : vui lòng nhập thông tin bằng số nguyên")
          return false
        }
      }
      return true
    },
    add() {
      if (this.validate(this.n)) {
        this.list.push(+this.n)
        this.n = null
      }
    },
    perform() {
      if (this.list.length && this.validate(this.x)){
        let result =0
        for (let i = 1; i < this.list.length; i++) {
            if(this.list[i] - this.x > this.list[result] - this.x){
              result = i
            }
        }
        this.results =  "Giá trị trong mảng xa giá trị x xa nhất là :" + this.list[result]
        this.isSubmit = true
      }else this.isSubmit = false

    }
  }
}
</script>
