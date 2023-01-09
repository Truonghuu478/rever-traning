<!--Bài 122: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực-->
<template>
  <form class="form-group card  text-left p-3">
    <label class="font-weight-bold">Bài 122: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực</label>
    <div class="d-flex ">
      <div class="form-group w-50">
        <label class="form-label">Nhập n</label>
        <input v-model="n" class="form-control" placeholder="nhập n :"/>
        <p>{{list}}</p>
        <button class="btn btn-success my-3" type="submit"  @click.prevent="add">
          add
        </button>
      </div>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit"> Kết quả : giá trị lớn nhất trong mảng là <span class="font-weight-bold">{{ list[max] }}</span></p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      n: null,
      list:[],
      max: null,
      isSubmit: false
    }
  },
  methods: {
    add(){
      if(isNaN(this.n) ||this.n === null){
        alert("B122 : vui lòng nhập thông tin n bằng số")
      }else{
        this.list.push(this.n)
        this.n = null
      }
    },
    perform() {
        let max =0
        for (let i = 0; i < this.list.length; i++) {
          if(this.list[max] < this.list[i]){
            max = i
          }
        }
        this.max = max
      this.isSubmit = true

    }
  }
}
</script>