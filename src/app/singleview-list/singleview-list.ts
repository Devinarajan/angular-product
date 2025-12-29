import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {
  // declare an array
  singleproduct:any;
  //create constructor and initialize objects of  Apiservice
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  //create ngOnInit function(pageload)
  ngOnInit(){
    //parameter mapping
    const
    productid=this.route.snapshot.paramMap.get('titileid');

    if(productid){
      this.apiservice.getsingleProducts(productid).subscribe((data)=>{
        this.singleproduct=data;
        console.log(data)
        this.cdr.detectChanges()
      })
  }
  }

}
