<template>
  <form class="form-group card text-left p-3">
    <label class="font-weight-bold">Bài 203: Tinh tổng các chữ số có chữ số hàng chục là 5 trong mảng 1 chiều các số nguyên</label>
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
      if (this.validate(this.n, "B203",0)) {
        this.list.push(+this.n);
        this.n = null;
      }
    },
    timHangChucLa5(n){
        let i = ""+n
        if(i.length === 1) return false
        i = i.slice(i.length - 2,i.length - 1)
        if(+i === 5) return true
        return false
    },
    perform() {
      if (!this.list.length) {
        alert("Thông tin không hợp lệ");
        return;
      }
      let s = 0;
      for (let i = 0; i < this.list.length; i++) {
          if(this.timHangChucLa5(this.list[i])) {
            s += this.list[i]
          }
      }
      this.results = "Tổng các giá trị phần tử có chữ số đầu tiên là lẻ là : "+ s
      this.isSubmit = true;
    },
  },
};
</script>

