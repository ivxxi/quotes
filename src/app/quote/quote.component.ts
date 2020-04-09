import { Component, OnInit, ElementRef } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'tell me something my friend. You ever danced with the devil in the pale of the moonlight?', 'by: The Joker',new Date(2020,9,14)),
    new Quote(2,'welcome to the panic room, where all your darkest fears are going to come for you.','by: Aura',new Date(2020,6,9)),
    new Quote(3,'want to know my opening statement? Even though I have been waiting, I am impatient','by: Saint Jhn',new Date(2020,1,12)),
    new Quote(4,'this is the beginning. You are only looking at the Beta.','by: Saint Jhn',new Date(2020,11,18)),
    new Quote(5,'you will finally understand why storms are named after people','by: Caitlyn Seihl',new Date(2020,2,14)),
    new Quote(6,'I will never be a morning person, for the moon and I are too much in love.','by: Christopher Poindexter',new Date(2020,3,14)),
    new Quote(7,'And even when you are broken, I will marry your broken pieces.','by: Christopher Poindexter',new Date(2020,8,14)),
    new Quote(8,'Language can make a murderer a saint, a victim deserving, and a lover a stranger.','by: Kat Savage',new Date(2020,1,30)),
    new Quote(9,'As you know, madness is like gravity...all it takes is a little push..','by: The Joker',new Date(2020,2,9))
  ];
  upvotes: any;
downvotes: any;

  toggleDetails(index){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }

 deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upVotes(upvotes,index){
      this.quotes[index].upvotes += 1;
  };
  downVotes(downvotes,index){
    this.quotes[index].downvotes += 1;
};
  constructor() { }

  ngOnInit(): void {
  }

}
