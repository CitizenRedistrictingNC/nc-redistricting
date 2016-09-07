export class Plan {
  constructor(
    public id: number,
    public name: string,
    public notes: string,
    public seeds: [number, number][]
  ) {}
}
