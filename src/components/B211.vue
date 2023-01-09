<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 211: Tính trung bình cộng các số nguyên tố trong mảng 1 chiều các số nguyên</label>
    <div class="d-flex">
      <div class="form-group w-50">
        <label class="form-label">Nhập phần tử</label>
        <input v-model="n" class="form-control" placeholder="nhập n :" />
        <p>{{ list }}</p>
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
      if (this.validate(this.n, "B210",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    isSNT(n){
        if(n < 2){
            return false
        }else if(n > 2){
            if(n % 2 == 0) return false
            for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0){
                    return false
                }
            }
        }
        return true
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let s = 0,count = 0
      for(let i = 0; i < this.list.length; i++){
        if(this.isSNT(this.list[i])){
            s += this.list[i];
            count++
        }
      }

      this.results = "Trung bình cộng các giá trị có chữ số đầu tiên là chẵn là : "+ Math.floor(s/count)
      this.isSubmit = true;
    },
  },
};
</script>

