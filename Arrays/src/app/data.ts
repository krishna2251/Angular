export class Product {
  
    productName: string; // required field with minimum 5 characters
    productDesc: string;
    searchTag: string;
    sku: Sku; // user can have one or more skus
    productCatalogDir:ProductCatalogDir;
}   

export class Sku {
    imageUrl: string;  
    price: number;
    productSkuCd:string;
    options:Options;
}
export class Options{
    optionName :string;
    optionValue :string;
}
export class ProductCatalogDir{
    catalogId:number;
    primaryFlg:string;
}

