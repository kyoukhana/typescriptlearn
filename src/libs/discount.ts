import type { Article } from "types/article";

class Discount {
  isPercentage: boolean;
  amount: number;

  constructor(isPercentage: boolean, amount: number) {
    this.isPercentage = isPercentage;
    this.amount = amount;
  }

  apply(article: Article) {
    if (this.isPercentage) {
      article.price = article.price - article.price * this.amount;
    } else {
      article.price = article.price - this.amount;
    }
  }
}

let allProductsTwentyBucks: Discount = {
  isPercentage: false,
  amount: 20,
  apply(article) {
    article.price = 20;
  },
};


