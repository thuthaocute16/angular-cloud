import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        'https://www.flexsin.com/blog/wp-content/uploads/2019/05/1600_900_machine_learning.jpg',
        imageAlt: 'Blog 1',
    },
    {
      imageSrc:
        'https://tdwi.org/articles/2017/05/19/-/media/TDWI/TDWI/BITW/manandlight.jpg',
      imageAlt: 'Blog 2',
    },
    {
      imageSrc:
        'https://sulava.com/wp-content/uploads/2020/09/futuristic-head-2560x1440-1-1024x576.jpg',
      imageAlt: 'Blog 3',
    },
    {
      imageSrc:
        'https://www.vervelogic.com/blog/wp-content/uploads/2021/08/AI-and-ML-Are-Transforming-Mobile-App-Development-624x300.jpg',
      imageAlt: 'Blog 4',
    },
    {
      imageSrc:
        'https://th.bing.com/th/id/OIP.sLsUKK5dEf5dQVosaFJp3gHaE7?pid=ImgDet&rs=1',
      imageAlt: 'Blog 5',
    },
  ]

}
