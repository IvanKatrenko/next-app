"use client";
import { useEffect, useMemo, useState } from "react";
import { type Company } from "./types";

export const Content = () => {
  const [companies, setCompanies] = useState<Company[]>([]); // [Company] dane firmy
  const [pending, setPending] = useState<boolean>(true); // boolean ladowanie
  const [age, setAge] = useState<number | null>(null);  // number | null wiek wlasciciela firmy
  const [error, setError] = useState<string | null>(null);  // string | null błąd podczas pobierania danych

  // companies in table
interface TableCompany {
    companies: Company[];
}

//1. wyswietlic firmy w tabeli 
const TableCompany: React.FC<TableCompany> = ({companies}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name Company</th>
                    <th>Worth</th>
                    <th>MadeAt</th>             
                    <th>Owners</th>
                    <td>firstname</td>
                    <td>surname</td>
                    <td>dateOfBirth</td>
                </tr>
            </thead>
            <tbody>
                {companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.id}</td>
                        <td>{company.companyName}</td>
                        <td>{company.worth}</td>
                        <td>
                            <ul>
                                {company.owners.map((owner) => (
                                    <li key={owner.firstname}>
                                        {owner.firstname} {owner.surname} (Date of birth: {owner.dateOfBirth})
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

//                            1. wyswietlic firmy w tabeli 
const Table: React.FC = () => {
    
    //table content companies
    const companies: Company[] = [
        {
            "id": "a87bdc7f-7241-4ec3-8c3e-84aeb49577c1",
      "companyName": "ABC Corporation",
      "worth": 1000000,
      "madeAt": "2022-01-01",
      "owners": [
        {
          "firstname": "John",
          "surname": "Doe",
          "dateOfBirth": "1980-05-15"
        },
        {
          "firstname": "Jane",
          "surname": "Doe",
          "dateOfBirth": "1982-08-21"
        }
    ]
        },
        {
            "id": "c8f89e9a-5c03-4c56-b609-ea6e8e1812a5",
            "companyName": "XYZ Industries",
            "worth": 500000,
            "madeAt": "2021-11-10",
            "owners": [
              {
                "firstname": "Michael",
                "surname": "Smith",
                "dateOfBirth": "1975-12-03"
              },
              {
                "firstname": "Emily",
                "surname": "Johnson",
                "dateOfBirth": "1979-09-18"
              }
            ]
        },
    ]

    return (
        <div>
            <h2>Companies table</h2>
            <TableCompany companies={companies} />
        </div>
    )
}

//   2.           dodac state pending, error i pobieranie w useEffect do useState
// Pobieranie danych firmy 
useEffect(() => {
    const run = async () => {
      setPending(true);
      try {
        //Pobranie danych firm z companies.json
        const response = await fetch("/companies.json"); // fetch data from json
        const data = await response.json(); // json to data 
        setCompanies(data);
        setPending(false);
      } catch (error) {
        //  error
        setError((error as Error).message); // error to message
      setPending(false); // pending to false
      }
    };

    run();
  }, []);

//  5. ** napisz funkcje ktora zwróci funkcje,mapującą na podstawie parametru - nie zwraca firmy, ktorych wartosc jest wyzsza od podanego parametru  

  const filterByValue = (value: number) => {
    return (company: Company) => company.worth > value;
  }

// sort companies by worth
  const sortCompanies = (sortFn: (a: Company, b: Company) => number) => {
        return companies.sort(sortFn)
    }

// 3.  dodać filtr roku urodzenia właściciela - starszy niż... jako input text - filtrowane dane do useMemo
  const filteredCompanies = useMemo(() => {
    if(!age) return [...companies];
        return companies.filter((company) =>
            company.owners.some((owner) => {
                const birthYear = new Date(owner.dateOfBirth).getFullYear();
                return birthYear < parseInt(age);
            })
        );
    return companies.filter((company) => true);
  }, [companies, age]);

//4. * sortowanie po wartosności, a takze funkcje ktora zwróci nowa tablice danych,
    const sortedCompanies = useMemo(() => {
        return [...filteredCompanies].sort(sortByWorth);
    }, [filteredCompanies]);

 //   
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value) || null);
  }
  const sortByWorth = (a: Company, b: Company) => { return b.worth - a.worth }

  return (
    <div>
        <h1>Companies</h1>
        <label htmlFor="age"> Filter by age:</label>
      <input
        type="number"
        value={age || ""}
        onChange={(e) => {
          setAge(Number(e.target.value) || null);
        }}
      />
      {pending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
        {/* {TableCompany companies={companies} />} */}
        {filteredCompanies.map((company) => (
          <div key={company.id}></div>
        ))}
      </p>
    )}
    </div>
  );
};

export default TableCompany();
function TableCompany() {
    throw new Error("Function not implemented.");
}

