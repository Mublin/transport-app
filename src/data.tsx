export type TravelProps ={
    brand: string;
    TakeOff: string;
    carType: string;
    Price: number;
    readonly _id: string | number,
    description: string 
}

type DataType = {
    journeys: {
    Route: string;
    available: TravelProps[];
}[]
}


export const data: DataType ={
    journeys: [{
        Route: "Kontagora to Kano",
        available:[{
            brand: "NSTA",
            TakeOff: "8:00am",
            carType: "Bus",
            Price: 4000,
            _id: 1,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"
        },{
            brand: "KANO-LINE",
            TakeOff: "8:00am",
            carType: "Bus",
            Price: 3500,
            _id: 2,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }]
    },{
        Route: "Kontagora to Minna",
        available:[{
            brand: "NSTA",
            TakeOff: "8:00am",
            carType: "Bus",
            Price: 950,
            _id: 3,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "Old Market",
            TakeOff: "8:00am",
            carType: "Sharon",
            Price: 1200,
            _id: 4,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }] 
    }]
}