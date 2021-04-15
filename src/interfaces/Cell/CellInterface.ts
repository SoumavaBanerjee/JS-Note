export type CellType = "code" | "text";
export type CellDirection = "up" | "down";

export interface CellInterface {
  id: string;
  content: string;
  type: CellType;
}
