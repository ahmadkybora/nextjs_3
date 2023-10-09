"use client";

import { Table } from "@/components";

const Home = () => {
    const columns = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "first_name",
            header: "First Name",
        },
        {
            accessorKey: "last_name",
            header: "Last Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "date",
            header: "Date",
        },
    ];
    const data = [
        {
            "id": 1,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 2,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 3,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 4,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 5,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 6,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 7,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 8,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 9,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 10,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 11,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 12,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 13,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 14,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 15,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 16,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 17,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 18,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 19,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 20,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 21,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 22,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 23,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 24,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 25,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 26,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 27,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 28,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 29,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 30,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
        {
            "id": 31,
            "first_name": "Terry",
            "last_name": "Medhurst",
            "email": "atuny0@sohu.com",
            "date": "01/03/2023"
        },
        {
            "id": 32,
            "first_name": "Sheldon",
            "last_name": "Quigley",
            "email": "hbingley1@plala.or.jp",
            "date": "01/03/2023"
        },
        {
            "id": 33,
            "first_name": "Terrill",
            "last_name": "Hills",
            "email": "rshawe2@51.la",
            "date": "01/03/2023"
        },
        {
            "id": 34,
            "first_name": "Miles",
            "last_name": "Cummerata",
            "email": "yraigatt3@nature.com",
            "date": "01/03/2023"
        },
        {
            "id": 35,
            "first_name": "Mavis",
            "last_name": "Schultz",
            "email": "kmeus4@upenn.edu",
            "date": "01/03/2023"
        },
        {
            "id": 36,
            "first_name": "Alison",
            "last_name": "Reichert",
            "email": "jtreleven5@nhs.uk",
            "date": "01/03/2023"
        },
        {
            "id": 37,
            "first_name": "Oleta",
            "last_name": "Abbott",
            "email": "dpettegre6@columbia.edu",
            "date": "01/03/2023"
        },
        {
            "id": 38,
            "first_name": "Ewell",
            "last_name": "Mueller",
            "email": "ggude7@chron.com",
            "date": "01/03/2023"
        },
        {
            "id": 39,
            "first_name": "Demetrius",
            "last_name": "Corkery",
            "email": "nloiterton8@aol.com",
            "date": "01/03/2023"
        },
        {
            "id": 40,
            "first_name": "Eleanora",
            "last_name": "Price",
            "email": "umcgourty9@jalbum.net",
            "date": "01/03/2023"
        },
    ];
    return (
        <>
            <Table data={data} columns={columns}/>
        </>
    )
}

export default Home;
