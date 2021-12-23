type Pokemons = {
  data:{
    count: number;
    next: string;
    previous: unknown;
    results: [
      {
        name: string;
        url: string;
      }
    ];
  }
}

export default Pokemons;
