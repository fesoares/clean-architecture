import { PurchaseModel } from "@/domain/models";

export interface LoadPurchases {
  loadAll: () => Promise<Array<LoadPurchases.Result>>
}

export namespace LoadPurchases {
  export type Result = PurchaseModel
}

// Conventional
// export interface SavePurchases {
//   save: (purchases: Array<PurchaseModel>) => Promise<void>
// }

// type PurchaseModel = {
//   id: string
//   data: Date
//   value: number
// }