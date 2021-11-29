declare interface Entity {
  type: string;
  pointId: string;
  _id?: string;
  fields: Array<{ name: string; value: string }>;
}
