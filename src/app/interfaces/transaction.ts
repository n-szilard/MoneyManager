export interface Transaction {
  ID: number,
  amount: number,
  categoryID: number,
  type: string,
  walletID: number,
  categoryName?: string,
  walletName?: string,
}
