import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Karachi", "Islamabad", "Lahore", "KPK", "Sargodha"],
  },
  {
    fitlerType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      ".Net Developer",
    ],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "50-1lakh", "1.2lakh to 5lakh"],
  },
];

function FilterCard() {
  return (
    <div>
      <h1>Filter Job</h1>
      <hr />
      <div className="mt-4">
        <RadioGroup>
          {fitlerData.map((data, index) => (
            <div key={index}>
              <h2 className="font-bold text-lg">{data.fitlerType}</h2>
              {data.array.map((item, idx) => (
                <div key={idx} className="my-2 space-x-2 flex items-center">
                  <RadioGroupItem value={item} />
                  <Label className="hover:text-red-600 cursor-pointer">{item}</Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default FilterCard;
