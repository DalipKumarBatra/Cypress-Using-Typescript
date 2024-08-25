interface Book {
    name: string;
    link: string;
  }
  
  declare module "booksName.json" {
    const value: Record<string, Book>;
    export default value;
  }