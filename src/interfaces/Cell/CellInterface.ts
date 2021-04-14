export type CellType = "code" | "text";

export interface CellInterface {
  id: string;
  content: string;
  type: CellType;
}
