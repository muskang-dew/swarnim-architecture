export interface RecordType {
    id: number;
    description: string;
    price: number;
    title: string;
    rating:{
        rate:number,
        count:number;
    }
    category: string;
    image: string;
  }