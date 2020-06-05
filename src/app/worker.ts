export class Worker {
  constructor(
    public id: number,
    public name: string,
    public position: string,
    public hobby?: string
  ) {}
}

let newWorker = new Worker(1, 'John', 'JavaScript Developer', 'dry fruits')
