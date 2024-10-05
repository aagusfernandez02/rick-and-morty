declare global {
    type Origin = {
        name: string,
        url: string,
    }
    type Location = {
        name: string,
        url: string,
    }
    type Character = {
        id: number,
        name: string,
        species: string,
        type: string,
        gender: string,
        origin: Origin,
        location: Location,
        image: string,
        episode: string[],
        url: string,
        created: string,
    }
    type Info = {
        count: number,
        pages: number, 
        next: string,
        prev: string,
    }
}

export {};