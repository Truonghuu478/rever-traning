<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold"> Bài 213: Tính trung bình cộng các giá trị lớn hơn giá trị x trong mảng 1 chiều các số thực</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :" />
        <p>{{ list }}</p>
      </div>
      <div class="form-group w-50">
        <label class="form-label">Nhập x</label>
        <input v-model="x" class="form-control" placeholder="nhập x :" />
      </div>
    </div>

    <div class="d-flex">
      <button
        class="btn btn-success my-3 mr-3"
        type="submit"
        @click.prevent="add">
        add
      </button>
      <button class="btn btn-info my-3" type="click" @click.prevent="reset">
        reset
      </button>
    </div>
    <button class="btn btn-success my-3" type="click" @click.prevent="perform">
      Tìm
    </button>
    <p v-show="isSubmit">
      Kết quả : <span class="font-weight-bold">{{ results }}</span>
    </p>
  </form>
</template>
<script>
import ValidateMixin from "../validate.mixin";

export default {
  mixins: [ValidateMixin],
  data() {
    return {
      n: null,
      x:null,
      list: [],
      results: "",
      isSubmit: false,
    };
  },
  methods: {
    reset() {
      this.list = [];
      this.isSubmit = false;
    },
    add() {
      if (this.validate(this.n, "B213")) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    perform() {
      if (!this.list.length || isNaN(this.x)) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let s = 0,count = 0
      for(let i = 0; i < this.list.length; i++){
        if(this.list[i] > this.x){
            s += this.list[i];
            count++
        }
      }
    
      this.results =`Trung bình cộng các giá trị lớn hơn ${this.x} là : ${Math.floor(s/count)}` 
      this.isSubmit = true;
    },
  },
};
</script>

