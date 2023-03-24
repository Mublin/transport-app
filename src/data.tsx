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
            TakeOff: "9:30am",
            carType: "Bus",
            Price: 950,
            _id: 3,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "NURTW",
            TakeOff: "11:00am",
            carType: "Bus",
            Price: 1000,
            _id: 12,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "Private",
            TakeOff: "10:00am",
            carType: "gulf",
            Price: 950,
            _id: 3,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "Old Market",
            TakeOff: "2:00pm",
            carType: "Sharon",
            Price: 1200,
            _id: 4,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }] 
    },
    {
        Route: "Kano to Kontagora",
        available:[{
            brand: "NSTA and KANO-LINE",
            TakeOff: "8:00am",
            carType: "Bus",
            Price: 3000,
            _id: 5,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "tasha",
            TakeOff: "8:00am",
            carType: "Sharon",
            Price: 3300,
            _id: 6,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }] 
    },
    {
        Route: "Minna to Zaria",
        available:[{
            brand: "NSTA",
            TakeOff: "8:00am",
            carType: "Bus",
            Price: 2000,
            _id: 7,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "Mobil",
            TakeOff: "8:30am",
            carType: "Sharon",
            Price: 2300,
            _id: 8,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }] 
    },  {
        Route: "Minna to Kano",
        available:[{
            brand: "NSTA",
            TakeOff: "9:00am",
            carType: "Bus",
            Price: 2500,
            _id: 9,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        },
        {
            brand: "Mobil",
            TakeOff: "10:00am",
            carType: "Sharon",
            Price: 2300,
            _id: 10,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quis labore vero!"

        }] 
    }]
}