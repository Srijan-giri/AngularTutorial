import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  active = false;  // component property bind with html element property(view property)

  title = "This is title , from angular component <b> This is Bold</b>";
  ob = {
    color: 'white',
    backgroundColor: 'black'
  }

  imagePath ="https://picsum.photos/200/300"

  // practise

  show = false;

  getShowDetails(){
    this.show = !this.show;
  }

}

/*

  Property Binding ::

  class
  href
  src
  innerHTML
  textContent

  syntax ::
  [binding-target]='source'


*/