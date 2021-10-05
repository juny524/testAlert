import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-fine-list',
  templateUrl: './fine-list.component.html',
  styleUrls: ['./fine-list.component.css']
})
export class FineListComponent implements OnInit {

  constructor() { }

  items=['都道府県を入力してください、県とかもちゃんと入れてね。例: 東京都'];

  ken_items=[{ name: "北海道", value: "016010"},
            ,{ name: "青森県", value: "020010"},
            ,{ name: "岩手県", value: "030010"},
            ,{ name: "宮城県", value: "040010"},
            ,{ name: "秋田県", value: "050010"},
            ,{ name: "山形県", value: "060010"},
            ,{ name: "福島県", value: "070010"},
            ,{ name: "茨城県", value: "080010"},
            ,{ name: "栃木県", value: "090010"},
            ,{ name: "群馬県", value: "100010"},
            ,{ name: "埼玉県", value: "110010"},
            ,{ name: "千葉県", value: "120010"},
            ,{ name: "東京都", value: "130010"},
            ,{ name: "神奈川県", value: "140010"},
            ,{ name: "新潟県", value: "150010"},
            ,{ name: "富山県", value: "160010"},
            ,{ name: "石川県", value: "170010"},
            ,{ name: "福井県", value: "180010"},
            ,{ name: "山梨県", value: "190010"},
            ,{ name: "長野県", value: "200010"},
            ,{ name: "岐阜県", value: "210010"},
            ,{ name: "静岡県", value: "220010"},
            ,{ name: "愛知県", value: "230010"},
            ,{ name: "三重県", value: "240010"},
            ,{ name: "滋賀県", value: "250010"},
            ,{ name: "京都府", value: "260010"},
            ,{ name: "大阪府", value: "270000"},
            ,{ name: "兵庫県", value: "280010"},
            ,{ name: "奈良県", value: "290010"},
            ,{ name: "和歌山県", value: "300010"},
            ,{ name: "鳥取県", value: "310010"},
            ,{ name: "島根県", value: "320010"},
            ,{ name: "岡山県", value: "330010"},
            ,{ name: "広島県", value: "340010"},
            ,{ name: "山口県", value: "350020"},
            ,{ name: "徳島県", value: "360010"},
            ,{ name: "香川県", value: "370000"},
            ,{ name: "愛媛県", value: "380010"},
            ,{ name: "高知県", value: "390010"},
            ,{ name: "福岡県", value: "400010"},
            ,{ name: "佐賀県", value: "410010"},
            ,{ name: "長崎県", value: "420010"},
            ,{ name: "熊本県", value: "430010"},
            ,{ name: "大分県", value: "440010"},
            ,{ name: "宮崎県", value: "450010"},
            ,{ name: "鹿児島県", value: "460010"},
            ,{ name: "沖縄県", value: "471010"}];


  ngOnInit(): void {
  }

  addTodo(todo:string): void {
    let ken_item:any = this.ken_items.find((ken) => {
      return (ken?.name === todo);
    });
    let api_url: string = "https://weather.tsukumijima.net/api/forecast/city/" + ken_item.value;


    var args = {
      headers: { "Content-Type": "application/json" }
  }

    axios.get(
      api_url
    )
    .then(res => {
      let tenki_json_obj = res.data;

      console.info('token: 一応見れたかな？' + tenki_json_obj["forecasts"][0]["telop"] );
      this.items.push(tenki_json_obj["title"] + "は" + tenki_json_obj["forecasts"][0]["telop"]);
    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }
    });



    // this.items.push(api_url);
  }

  removeTodo(todo:string): void {
    let idx = -1;
    for (let i = 0;i < this.items.length; i++){
      if(this.items[i] == todo){
        idx = i;
      }
    }
    if(idx != -1){
      this.items.splice(idx, 1);
    }
  }

}
