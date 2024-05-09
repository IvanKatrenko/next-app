"use client";
import React, { useEffect, useMemo, useState, ChangeEvent } from "react";
import { type Company } from "./types";


// Content component for the page
const Content = () => {
 
  // props for component TableCompany
interface TableCompanyProps {
    companies: Company[];
}

//1. wyswietlic firmy w tabeli 
const TableCompany: React.FC<TableCompanyProps> = ({companies}) => {
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
                                {company.owners.map((owner, index) => (
                                    <li key={index}>
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

const [companies, setCompanies] = useState<Company[]>([]); // [Company] 
const [pending, setPending] = useState<boolean>(true); // boolean 
const [age, setAge] = useState<number | null>(null);  // number | age owners
const [error, setError] = useState<string>('');  // string | null błąd podczas pobierania danych

    // return (
    //     <div>
    //         <h2>Companies table</h2>
    //         <TableCompany companies={companies} />
    //     </div>
    // )

//   2.           dodac state pending, error i pobieranie w useEffect do useState
// Downloading company data
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

//  5. ** napisz funkcje ktora zwróci funkcje,mapującą na podstawie parametru - nie zwraca firmy,
// ktorych wartosc jest wyzsza od podanego parametru  

 const filterByValue = (value: number) => {
        return (company: Company) => company.worth <= value;
    };

// sort companies by worth
  const sortCompanies = (sortFn: (a: Company, b: Company) => number) => {
        return 
    }

// 3.  dodać filtr roku urodzenia właściciela - starszy niż... jako input text - filtrowane dane do useMemo
const filteredCompanies = useMemo(() => {
  if (!age) return companies;
  return companies.filter((company) =>
      company.owners.some((owner) => {
          const birthYear = new Date(owner.dateOfBirth).getFullYear();
          return birthYear < parseInt(age.toString());
      })
  );
}, [companies, age]);

  //4. * sortowanie po wartosności, a takze funkcje ktora zwróci nowa tablice danych,
  const sortedCompanies = useMemo(() => {
    if (!age) return companies;
    return companies.filter(filterByValue(age));
}, [companies, age]);

 // Handle changing the value of the company value filter
 const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value ? parseInt(event.target.value) : null;
  setAge(value);
};

  const sortByWorth = (a: Company, b: Company) => { return b.worth - a.worth }

  return (
    <>
        <h1>Companies</h1>
        <div>
        <label htmlFor="age"> Filter by age:</label>
      <input
        type="number"
        value={age || ""}
        onChange={(e) => {
          setAge(Number(e.target.value) || null);
        }}
      />
      </div>
      {pending ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        
       <TableCompany companies={sortedCompanies} />
       )}
    </>
    );
};


export default TableCompany();
function TableCompany() {
    throw new Error("Function not implemented.");
}

function setPending(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setError(message: string) {
  throw new Error("Function not implemented.");
}

