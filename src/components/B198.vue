<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 198: Hãy liệt kê các vị trí mà giá trị tại đó là giá trị lớn nhất trong mảng 1 chiều các số thực</label>
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
      if (this.validate(this.n, "B197",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    findMax(){
        let max = this.list[0]
        for (var i = 1; i < this.list.length; i++){
            if(this.list[i] > max){
                max = this.list[i]
            }
        }
        return max
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let results = ""
        let max = this.findMax()
      for (let i = 0; i < this.list.length; i++) {
        if(max === this.list[i]){
            results += " "+i
        }
      }
      this.results = "Mảng có các ví trị giá trị lớn nhất trong mảng là : " + results 

      this.isSubmit = true;
    },
  },
};
</script>
